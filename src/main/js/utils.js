import moment from 'moment';

export function concat(arrays) {
    return [].concat.apply([], arrays);
}

export function min(array) {
    return Math.min.apply(null, array);
}

export function max(array) {
    return Math.max.apply(null, array);
}

export function removeDuplicates(array) {
    return Array.from(new Set(array));
}

export function fullNameToShortString(firstName, lastName, patronymic) {
    return lastName + (firstName ? (" " + firstName[0].toUpperCase() + ".") : "") + (patronymic ? ("\u00a0" + patronymic[0].toUpperCase() + ".") : "");
}

export function fullNameToString(firstName, lastName, patronymic) {
    return lastName + (firstName ? (" " + firstName) : "") + (patronymic ? (" " + patronymic) : "");
}

export function triggerClickEvent(el) {
    if (document.createEvent) {
        var event = document.createEvent("MouseEvents");
        event.initEvent("click", true, true);
        el.dispatchEvent(event);
    }
    else if (el.click) {
        el.click();
    }
}

export function addBreakLines(text, number) {
    if (!text)
        return "";
    var React = require('react');
    if (number === undefined)
        number = 1;
    
    function addParagraph(newArray, currentValue, index, array) {
        newArray.push(currentValue);
        if (index !== array.length - 1) {
            var newList = [];
            for (var i = 0; i < number; i++)
                newList.push(<br key={`${index}-${i}`}/>);
            newArray = newArray.concat(newList);
        }
        return newArray;
    }
    return text.split(/\n/).reduce(addParagraph, []);
}

export function replaceNbsp(str) {
    return str ? str.replace(/ /g, "\u00a0") : "";
}

export function parseDate(date) {
    return new moment(date, "DD.MM.YYYY");
}

// export function parseDateIso(date) {
//     return new moment(date, "YYYY-MM-DD");
// }