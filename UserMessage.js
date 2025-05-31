

import{collection,db,orderBy,onSnapshot,query, onAuthStateChanged,auth}from"./firebase.js"




onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const uid = user.uid;





let getPortfolio =async ()=>{
    let projects = document.getElementById("projects")
    let collectionRef =collection(db,"messageData")
let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))

await onSnapshot(dbRef,(snapShot)=>{
projects.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().email;
let data2 = doc.data().message;
let data3 = doc.data().name;

projects.innerHTML += `
  <div class="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-2xl transition-transform transform hover:-translate-y-1">
    <h3 class="text-xl font-semibold text-indigo-400 mb-3">From: ${data3} (${data1})</h3>
    <p class="text-gray-300 whitespace-pre-wrap">message :${data2}</p>
  </div>
`;


})

})

}

getPortfolio()





} else {
    location="index.html"
}
});