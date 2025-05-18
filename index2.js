 
//////STEP1.Define an initial array of freelancers,names & occupations.
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
];
console.log(freelancers)
///STEP2.initialize an array of at least two freelancers with names, occupations, and starting prices.
const newFreelancers = [
  { name: "Alice", price: 25, occupation: "writer" },
  { name: "Bob", price: 51, occupation: "teacher" },
  { name: "Carol", price: 43, occupation: "programmer" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
 
];
 

 function init(){
  console.log(document)
  console.log(newFreelancers)

//STEP3. Choose how Freelancers' information is to be displayed on the page.
const root =document.querySelector("#root")
 
const h1 = document.createElement("h1");
 h1.innerHTML = "Freelancers";

   root.append(h1);
   
   const freelancersTable = document.createElement("table")
    const thead = document.createElement("thead")
     const tbody = document.createElement("tbody")

     for(let key of Object.keys(freelancers[0])){
       const th = document.createElement("th")
        th.innerText = key
        th.style.color ="green"
         
        thead.appendChild(th)
     }
      
     freelancersTable.appendChild(thead)
     freelancersTable.appendChild(tbody)
      
     root.appendChild(freelancersTable)

     //STEP4. Initial array of freelancers is rendered onto the page.
     renderFreelancers()
     
     } 
     function renderFreelancers() {
   
  const freelancersTable = document.querySelector("tbody");

  const freelancerElements = freelancers.map((freelancer) => {
    const row = document.createElement("tr");

    const freelancerName = document.createElement("td");
    freelancerName.innerHTML = freelancer.name;

    const freelancerPrice = document.createElement("td");
    freelancerPrice.innerHTML = freelancer.price;

    const freelancerOccupation = document.createElement("td");
    freelancerOccupation.innerHTML = freelancer.occupation;

    row.appendChild(freelancerName);
    row.appendChild(freelancerPrice);
    row.appendChild(freelancerOccupation);

    return row;
  });
      freelancersTable.replaceChildren(...freelancerElements);
    }
    
     const addFreelancers =() =>{
      const newFreelancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
      console.log(newFreelancers.length)

      freelancers.push(newFreelancer)

       renderFreelancers()
    };
    
 //STEP5.write a function to generate a new random freelancer.
 setInterval  (addFreelancers, 2000)
   
 

    
  
 
 
//STEP6.write a function to calculate the average starting price of your freelancers' array
function calculateStartPrice(freelancer) {
  if(freelancer.price === 0){
    return total;
  }
  console.log()
  

}




        






init();