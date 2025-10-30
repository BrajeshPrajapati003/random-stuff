const ListKeys = ()=> {
    const names = ['brajesh', 'prajapati', 'vijay', 'tyrant'];
    return (
        <ul className="m-4 list-[circle] p-4">
            { names.map((name, index) => (
                <li key={index}>User: {name}</li>
            ))}
        </ul>
    )
}


export default ListKeys;