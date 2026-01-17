-- 1378. Replace Employee ID With The Unique Identifier
/*
Write a solution to show the unique ID of each user, If a user does not have a unique ID replace just show null.
Return the result table in any order.
*/

SELECT eu.unique_id, e.name
FROM Employees e
LEFT JOIN
EmployeeUNI as eu
ON e.id = eu.id


-- 
