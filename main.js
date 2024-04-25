const text = document.querySelector(".text");
const button = document.querySelector(".button");
const list = document.querySelector(".list");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    const div = document.createElement("div");
    div.classList.add("todo-div");

    const items = document.createElement("li");
    items.classList.add("child");
    items.innerText = text.value 

    div.appendChild(items);
    list.appendChild(div);

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerText = 'edit';
    div.appendChild("editButton");

    editButton.addEventListener("click",()=>{
        const editInput = document.createElement("input");
        editInput.type = "text";

        editInput.value = items.innerText;
         items.innerHTML= " ";
         items.appendChild(editInput);

         editInput.addEventListener("keypress",(e))
    })
})