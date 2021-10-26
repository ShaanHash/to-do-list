import { format, parseISO, addHours } from 'date-fns';

let content = document.querySelector(".content");


const createCard = (title,description,date) => {

    return {

        title,
        description,
        done: false,
        date

    };

};

const createDivClosed = (card,key) => {

    //Create Main Div
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("card");
    mainDiv.dataset.key = key;

    //Create Header and elements
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("headerDiv");

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("cardTitle");
    titleDiv.innerText = card.title;

    let dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.innerText = "Due: " + format(addHours(parseISO(card.date),5), "MMMM-dd-yyyy");

    //Append Everything and return
    headerDiv.append(titleDiv);
    headerDiv.append(dateDiv);

    mainDiv.append(headerDiv);

    return mainDiv;

};

const expand = (div) => {

    //Find the object with Key
    let key = div.dataset.key
    let ob = JSON.parse(window.localStorage.getItem(div.dataset.key));
   
    //Create Body
    let body = document.createElement("div");
    body.classList.add("body");

    let desc = document.createElement("div");
    desc.classList.add("description");
    desc.innerText = ob.description;

    let footer = document.createElement("div");
    footer.classList.add("footer");

    let deleter = document.createElement("div");
    deleter.classList.add("delete");
    deleter.innerText = "Delete"

    deleter.addEventListener("click", () => {
        window.localStorage.removeItem(key);
        content.removeChild(div);
    });

    let done = document.createElement("div");
    done.classList.add("delete");
    done.innerText = "Done"
    done.style.backgroundColor = "rgb(209, 214, 70)";

    done.addEventListener('click', ()=>{

        if(div.style.backgroundColor == "rgb(209, 214, 70)") {
            div.style.backgroundColor = "rgb(151, 146, 227)" 
        } else {
            div.style.backgroundColor = "rgb(209, 214, 70)"
        };

    });

    body.append(desc);
    footer.append(deleter);
    footer.append(done);

    //Append Everything and return
    div.append(body);
    div.append(footer);

};

const close = (div) => {
    div.removeChild(div.children[2]);
    div.removeChild(div.children[1]);
} 



export {createCard, createDivClosed, expand, close, content};