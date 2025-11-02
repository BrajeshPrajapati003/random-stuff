const NameList = ()=> {
    const names = ['tester', 'developer', 'admin', 'brajesh'];

    return (
        <div className="bg-linear-to-br from-blue-700 via-cyan-800 to-black text-white m-2 p-4 rounded shadow-2xl">
            <div>
                <h1 className="transform hover:scale-110 hover:rotate-2 transition-all text-center font-mono text-xl">Names List</h1>
            </div>
            <ul>
                {names.map((name, idx) => (
                    <li key={idx}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default NameList;



