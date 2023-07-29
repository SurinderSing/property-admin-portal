import React, { useEffect, useState } from 'react'

const usePagination = (value) => {
    const [activePage, setActivePage] = useState(1);
    const [data, setData] = useState(value || []);

    const [paginationData, setPaginationData] = useState({
        Totalpropducts: 0,
        ProductsPerPage: 6,
        TotalPages: function () { return Math.ceil(this.Totalpropducts / this.ProductsPerPage) },
        TotalPagesArray: function () { return [...Array(this.TotalPages()).keys()] }
    });
    useEffect(() => {
        if (value) {
            setPaginationData((pre) => ({ ...pre, Totalpropducts: value.length }))
        }
    }, [value])

    let start = activePage - 2 < 0 ? 0 : activePage - 2
    let end = activePage - 2 < 0 ? activePage + 2 : activePage + 1

    useEffect(() => {
        value && setData(value.slice(paginationData.ProductsPerPage * (activePage - 1), paginationData.ProductsPerPage * activePage))
    }, [activePage, value])

    const Pagination = () => {
        return (
            <nav className="theme-pagination">
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link" aria-label="Previous" onClick={() => { activePage > 1 ? setActivePage(p => p - 1) : "" }}>
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {paginationData.TotalPagesArray().slice(start, end).map((item) => <li className={`page-item${item + 1 === activePage ? " active" : ""}`} key={item} onClick={() => setActivePage(item + 1)}><a href="#" className="page-link" >{item + 1}</a></li>)}

                    <li className="page-item">
                        <a href="#" className="page-link" aria-label="Next" onClick={() => { activePage < paginationData.TotalPages() ? setActivePage(p => p + 1) : '' }}>
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
    return [Pagination, data]
}

export default usePagination