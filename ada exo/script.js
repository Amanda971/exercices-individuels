
function askName() {
  var nom= prompt("Hey what's ur name ?!");
  if (nom!= null) {
  alert("hey! " + nom +  " nice too meet u ")
  
  document.getElementById("Coucou").innerHTML =
    "Super! "  + nom +  " sois la/le bienvenue ." ;
  }
  }
  
  function askBirthYear() {
  var ans= prompt("Quel est ton birth Year??");
  var today= new Date ()
  date= today.getFullYear()
  if (ans == null) {
  alert("erreur veux-tu recommencer")}
  else {
  var myage = date-ans
  document.getElementById("tage").innerHTML = 
  "Tu as "+ myage +" ans"
  }  
  }
  askName()
  askBirthYear()
  
  function getAge(){
  var age = prompt("Please enter your date of birth:", "yyyy/mm/dd");
  let realDate = new Date(age) ;
  let today = new Date() ;
  let realAge =  Math.floor((today - realDate) / (1000*60*60*24*365))
  document.getElementById("precis").innerHTML=
     "you are " + realAge + " years old!"
  }
  getAge()