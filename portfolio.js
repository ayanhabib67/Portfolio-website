

import{collection,serverTimestamp,db,addDoc}from"./firebase.js"

let submitMessage = async()=>{

    
    let name  = document.getElementById("name")
    let email  = document.getElementById("email")
    let message  = document.getElementById("message")
    
    
    if(name.value||email.value||message.value){

        
        let Usermessage ={
            name : name.value,
            email : email.value,
    message : message.value,
    timestamp : serverTimestamp()
    
}
    
    
    


let dbRef =collection(db,"messageData")


await  addDoc(dbRef , Usermessage)


console.log("todo added");

console.log(Usermessage);





name.value=""
email.value=""
message.value=""
Swal.fire({
    icon: 'success',
    title: 'Good job!',
    text: 'Form submitted successfully.'
  });



}else{
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please fill this field!'
      });
}

    
    
}
let submit = document.getElementById("submit")
submit.addEventListener("click",submitMessage)