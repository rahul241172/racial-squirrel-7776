const baseURL = "https://wild-gray-gorilla-garb.cyclic.app/";

const register = document.getElementById("register");
const sign = document.getElementById("signin");

const adminLogin = document.getElementById("adminLogin");

adminLogin.addEventListener("click",() => {
   window.location = "./admin/adminlogin.html";
})

sign.addEventListener("submit",(e) => {
    e.preventDefault();
    const userData = {
       email:sign.logemail.value,
       password:sign.logpass.value
    }
    const res = check(userData);
    if(res){
       fetch(`${baseURL}/user/login`,{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(userData)
        })
        .then((res) => {
           return res.json();
        })
        .then((data) => {
         localStorage.setItem("token",data.token);
         localStorage.setItem("username",data.username);
         window.location = "../messagepage.html";
        })
        .catch((err) => {
           console.log(err.message);
        })
    }
    else{
       alert("Some Fields Are Missing");
    }
})

function check(obj){
   let check = false;
   if(obj.email != "" && obj.password != ""){
       check = true;
   }
   return check;
}


register.addEventListener("submit",(e) => {
    e.preventDefault();

    const userData = {
       name:register.name.value,
       email:register.email.value,
       password:register.pass.value,
    }
    const res = check(userData);
    if(res){
       fetch(`${baseURL}/user/register`,{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(userData)
        })
        .then((res) => {
           return res.json();
        })
        .then((data) => {
            alert(data.message);
        })
        .catch((err) => {
           console.log(err);
        })
    }
    else{
       alert("Some Fields Are Missing");
    }
})

function check(obj){
   let check = false;
   if(obj.name != "" && obj.email != "" && obj.password != ""){
       check = true;
   }
   return check;
}