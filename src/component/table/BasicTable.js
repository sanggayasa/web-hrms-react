import React, {useMemo} from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./colomns";
import MOCK_DATA from "./MOCK_DATA.json";

function BasicTable (){
    // console.log(judul);
    // console.log(MOCK_DATA);
    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=>MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return(
        <div className="table-responsive">
            <h1>hallo</h1>
        <table className="table table-striped table-hover" {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                            <th></th>
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
        </table>
        </div>
    )
}

export default BasicTable;