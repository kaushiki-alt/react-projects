import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const PaginationContainer = () => {
  const { metaInfo, } = useLoaderData();
  const { page, pageCount } = metaInfo.pagination;
  const pages = Array.from({ length: pageCount }, (_, i) => { return i + 1 });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  if (pageCount < 2) {
    return null
  }

  return (
    <div className='mt-16 flex justify-end'>
      <div className="join">
        <button className="btn join-item btn-xs md:btn-md"
          onClick={() => {
            let prevPageNo = page - 1;
            if (prevPageNo < 1)
              prevPageNo = pageCount
            handlePageChange(prevPageNo)
          }}>prev</button>

        {pages.map((pageNo) => {
          return (
            <button
              key={pageNo}
              className={`btn join-item btn-xs md:btn-md ${pageNo === page ? "bg-black border-base-300" : ""} `}
              onClick={() => {
                handlePageChange(pageNo)
              }}>{pageNo}</button>
          )
        })}
        <button className="btn join-item btn-xs md:btn-md"
          onClick={() => {
            let nextPageNo = page + 1;
            if (nextPageNo > pageCount) {
              nextPageNo = 1
            }
            handlePageChange(nextPageNo)
          }}>next</button>
      </div>
    </div>
  )
}

export default PaginationContainer
