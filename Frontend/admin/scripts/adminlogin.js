let userid=document.getElementById("admin-userid");
let button=document.getElementById("admin-btn");
let token=false
let password=document.getElementById("admin-password");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    fetch("./admindetail.json")
    .then((data)=>{
        return data.json();
    })
    .then((res)=>{
        fetchdata=res;
        adminsignin(res);
    })  
    .catch((error)=>{
        console.log(error);
    })
});
function adminsignin(data){
    data.forEach((element)=>{
        if(userid.value==element.UserID){
            if(password.value==element.Password){
                Swal.fire(
                    '',
                    '<h3>Welcome Back Admin !</h3>',
                    'success'
                  ).then((res)=>{
                    token=true
                    localStorage.setItem("admin",token);
                    window.location.href="./adminpage.html";
                  })
              
            }else{
                 ;Swal.fire(
                    '',
                    '<h3>Wrong Password. Re-Enter your Password !</h3>',
                    'warning'
                  ).then((res)=>{
                    localStorage.clear()
                    window.location.href="./adminpage.html";
                  })
            }
        }else{
            Swal.fire(
                '',
                '<h3>You are not an Admin !</h3>',
                'warning'
              ).then((res)=>{
                localStorage.clear()
                window.location.href="./adminpage.html";
              })
        }
    })
}
