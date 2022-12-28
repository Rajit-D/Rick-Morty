import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

function Pagination(props) {
    const [width, setWidth] = useState(window.innerWidth);
    let updateDimension = () => {
        setWidth(window.innerWidth);
    }
    console.log(width)
    useEffect(() => {
        window.addEventListener("resize", updateDimension);
        return () => window.removeEventListener("resize", updateDimension)
    }, [])
    return (
        <>
            <style jsx>
                {`
                    @media (max-width: 768px){
                        .next,
                        .prev{
                            display: none;
                        }
                        .pagination{
                            font-size: 14px;
                        }
                    }
                `}
            </style>
            <ReactPaginate
                className='pagination justify-content-center gap-4 my-4'
                forcePage={props.pageNumber === 1 ? 0 : props.pageNumber - 1}
                nextLabel='Next'
                previousLabel='Prev'
                nextClassName='btn btn-success next'
                previousClassName='btn btn-success prev'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                onPageChange={(data) => { props.setPageNumber(data.selected + 1) }}
                marginPagesDisplayed={width < 576 ? 1 : 4}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                activeClassName='active'
                pageCount={props.info?.pages}
            />
        </>
    )
}

export default Pagination