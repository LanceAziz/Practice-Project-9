var prodName = document.getElementById('prodName');
var prodPrice = document.getElementById('prodPrice');
var prodCat = document.getElementById('prodCat');
var prodDesc = document.getElementById('prodDesc');

var productContainer;
if (localStorage.getItem("Session_8_Study") != null) {
    productContainer = JSON.parse(localStorage.getItem("Session_8_Study"));
    displayData(productContainer);
}
else {
    productContainer = [];
}
function addProduct() {
    var product = {
        name: prodName.value,
        price: prodPrice.value,
        category: prodCat.value,
        description: prodDesc.value
    }
    productContainer.push(product);
    localStorage.setItem("Session_8_Study", JSON.stringify(productContainer));
    clearForm();
    displayData(productContainer);
}
function displayData(list) {
    var temp = ``;
    for (let i = 0; i < list.length; i++) {
        temp +=
            `<tr>
        <td>${i}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].description}</td>
        <td><button class="btn btn-outline-warning" onclick="updateProduct(${i})">Update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteProduct(${i})">Detele</button></td></tr>`;
    }
    document.getElementById('myTable').innerHTML = temp;
}
function clearForm() {
    prodName.value = "";
    prodPrice.value = "";
    prodCat.value = "";
    prodDesc.value = "";
}
function deleteProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem("Session_8_Study", JSON.stringify(productContainer));
    displayData(productContainer);
}
var updatedIndex;
function updateProduct(index) {
    prodName.value = productContainer[index].name;
    prodPrice.value = productContainer[index].price;
    prodCat.value = productContainer[index].category;
    prodDesc.value = productContainer[index].description;

    updatedIndex = index;
    document.getElementById('update').classList.remove('d-none');
    document.getElementById('add').classList.add('d-none');
    document.getElementById('update').setAttribute("onclick",`updtaedProduct(${updatedIndex})`);
}
function updtaedProduct(index){
    productContainer[index].name = prodName.value;
    productContainer[index].price = prodPrice.value;
    productContainer[index].category = prodCat.value;
    productContainer[index].description = prodDesc.value;

    localStorage.setItem("Session_8_Study", JSON.stringify(productContainer));
    clearForm();
    displayData(productContainer);
    document.getElementById('update').classList.add('d-none');
    document.getElementById('add').classList.remove('d-none');
}
function search(term){
    var searchContainer = [];
    for (let i = 0; i < productContainer.length; i++) {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())){
            searchContainer.push(productContainer[i]);
        }
        displayData(searchContainer);
    }
}