fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(names => {
for (let i = 0; i < names.length; i++) {
      var selected=document.getElementById("slc");
            var addedoption=document.createElement("option");
   addedoption.innerHTML=names[i].name.common;
   selected.appendChild(addedoption);}
});

 function createbutton(){
      var selectedcountry=document.getElementById("slc").value;
      fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
            for (let i = 0; i < data.length; i++) {      
                 if(data[i].name.common==selectedcountry){ 
                  document.getElementById("addedcurrencies").innerHTML="";
                  var newbtn=document.createElement("button");
 var btnvalue=Object.keys((data[i]).currencies);
newbtn.innerHTML=btnvalue;
document.getElementById("addedcurrencies").appendChild(newbtn);
document.getElementById("addedflags").src=data[i].flags.png;
document.getElementById("addedflags").style.visibility="visible";
}
     
}
      });

}
function exchangerate(){
      var selectedcurrency = document.getElementById("addedcurrencies").innerHTML;
      var URL = 'https://api.fastforex.io/fetch-multi?from=' + selectedcurrency + '&to=USD&api_key=aa4aee2b2f-a7da6e798d-rr3d6m'
      fetch(URL)
         .then(response => response.json())
         .then(data => {
           var exchangerate = data.results.USD;
           document.getElementById("exchanged").innerHTML= "1"+selectedcurrency +"="+exchangerate +"$";
         });
   }
