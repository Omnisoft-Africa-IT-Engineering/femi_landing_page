import Link from "next/link"    
export default async function products(){
    return (
     <>
        <h1>product list</h1>
        <Link href="products/1"> product 1</Link>
        <Link href="products/2"> product 2</Link>
        <Link href="products/3"> product 3</Link>
      </>
    )
}