
import{serverTimestamp,collection, addDoc,db,onSnapshot,query, orderBy,deleteDoc ,doc,onAuthStateChanged ,auth,signOut }from"./firebase.js"


onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const uid = user.uid;
      
    



let portfolioAdd =async ()=>{

    
    let title =document.getElementById("title")
    let discripction =document.getElementById("discripction")
    let projectName  =document.getElementById("projectName")
    let url  =document.getElementById("url")
    
    
if(title.value&&discripction.value&&projectName.value&&url.value){

    
    let portfolioData ={
        titlePortfolio : title.value,
        discripctionPortfolio : discripction.value,
        projectNamePortfolio : projectName.value,
        url:url.value,
        timestamp : serverTimestamp()
        
    }
    
    
    
    let dbRef =collection(db,"Portfolio")

 
    await  addDoc(dbRef , portfolioData)

    title.value=""
    discripction.value=""
    projectName.value=""
    url.value=""
    
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

let addPortfolio = document.getElementById("addPortfolio")
addPortfolio.addEventListener("click",portfolioAdd)





let getPortfolio =async ()=>{
    let projects = document.getElementById("projects")
    let collectionRef =collection(db,"Portfolio")
    let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
    
    await onSnapshot(dbRef,(snapShot)=>{
projects.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().titlePortfolio;
let data2 = doc.data().projectNamePortfolio;
let data3 = doc.data().discripctionPortfolio;
let data4 = doc.data().url;

projects.innerHTML += `
<div class="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 mb-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl border border-gray-200 dark:border-gray-700">
<div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white">Project</h3>
      <button 
      onClick="deleteProjects('${doc.id}')" 
        class="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded-lg transition"
        title="Delete Project"
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        Delete
        </button>
        </div>
        <div class="space-y-2 text-sm text-gray-700 dark:text-gray-200">
        <p><span class="font-semibold">Title:</span> ${data1}</p>
        <p><span class="font-semibold">Project Name :</span> ${data2}</p>
        <p><span class="font-semibold">Discription:</span> ${data3}</p>
        
        
        
        <a href="${data4}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline dark:text-blue-400">Visit   project</a>
        
        
        </div>
        </div>
        `;
        
        
    })
    
})

}

getPortfolio()





let deleteProjects = async(id)=>{
    await deleteDoc(doc(db, "Portfolio", id));
    console.log("test",id);
    
}


window.deleteProjects=deleteProjects








let logout = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


let logoutBtn = document.getElementById("logout-Btn")
logoutBtn.addEventListener("click",logout) 


let Usermessages = document.getElementById("UserMessages")
Usermessages.addEventListener("click",(()=>{
    location="UserMessage.html"
}))



} else {
    location="index.html"
}
});
