var user=[{name: 'John', profile:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"},{name: 'John', profile:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}];
var url=""


window.addEventListener("load",function(){
    // fetch(url)
// .then(res=> res.json)
// .then((data)=>{
//     user=data;
// })
    displayContact(user)
    console.log(user)
})
const cont=document.getElementById("contact-list")

function displayContact(user){
    cont.innerHTML="";
   user.forEach(element => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=element.profile
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