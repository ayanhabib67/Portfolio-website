import{collection,db,query,orderBy,onSnapshot}from"./firebase.js"



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
 <div 
    class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
    data-aos="fade-up"
  >
    <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Project</h3>
    <p><span class="font-semibold">Title:</span> ${data1}</p>
    <p><span class="font-semibold">Project Name:</span> ${data2}</p>
    <p><span class="font-semibold">Description:</span> ${data3}</p>
    <a href="${data4}" target="_blank" class="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline">Visit project</a>
  </div>
`;


})

})

}

getPortfolio()
