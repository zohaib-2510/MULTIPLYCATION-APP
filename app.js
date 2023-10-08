const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const scoreEl = document.getElementById("score")
const ques = document.getElementById("ques")
ques.innerText = `What Is ${num1} Multiply By ${num2} ?`
const correctAns = num1*num2;
const inp = document.getElementById("inp")
const form = document.getElementById("form")
let score = JSON.parse( localStorage.getItem("score :"))
if(!score){
    score=0;
}
form.addEventListener("submit",()=>{
    const userAns = +inp.value;
if(userAns===correctAns){
score++;
updateLocalStorage()
}
else{
    score--;
updateLocalStorage()
 }
})
function updateLocalStorage(){
localStorage.setItem("score",JSON.stringify(score))
}
scoreEl.innerText=`score : ${score}`