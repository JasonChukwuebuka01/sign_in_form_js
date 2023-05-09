window.onload=()=>{

    

 let userName= document.getElementById("userName");

  let password=document.getElementById("password");

  let check=document.getElementById("check");

  let keep=document.getElementById("keep");

  let form=document.getElementById("form");

  let button=document.getElementById("signI");

  

  

//CASE 1: (Form Validation)

form.addEventListener("submit",(e)=>{

      

      let error=[];

        

    if(password.value.length < 8){

        alert("password should be up to 8 values");

       error.push("wrong"); 

       password.style.animation="shake .2s linear 3 alternate";

       password.style.borderColor="red";

    }else{

        password.style.borderColor="green";

    }

    

          

      

   if(password.value.length > 10){

      alert("password should be less than 8 values ");

    error.push("wrong"); 

  password.style.animation="shake .2s linear 3 alternate";

  password.style.borderColor="red";

    };

      

      

          

    if(error.length > 0){

      e.preventDefault();

  

  };  

      

      

      

});//End of case 1

  

  

  

      

  

//CASE 2: (Hide/ show password);

check.addEventListener("click",()=>{

       

      if(check.checked){

         password.type="text";

         keep.innerHTML=`Hide Password 🙊`;

           

       }else{

           password.type="password";

           keep.innerHTML=`Show Password 🙈`;

       };

            

});// End of Case 2
}