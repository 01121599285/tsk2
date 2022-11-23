
var allproducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")

allproducts.forEach(function (item){
item.onclick = function (){
    content.innerHTML += item.textContent + "&"
}
})
