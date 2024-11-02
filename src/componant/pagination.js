import ReactPaginate from "react-paginate";

import React from 'react'
function MoviesPagination({getPages,}) {
    const handlePageClick=(data)=>{
        // console.log(data.selected+1)
        getPages(data.selected+1)
    }
    const pageCount=500
    return (
        <>
            
            <ReactPaginate
                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< "
                containerClassName="pagination justify-content-center p-5"
                pageClassName='page-item'
                pageLinkClassName="page-link"	
                activeClassName="active"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"                
            />
        </>
    )

}

export default MoviesPagination

