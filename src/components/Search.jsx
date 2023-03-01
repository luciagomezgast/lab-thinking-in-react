import { useState } from 'react';

function Search({searchProduct}){

    const [search, setSearch] = useState("")

    const searchHandler = (e)=>{
        setSearch(e.target.value)
        searchProduct(e.target.value)
    }


    return(
        <>
         <nav className="navbar bg-body-tertiary mx-auto">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="text" placeholder="Search" value={search} onChange={searchHandler} aria-label="Search"/>
          </form>
        </div>
      </nav>
        </>
       
    )
}
export default Search;