import React from 'react'


const Pagination = ({onPageChange,blogs,currentPage,pageSize}) => {
    const totalPages=Math.ceil(blogs.length / pageSize);
    const renderPaginationLinks=()=>{
        return Array.from({length:totalPages},( _, i)=>i+1).map((pageNumber)=>(
            <li className={pageNumber===currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href="#" onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }

  return (
    <ul className='pagination my-8 gap-4 flex-wrap'>
      <li>
        <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage===1} >previous</button>
      </li>
      <div className='flex gap-4'>{renderPaginationLinks()}</div>
      <li>
        <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage===totalPages}>next</button>
      </li>
    </ul>
  )
}

export default Pagination
