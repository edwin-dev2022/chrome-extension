

let myLeads = []
let oldLeads = []

const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#save-btn")
const ulEl = document.querySelector("#ul")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

//console.log(store)
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

 
/////////////////////////////
tabBtn.addEventListener("click", function() {

  chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify( myLeads ) )
    render(myLeads)
  
  })

   })



////////////////////////////

function render(leads){
  let listItems =""
  for(let i=0; i < leads.length; i++){
  listItems +=`
    <li>
      <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
      </a>
    </li>
    `
   }
   ulEl.innerHTML = listItems
  
  }
   
    
 /////////////////////////////////////

deleteBtn.addEventListener("dblclick", function (){
   localStorage.clear()
    myLeads = []
    render(myLeads)
   // ulEl.remove()
})
///////////////////////////////////


inputBtn.addEventListener("click", function(){

    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",  JSON.stringify(myLeads))
    render(myLeads)
})




