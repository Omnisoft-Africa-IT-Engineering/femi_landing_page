import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, entreprise, message } = body;

    // Validation rapide des champs obligatoires
    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir les champs obligatoires.' },
        { status: 400 }
      );
    }

    // 1. Nettoyage robuste de la clé privée
    let privateKey = process.env.GOOGLE_PRIVATE_KEY || '';
    
    // Supprime les éventuels guillemets en début/fin de chaîne ajoutés sur Vercel
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1);
    }
    
    // Remplace les "\n" littéraux par de vrais sauts de ligne PEM
    privateKey = privateKey.replace(/\\n/g, '\n');

    // 2. Vérification de la présence du mail du compte de service
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL;

    if (!privateKey || !clientEmail) {
      console.error('Variables d\'environnement Google manquantes.');
      return NextResponse.json(
        { error: 'Erreur de configuration serveur.' },
        { status: 500 }
      );
    }

    // Authentification auprès de Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const dateDuJour = new Date().toLocaleString('fr-FR', { timeZone: 'UTC' });

    // Ajout de la ligne dans Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:F', // Vérifiez bien que votre onglet s'appelle 'Sheet1' (ou 'Feuille 1')
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[dateDuJour, nom, email, telephone || '', entreprise || '', message]],
      },
    });

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès !' });
  } catch (error: unknown) {
    console.error("Erreur lors de l'écriture dans Google Sheets :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message." },
      { status: 500 }
    );
  }
}