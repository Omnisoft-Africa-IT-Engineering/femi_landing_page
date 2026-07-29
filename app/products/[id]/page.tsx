export default function productDetail(
    {params }: {params:{id :string}}

){
    return <h1>prduct {params.id}</h1>
}