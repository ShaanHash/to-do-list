import {createCard, expand, close } from "./card";


let addButton = document.querySelector(".add");
let storage = window.localStorage;

addButton.addEventListener('click', ()=> {

    let menu = document.createElement("div");
    menu.classList.add("adder");

    let header = document.createElement("div");
    header.innerText = "Create New Task";

    let title = document.createElement("textarea");
    title.placeholder = "Task Name";
    title.style.width = "18vw"
    title.style.height = "15px";

    let description = document.createElement("textarea");
    description.placeholder = "Enter a Description";
    description.style.height = "75px";
    description.style.width = "18vw"

    let dueDate = document.createElement("INPUT");
    dueDate.setAttribute("type",'date');
    dueDate.placeholder = (new Date('Jan 1, 2021'));

    let footer = document.createElement("div");
    let close = document.createElement("div");
    close.innerText = "Cancel";
    close.style.border = "1px solid black";
    close.style.borderRadius = "4px";
    close.style.backgroundColor = "rgb(250, 87, 1)"
    close.style.padding = "5px";


    let submit = document.createElement("div");
    submit.innerText = "Submit";
    submit.style.border = "1px solid black";
    submit.style.borderRadius = "4px";
    submit.style.backgroundColor = "rgb(44, 110, 73)"
    submit.style.padding = "5px";

    footer.append(close);
    footer.append(submit);
    footer.classList.add("footer");

    menu.append(header);
    menu.append(title);
    menu.append(description);
    menu.append(dueDate);
    menu.append(footer);

    close.addEventListener('click', () => {
        document.body.removeChild(menu);
    });

    submit.addEventListener('click', ()=> {

        let card = createCard(title.value, description.value, dueDate.valueAsDate);
       
        document.body.removeChild(menu);
        let storageKey = storage.length + 1;

        storage.setItem(storageKey, JSON.stringify(card));
        console.log(storage);

    });

    document.body.append(menu);

});

const openClose = (div) => {

    div.addEventListener('click', (e)=> {
        console.log(div);
            
        if (div.children.length == 2) {
            expand(div);
        } else {
            close(div);
        }

    });  
};

export {openClose};