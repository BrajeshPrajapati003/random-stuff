const ListTable = ()=> {
    const table = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    return (
        <>
            <ul className="m-3 p-3 text-fuchsia-500 border-2 rounded">
                <h2 className="justify-center text-center underline font-bold" >Table of {table[0]}</h2>
                {
                    table.map( (num, idx) => (
                    <li
                    key={idx}> 2 * {idx + 1} = {num}
                    </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ListTable;