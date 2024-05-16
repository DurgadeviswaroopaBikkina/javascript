document.addEventListener("DOMContentLoaded",()=>{
    const storedToDo =JSON.parse(localStorage.getItem("todoslist"));
    if(storedToDo){
        storedToDo.forEach((todo)=>{
            addToDoList(todo);
        });
    };
});
 const text = document.querySelector(".text");
const button = document.querySelector(".button");
const list = document.querySelector(".list");
function addToDoList(todo){
    const div = document.createElement("div");
    const li = document.createElement("li");
    
    div.classList.add("todo-div");
    li.classList.add("todo-li");
    li.innerText = todo.text
    div.appendChild(li);
    list.appendChild(div);
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
        const editInput = document.createElement("Input");
        editInput.type = "text";
        editInput.value = li.innerText.trim();
        li.innerHTML = ""; //clear the list item
        li.appendChild(editInput);
        editInput.addEventListener("keypress",(e)=>{
            if(e.key=== "Enter"){
                li.innerText = editInput.value;
                updateToDoList();
            }
        });
    });
};
function updateToDoList(){
    const todos = Array.from(list.querySelectorAll(".todo-li")).map((item)=>{
        return{text:item.innerText.trim()};
    });
    localStorage.setItem("todoslist",JSON.stringify(todos));
};
 button.addEventListener("click", (e) => {
     e.preventDefault();
     if(text.value.trim()!==""){
        const todo = {text: text.value.trim()};
        addToDoList(todo);
        updateToDoList();
        text.value = "";
    };
});