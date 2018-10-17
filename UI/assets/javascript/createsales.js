// const submitButton = document.getElementById('addBtn');
// const salesTable = document.getElementsByTagName('table');
// const tableHead = document.getElementById('thead');



// submitButton.onclick = () => {
//     alert('I AM A BUTTON')
// };



// var price = 

var rIndex, salesTable = document.getElementsByTagName('table');

function addRow (){
    var newRow = table.insertRow (table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
product = document.getElementById('product').value,
qty = document.getElementById('qty').value,
price = document.getElementById('price').value;

cell1.innerHTML = product;
cell2.innerHTML = qty;
cell3.innerHTML = price;

slectedRowToInput();

}

function selectedRowToInput() {

    for(var i =1; i<table.rows.length; i++)
    {
        salesTable.rows[i].onclick = function()
    {       }