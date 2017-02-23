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

export function fullNameToShortString(lastName, firstName, patronymic) {
    return lastName + (firstName ? (" " + firstName[0].toUpperCase() + ".") : "") + (patronymic ? ("\u00a0" + patronymic[0].toUpperCase() + ".") : "");
}

export function fullNameToString(lastName, firstName, patronymic) {
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

// parse date from format dd.MM.yyyy
export function parseDate(date) {
    var dateBits = date.split('.').map(bit => parseInt(bit, 10));
    return new Date(dateBits[2], dateBits[1] - 1, dateBits[0]);
}

export function parseDateIso(date) {
    var dateBits = date.split('-').map(bit => parseInt(bit, 10));
    return new Date(dateBits[0], dateBits[1] - 1, dateBits[2]);
}