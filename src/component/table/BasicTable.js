import React, {useMemo} from "react";
import { useTable } from "react-table";

function BasicTable ({allData, judul}){

    const columns = useMemo(()=> judul, [judul])
    const data = useMemo(()=>allData, [allData])

    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return(
        <div className="row container-search shadow p-3 m-1 bg-body rounded">
            <div className="table-responsive">
            <table className="table table-striped table-hover" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup=>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column)=>(
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr  {...row.getRowProps()}>
                                    {
                                        row.cells.map( cell =>{
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>   
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
                <tfoot>
                    {
                        footerGroups.map(footerGroup=>(
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps}>
                                        <b>{
                                            column.render('Footer')
                                        }</b>
                                    </td>
                                ))
                            }
                        </tr>   
                        ))
                    }
                </tfoot>
            </table>
            </div>
        </div>
    )
}

export default BasicTable;