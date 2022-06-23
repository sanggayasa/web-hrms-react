function HeadTb({data}){
    
    return (
        <thead>
            <tr>
                {
                    data.map(key=><th key={key}>{key}</th>)
                }
            </tr>
        </thead>
    )
}

export default HeadTb;