var items=document.querySelectorAll(".items");
var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
items.forEach((faq)=>{
    faq.addEventListener("click",toggelanswer);
});
function toggelanswer(){
    items.forEach((item)=>{
        if( item.className == "active" ){
            item.classList.remove("active");
        }
    })
    if(this.className !="active"){
        this.classList.toggle("active");
    }
}