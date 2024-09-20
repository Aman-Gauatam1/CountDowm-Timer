const endDate="19 September 2024 10:30 PM"
document.getElementById("endDate").innerText=endDate;
const input=document.querySelectorAll("input")

function clock(){
  const end=new Date(endDate);
  const now=new Date();
  //converting milisecond into second
  const diff=Math.abs((end-now)/1000);
  
  console.log(diff)
  //conert into days
  input[0].value= Math.floor(diff /3600 / 24);
  //conert into hours
  input[1].value=Math.floor(diff/3600)%24;
  //conert into mintues
  input[2].value=Math.floor(diff/60)%60;
  //convert into second
  input[3].value=Math.floor(diff)%60;

  
}
clock();
setInterval(function(){
  clock();
},1000)