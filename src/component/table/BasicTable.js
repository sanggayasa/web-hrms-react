import React, {useMemo} from "react";
import { useTable, useSortBy, usePagination, useRowSelect} from "react-table";
import { Checkbox } from "./CheckBox";

function BasicTable ({allData, judul}){

    const columns = useMemo(()=> judul, [judul])
    const data = useMemo(()=>allData, [allData])
    // console.log(allData);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        prepareRow,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        setPageSize,
        state,
    } = useTable({
        columns,
        data,
        initialState:{ pageIndex:0}
    }, 
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
        hooks.visibleColumns.push((columns)=>{
            return [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps}) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell: ({row}) => <Checkbox {...row.getToggleRowSelectedProps()} />
                    
                },
                ...columns
            ]
        })
    }
    );

    const {pageIndex, pageSize} = state ;
    

    return(
        
        <div className="row container-search shadow p-3 m-1 bg-body rounded">
            <div className="table-responsive">
            <table className="table table-striped table-hover" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup)=>(
                            <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column)=>(
                                    <th key={column} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span key={column}>
                                            {column.isSorted ? (column.isSortedDesc ? '⬇' : '⬆'): ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr key={row}  {...row.getRowProps()}>
                                    {
                                        row.cells.map( cell =>{
                                            return <td  key={cell} {...cell.getCellProps()}>{cell.render('Cell')}</td>   
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
                
            </table>
            <div>
                
                <div className="row">
                    <div className="col-3 ">
                        <ul className="pagination justify-content-end">
                            <li className="page-item btn" onClick={()=> previousPage()} disabled={!canPreviousPage}>
                                <span className="page-link">Previous</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 mt-3 ">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                        | Go to Page: {' '}
                    </div>
                    <div className="col">
                            <input type="number" className= "form-control mt-2"  placeholder = {pageIndex + 1}onChange={e=>{
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(pageNumber)
                            }}
                            
                            />
                    </div>
                    <div className="col">
                        <select className = "form-control m-2" value={pageSize} onChange={e => setPageSize(Number(e.target.value)) }>
                            {
                                [10, 25, 50].map(pageSize =>(
                                    <option key ={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                )) 
                            }
                        </select>
                    </div>
                    <div className="col-3">
                        <ul className="pagination ">
                            <li className="page-item btn" onClick={()=> nextPage()} disabled={!canNextPage}>
                                <span className="page-link">Next</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            {
                // console.log(selectedFlatRows.map((row)=> row.original))
            }
            </div>
        </div>
    )
}

export default BasicTable;