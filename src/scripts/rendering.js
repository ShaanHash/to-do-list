import { createDivClosed, content, expand, close } from "./card.js";
import { openClose} from "./eventListeners.js"

const renderAll = () => {
    for (let i = 1; i <= window.localStorage.length; i++) {
        
        //render all divs
        let x = createDivClosed(JSON.parse(window.localStorage.getItem(i)),i);
        content.append(x);

        //add event listner to each
        openClose(x.children[0]);
    };
};

export {renderAll};