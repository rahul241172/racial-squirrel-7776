
var url="https://wild-gray-gorilla-garb.cyclic.app"


window.addEventListener("load",function(){
    fetch(`${url}/user/all`)
.then((res)=> res.json())
.then((data)=>{
    console.log(data)
    displayContact(data)
})
   
})
const cont=document.getElementById("contact-list")

function displayContact(user){
    cont.innerHTML="";
   user.forEach(element => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=element.picture
    let name=document.createElement("p")
    name.classList.add("contact-btn")
    name.textContent=element.name
    div.append(img,name)
    cont.append(div)
   });
   let contact=document.querySelectorAll(".contact-btn")

for(let btn of contact){
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        let name=e.target.innerText
        window.location.href = `http://localhost:8000?q=${name}`
    })
}
}

//---------------------------------------------- status show-----------------------------------------//




    

//---------------------------------------------- status show-----------------------------------------//