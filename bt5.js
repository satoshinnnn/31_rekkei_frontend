// yêu cầu khai báo mảng nhân viên 
//thêm nhân viên vào mảng employees
// thêm đối tượng vào bảng
const employees = [
    {
    id: 1,
    name: 'Example 1',
    age: 18,
    address: 'District'},
    {
    id: 2,
    name: 'Example 1',
    age: 18,
    address: 'District',
    }
];
const table = document.getElementById('table');
employees.forEach((employee) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = employee.id;
    const td2 = document.createElement('td');
    td2.innerText = employee.staffName;
    const td3 = document.createElement('td');
    td3.innerText = employee.age;
    const td4 = document.createElement('td');
    td4.innerText = employee.address;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
});
