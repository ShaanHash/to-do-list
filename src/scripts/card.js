import { format, compareAsc } from 'date-fns';


const createCard = (title,description,date) => {

    return {

        title,
        description,
        done: false,
        date

    };

};


const createDivClosed = (card) => {


    //Create Main Div
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("card");

    //Create Header and elements
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("headerDiv");

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("cardTitle");
    titleDiv.innerText = card.title;

    let dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.innerText = "Due: " + format(card.date, "MMMM-dd-yyyy");

    //Append Everything and return
    headerDiv.append(titleDiv);
    headerDiv.append(dateDiv);

    mainDiv.append(headerDiv);

    return mainDiv;

};

const createDivOpen = (card) => {


    //Create Main Div
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("card");


    //Create Header and elements
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("headerDiv");

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("cardTitle");
    titleDiv.innerText = card.title;

    let dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.innerText = "Due: " + format(card.date, "MMMM-dd-yyyy");

    headerDiv.append(titleDiv);
    headerDiv.append(dateDiv);

    //Create Body
    let body = document.createElement("div");
    body.classList.add("body");

    let desc = document.createElement("div");
    desc.classList.add("description");
    desc.innerText = card.description;

    let footer = document.createElement("div");
    footer.classList.add("footer");

    let deleter = document.createElement("div");
    deleter.classList.add("delete");
    deleter.innerText = "Delete"

    let editor = document.createElement("div");
    editor.classList.add("edit");
    editor.innerText = "Edit"

    body.append(desc);
    footer.append(editor);
    footer.append(deleter);



    //Append Everything and return
    mainDiv.append(headerDiv);
    mainDiv.append(body);
    mainDiv.append(footer);

    return mainDiv;

};





export {createCard, createDivClosed, createDivOpen};