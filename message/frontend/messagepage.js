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
const container = document.querySelector(".block.unseen");


//getting status
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
    console.log(data)
} catch (error) {
    console.log({error:`error in getting ${error}`})
}
};


function Imported(data){
    
    container.innerHTML="";
    data.map((el)=>{
        
        // const box = document.createElement("div")
        // // box.classList.add=("block")
        // box.classList.add("unseen")
    
        const imagebox = document.createElement("div")
        imagebox.classList.add("imgbx")
        const image = document.createElement("img")
        image.src = el.image;
        imagebox.append(image)

        const detailsbox = document.createElement("div")
        detailsbox.classList.add("details");

        const listbox = document.createElement("div")
        listbox.classList.add("listHead");
        const Statusname=document.createElement("h4");
        Statusname.innerText=el.name;
        const time = document.createElement("p")
        time.classList.add("time");
        time.innerText=el.createdAt;
        listbox.append(Statusname,time)


        const mssgbox = document.createElement("div")
        mssgbox.classList.add("message_p");
        const mssg = document.createElement("p")
        time.innerText="Just Now";
        mssgbox.append(mssg)
        

       
        detailsbox.append(listbox,mssgbox)
        container.append(imagebox,detailsbox);
    })
  
}
show()

//---------------------------------------------- status show-----------------------------------------//