const button = document.getElementById("task_button");
const inner = document.getElementById("inner");
const input = document.getElementById("task");
console.log("h");
let x = 0;
button.addEventListener("click" , () =>{
    create_task();
})
function create_task(){
    let text = input.value;
    if (text != ""){
    let divi = document.createElement("div");
    inner.appendChild(divi);
    divi.innerHTML = `<div>
        <div style="display:  flex; align-items: center;" >
        <input id ="input${x}" class = "inputc" type="checkbox">
        <h1 id="text${x}" class ="text">${text}</h1>
        <h1 id = "x${x}" class="cross" style="color: red;">X</h1>
        </div>`;
        let checkbox = document.getElementById(`input${x}`);
        let styl = document.getElementById(`text${x}`);
        let cross = document.getElementById(`x${x}`);
        checkbox.addEventListener("change", ()=>{
            styl.style.textDecoration = checkbox.checked ? "line-through" : "none";
        })
        cross.addEventListener("click",()=>{
            inner.removeChild(divi);
        })
    input.value = '';
        x++;}

}