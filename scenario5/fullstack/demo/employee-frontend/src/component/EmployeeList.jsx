import { useEffect, useState } from 'react'


const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        fetch("https://localhost:8080/api/employees?page=0&size=5")
        .then(res => res.json())
        .then(data => setEmployees(data.content));
    },[])

  return (
    <div className='p-4'>
        <h1 className='text-xl font-bold mb-4'>Employees</h1>
        <table className='min-w-full border'>
            <thead className='bg-gray-200'>
                <tr>
                    <th className='p-2'>ID</th>
                    <th className='p-2'>Name</th>
                    <th className='p-2'>Department</th>
                    <th className='p-2'>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(emp => (
                    <tr key={emp.id} className='border-t'>
                        <td className='p-2'>{emp.id}</td>
                        <td className='p-2'>{emp.name}</td>
                        <td className='p-2'>{emp.department}</td>
                        <td className='p-2'>{emp.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default EmployeeList
