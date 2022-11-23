
var allproducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var pricetotal = document.querySelector("#pricetotal")
var btn = document.querySelector("#addToCart")

allproducts.forEach(function (item){
 item.onclick = function (){
    totalprice += parseInt(item.getAttribute("price"))
    content.innerHTML += item.textContent + " , ";

    if (content.innerHTML !="")
    {
        btn.style.display= "block";
 }
   
}
{
if ( btn.onclick)
{pricetotal.innerHTML=totalprice}
}
})
 
 

   


