
var container = document.createElement("div");
container.className="container";
var row = document.createElement("div");
row.classList.add("row","m-3");
container.append(row);


async function foo(){
 
    let url=`https://api.mfapi.in/mf`;
    let res1=await fetch(url);
        let res2=await res1.json();
        console.log(res2);
        for(i=0;i<=100;i++){
            row.innerHTML+=`<div class="col-md-4">
        <div class="card" style="width: 18rem;">
  
  <div class="card-body">
  <h5 class="card-title">Scheme Code:${res2[i].schemeCode}</h5>
  <p class="card-text">Scheme Name:${res2[i].schemeName}</p>
  
</div>`
        
        
        }
        document.body.append(container);
    
   
}
foo();
