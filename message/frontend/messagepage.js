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

//create status
let status_add = document.querySelector(".block.create_status")
status_add.addEventListener("click",()=>{
    
    window.location.href="status.html"
}) 

//base urls
let url = "https://shy-gray-walrus-tutu.cyclic.app";
let base = `${url}/status`;
let get = `${base}/readStatus`;

//getting status
let imagespace = document.querySelector(".imgbox");
let namespace = document.querySelector("#heading");
let timespace  = document.querySelector(".time");
let viewspace = document.querySelector("#viewcount");


const show = async()=>{
try {
    const res = await fetch(get,{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data = await res.json();
    Imported(data)

} catch (error) {
    console.log({error:`error in getting ${error}`})
}
};



let container = document.querySelector("#recent_updates");

function Imported(data){
    container.innerHTML=null;

    data.map((el)=>{
        let box = document.createElement("div")
        box.classList.add="block"
        box.classList.add="unseen"
    
        let imagebox = document.createElement("div")
        imagebox.classList.add="imgbx"
        const image = document.createElement("img")
        image.src = el.image;

        let detailsbox = document.createElement("div")
        detailsbox.classList.add="details"

        let listbox = document.createElement("div")
        listbox.classList.add="listHead"
        const name=document.createElement("h4");
        name.innerText=el.name;
        const time = document.createElement("p")
        time.classList.add="time";
        time.innerText=el.createdAt;

        let mssgbox = document.createElement("div")
        mssgbox.classList.add="message_p"
       
        imagebox.append(image)
        listbox.append(name,time)
        detailsbox.append(listbox,mssgbox)
        box.append(imagebox,detailsbox)
        container.append(box);
    })
  
}

//---------------------------------------------- status show-----------------------------------------//