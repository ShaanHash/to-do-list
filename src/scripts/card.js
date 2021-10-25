import { format, parseISO } from 'date-fns';

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
    dateDiv.innerText = "Due: " + format(parseISO(card.date), "MMMM-dd-yyyy");

    //Append Everything and return
    headerDiv.append(titleDiv);
    headerDiv.append(dateDiv);

    mainDiv.append(headerDiv);

    return mainDiv;

};

const expand = (div) => {

    let ob = div.dataset.key
    ob = JSON.parse(window.localStorage.getItem(ob));
   
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

    body.append(desc);
    footer.append(deleter);

    //Append Everything and return
    div.append(body);
    div.append(footer);

};

const close = (div) => {
    div.removeChild(div.children[2]);
    div.removeChild(div.children[1]);
} 



export {createCard, createDivClosed, expand, close, content};