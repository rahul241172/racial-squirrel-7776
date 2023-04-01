
// Total Users
let userCard=document.getElementById('user-card')
let totalUser=document.getElementById('user-count');
let Userdata=[];

fetch('#')
,then((res)=>{
    return res.json();
})
.then((needData)=>{
    Userdata=needData.data;
    displayUsers(needData.data);
})
.catch((err)=>{
    console.log({'fetch-msg':err.message});
})

// getting all users

function displayUsers(data) {
    userCard.innerHTML=null;
    data.forEach((element)=>{
        let card=document.createElement('div');
        card.className="block";
        let imgbx=document.createElement('div');
        imgbx.className="imgbx";
        let image=document.createElement('img');
        image.setAttribute("src",element.image);
        imgbx.append(image);
        let details=document.createElement('div');
        details.className="details"
        let listhead=document.createElement('div');
        listhead.className="listHead"
        let name=document.createElement("h4");
        name.innerText=element.name;
        listhead.append(name);
        details.append(listhead);
        let ban=document.createElement('div');
        ban.className="ban";
        let button=document.createElement("button");
        button.className="ban-user"
        button.innerText="Block User";
        ban.append(button);
        card.append(imgbx,details,ban);
    })
}