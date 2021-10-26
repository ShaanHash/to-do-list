import { createDivClosed, content} from "./card.js";
import { openClose} from "./eventListeners.js"
import { isThisMonth, isThisWeek, isThisYear, parseISO } from "date-fns";

//Clears all child Divs
const clearContent = (div) => {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
};

const renderAll = () => {

    clearContent(content);

    //Loop over every record in storage
    for (let i = 1; i <= window.localStorage.length; i++) {
        
        //Creates a div with just Title and Date - returns the main "card" div - appends to content holder
        try {
            let x = createDivClosed(JSON.parse(window.localStorage.getItem(i)),i);
            content.append(x);
            //Adds the expand/close feature to the "header" part of the card div
            openClose(x.children[0]);
        } catch {
            console.log("error");
        };

        
    };
};

const renderWeek = () => {
    
    clearContent(content);

    //Loop over every record in storage
    for (let i = 1; i <= window.localStorage.length; i++) {
        
        //Creates an object from storage-string
        let x = JSON.parse(window.localStorage.getItem(i));

        //If the div falls in time-period - create a "card" div and append to content - add event listener
        if (isThisWeek(parseISO(x.date))) {
            let maindiv = createDivClosed(x,i);
            content.append(maindiv);
            openClose(maindiv.children[0]);
        };
    };
};

const renderMonth = () => {

    clearContent(content);

    for (let i = 1; i <= window.localStorage.length; i++) {
        
        let x = JSON.parse(window.localStorage.getItem(i));

        if (isThisMonth(parseISO(x.date))) {
            let maindiv = createDivClosed(x,i);
            content.append(maindiv);
            openClose(maindiv.children[0]);
        };
    };
};

const renderYear = () => {

    clearContent(content);

    for (let i = 1; i <= window.localStorage.length; i++) {
        
        let x = JSON.parse(window.localStorage.getItem(i));

        if (isThisYear(parseISO(x.date))) {
            let maindiv = createDivClosed(x,i);
            content.append(maindiv);
            openClose(maindiv.children[0]);
        };
    };
};



export {renderAll, renderWeek, renderMonth, renderYear, clearContent};