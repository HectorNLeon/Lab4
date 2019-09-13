function watchForm(){

    let submit = document.getElementsByClassName("submitButton");
    let mark = document.getElementsByClassName("markAllButton");
    let clear = document.getElementsByClassName("clearButton");
    let del = document.getElementsByClassName("deleteButton");

    submit[0].addEventListener("click", ( event ) =>{
        event.preventDefault();
        let textInput = document.getElementsByTagName("textarea");
        let listOfTodo = document.getElementById("toDoList");
        let checkM = document.createElement("input");
        let labelText= document.createElement("label");
        let section = document.createElement("section");
        checkM.type = "checkbox"
        labelText.appendChild(document.createTextNode(textInput[0].value));
        section.className = "todoElement";
        section.appendChild(checkM);
        section.appendChild(labelText);
        listOfTodo.appendChild(section);
        textInput[0].value = "";
    });

    mark[0].addEventListener("click", ( event ) =>{
        event.preventDefault();
        let elementsTodo = document.getElementsByClassName("todoElement");
        for(let i = 0; i<elementsTodo.length; i++){
            elementsTodo[i].children[0].checked = true;
        }
    });

    clear[0].addEventListener("click", ( event ) =>{
        event.preventDefault();
        let elementsTodo = document.getElementsByClassName("todoElement");
        for(let i = 0; i<elementsTodo.length; i++){
            elementsTodo[i].children[0].checked = false;
        }
    });

    del[0].addEventListener("click", ( event ) =>{
        event.preventDefault();
        let listOfTodo = document.getElementById("toDoList");
        listOfTodo.innerHTML = '';
    });

}

watchForm();