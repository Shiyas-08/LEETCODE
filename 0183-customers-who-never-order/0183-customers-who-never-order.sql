# Write your MySQL query statement below


select s.name as Customers 
from Customers s
left join 
Orders o
on s.id=o.customerId
where o.customerId is null 

