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