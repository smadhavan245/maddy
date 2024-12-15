const inputBox = document.getElementById("input-box");
const listbox1 = document.getElementById("list-box1");
function add(){
    if(inputBox.value === ''){
        alert("ADD YOUR TASKS...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listbox1.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    // saveData();

listbox1.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }

},false);

// function saveData(){
//     localStorage.setItem("data",listbox1.innerHTML);
// }

}
// function showTask(){
//     listbox1.innerHTML = localStorage.getItem("data");
// }
// showTask()

