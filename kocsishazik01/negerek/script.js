function findH(){
  var A = document.getElementById("a").value;
  var B = document.getElementById("b").value;
 

  if(A<1 || B<1){
     alert("cigane irjal be egy rendes szamot!");
     }else{
  //a negyzeten es b negyzeten
  document.getElementById("aSqu").innerHTML = A * A;
  document.getElementById("bSqu").innerHTML = B * B;
  
  //a es b 
  document.getElementById("aAndB").innerHTML = (A * A) + (B * B);
  
  //átfogó
   document.getElementById("sqrtC").innerHTML = Math.round((Math.sqrt((A * A) + (B * B)) * 100)) / 100;
  
 }
}