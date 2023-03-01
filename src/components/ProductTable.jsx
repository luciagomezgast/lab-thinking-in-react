import Row from "./Row"
function ProductsPage({products}){

    return(
<table className="table  w-50 mx-auto ">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
            <>
            {products.map((product) => {
               return(
                  <Row name={product.name} category={product.category} price={product.price} inStock={product.inStock}
                  />
               )
            }   
       
    )}
            </>
            </tbody>
            </table>
     
    )}


export default ProductsPage