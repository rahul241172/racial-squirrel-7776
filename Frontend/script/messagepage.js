
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

let status_box = document.querySelector(".statusBox");
let status_area = document.querySelector("#status_area");

function findUnseenStatus(out) {
    let unseen = document.querySelectorAll("#recent_updates .block.unseen");
    unseen.forEach((elem, i) => {
        elem.addEventListener("click", () => {
            status_box.innerHTML=""
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
            closeIcon();
            status_area.classList.add("hide");
            status_box.classList.remove("hide");
            //console.log(elem);
            let timer = setTimeout(() => {
                status_area.classList.remove("hide");
                status_box.classList.add("hide");
                clearTimeout(timer);
            }, 3000)
        })
    })
    //console.log(unseen);
}


// close option
function closeIcon() {
    let closes = document.querySelector(".statusBox .status_header").childNodes[5];
    closes.addEventListener("click", () => {
        status_area.classList.remove("hide");
        status_box.classList.add("hide");
    })
}


// get status

let recent_updates = document.querySelector("#recent_updates");

function statusData() {
    fetch("https://shy-gray-walrus-tutu.cyclic.app/status/readStatus", {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((out) => {
            let data = out.map((elem) => {
                return renderStatus(elem);
            })
            recent_updates.innerHTML = ""
            recent_updates.innerHTML = data.join(" ")
            findUnseenStatus(out);
        })
        .catch((err) => console.log(err));
}
statusData();

function renderStatus(data) {
    return (`<div class="block unseen">
    <div class="imgbx">
        <img src=${data.image}>
    </div>
    <div class="details">
        <div class="listHead">
            <h4>${data.name}</h4>
            <p class="time">04:15</p>
        </div>
        <div class="message_p">
            <p>Just Now</p>
        </div>
    </div>
</div>`)
}



    

//---------------------------------------------- status show-----------------------------------------//