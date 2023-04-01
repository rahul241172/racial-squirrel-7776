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



//base urls
let link = "https://shy-gray-walrus-tutu.cyclic.app";
let base = `${link}/status`;
let get = `${base}/readStatus`;

// getting divs
const container = document.querySelector("#recent_updates");
let status_box = document.querySelector(".statusBox");

//getting status
const show = ()=>{
try {
    fetch(get,{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then((res) => res.json())
    .then((out) => {
        let data = out.map((elem) => {
            return Imported(elem);
        })
        container.innerHTML = (data.join(" "));
        findUnseenStatus(out);
    })
    .catch((err) => console.log(err));
} catch (error) {
    console.log({error:`error in getting ${error}`})
}
};

show()

function Imported(data){
    
   return (`
   <div class="block unseen">
    <div class="imgbx">
        <img src=${data.image}>
    </div>
    <div class="details">
        <div class="listHead">
            <h4>${data.name}</h4>
            <p class="time">${data.createdAt}</p>
        </div>
        <div class="message_p">
            <p>Just Now</p>
        </div>
    </div>
</div>
   `)
}


function findUnseenStatus(out) {
    let unseen = document.querySelectorAll("#recent_updates .block.unseen");
    unseen.forEach((elem, i) => {
        elem.addEventListener("click", () => {
            status_box.innerHTML = `<div class="status_header">
             <div class="imgcontent">
                 <div class="imgBx">
                     <img src=${out[i].image} style="width:80%;">
                 </div>
                 <h3>${out[i].name}</h3>
             </div>
             <div class="views">
                 <ion-icon name="eye"></ion-icon>
                 <p>${out[i].views}</p>
             </div>
             <div><ion-icon name="close"></ion-icon></div>
         </div>`;
            // closeIcon();
            // status_area.classList.add("hide");
            // status_box.classList.remove("hide");
            // //console.log(elem);
            // let timer = setTimeout(() => {
            //     status_area.classList.remove("hide");
            //     status_box.classList.add("hide");
            //     clearTimeout(timer);
            // }, 3000)
        })
    })
    //console.log(unseen);
}

//---------------------------------------------- status show-----------------------------------------//