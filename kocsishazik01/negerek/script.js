function findH(){
  var sideA = document.getElementById("a").value;
  var sideB = document.getElementById("b").value;
 

  if(sideA<1 || sideB<1){
     alert("cigane irjal be egy rendes szamot!");
     }else{
  //a negyzeten es b negyzeten
  document.getElementById("aSqu").innerHTML = sideA * sideA;
  document.getElementById("bSqu").innerHTML = sideB * sideB;
  
  //a es b 
  document.getElementById("aAndB").innerHTML = (sideA * sideA) + (sideB * sideB);
  
  //átfogó
   document.getElementById("sqrtC").innerHTML = Math.round((Math.sqrt((sideA * sideA) + (sideB * sideB)) * 100)) / 100;
  
 }
}