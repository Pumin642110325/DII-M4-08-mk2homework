var submit = document.getElementById('submit')
var inputname = document.getElementById('name')
var inputusername = document.getElementById('username')
var table = document.getElementById('inputTable')
var inputselect = document.getElementById('select')
var count = 0;

function addTable() {
    count++
    let textname = inputname.value
    let textusername = inputusername.value
    let textselect = inputselect.value
    console.log(textname)
    console.log(textusername)
    console.log(textselect)
    let row = document.createElement('tr')
    let dataName = document.createElement('td');
    dataName.innerText = textname
    let dataUserName = document.createElement('td');
    dataUserName.innerText = textusername
    let dataSelect = document.createElement('td');
    dataSelect.innerText = textselect
    row.appendChild(dataSelect)
    row.appendChild(dataName)
    row.appendChild(dataUserName)

    table.appendChild(row)
    document.getElementById('count').innerText = count
}



submit.addEventListener('click', addTable)