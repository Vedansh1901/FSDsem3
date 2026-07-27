const form = document.getElementById("detailsForm");
if(form){
form.addEventListener("submit",function(e){
e.preventDefault();
let name=document.getElementById("name").value;
let roll=document.getElementById("roll").value;
let email=document.getElementById("email").value;
localStorage.setItem("name",name);
localStorage.setItem("roll",roll);
localStorage.setItem("email",email);
window.location.href="Quiz.html";
});
}
if(document.getElementById("studentName")){
document.getElementById("studentName").innerHTML=
localStorage.getItem("name");
}
function submitQuiz(){
let answer1=document.querySelector('input[name="q1"]:checked');
let answer2=document.querySelector('input[name="q2"]:checked');
if(answer1==null||answer2==null){
alert("Please select an answer");
return;
}
let score=0;
if(answer1.value=="0"&&answer2.value=="0"){
score=score+2;
}
else if(answer1.value=="0" && answer2.value=="1")
{
    score++;
}
else if(answer2.value=="0" && answer1.value=="1")
{
    score++;
}
document.getElementById("result").innerHTML=
"Your Score : "+score+"/2";
}