document.addEventListener("DOMContentLoaded",()=>{
const storedToDo = JSON.parse(localStorage.getItem("todosList"));
if(storedToDo){
    storedToDo.forEach((todo) => {
        addToDoList(todo);
    });
};
});
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const lists = document.querySelector(".lists");

function addToDoList(todo){
    const div = document.createElement("div");
    const li = document.createElement("li");
    div.classList.add("todo-div");
    li.classList.add("todo-li");
    li.innerText = todo.text;
    div.appendChild(li);
    li.appendChild(div);

    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";
    div.appendChild(editButton);
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click",()=>{
        div.parentNode.removeChild(div);
        updateToDoList();
    });

    editButton.addEventListener("click",()=>{
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = li.innerText.trim();
        li.innerHTML = "";
        li.appendChild(editInput);
        editInput.addEventListener("keypress",(e)=>{
            if(e.key === "Enter"){
                li.innerText = editInput.value;
                updateToDoList();
            }
        });
    });
};
 
function updateToDoList(){
    const todos = Array.from(lists.querySelectorAll(".todo-li")).map((item)=>{
        return{text:item.innerText.trim()};
    });
    localStorage.setItem("todosList",JSON.stringify(todos));
}
button.addEventListener("click",(e)=>{
    e.preventDefault();
    if(input.value.trim() !== ""){
        const todo = {text:input.value.trim()};
        addToDoList(todo);
        updateToDoList();
        input.value="";
    };
});

       

   