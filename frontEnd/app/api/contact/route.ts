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

    // Authentification auprès de Google avec le compte de service
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const dateDuJour = new Date().toISOString(); // Date et heure actuelles

    // Ajout de la ligne dans la feuille Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:F', // Assure-toi que ta feuille s'appelle bien Sheet1 (ou renomme-la selon ton onglet)
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[dateDuJour, nom, email, telephone || '', entreprise || '', message]],
      },
    });

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error("Erreur lors de l'écriture dans Google Sheets :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message." },
      { status: 500 }
    );
  }
}