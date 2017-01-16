export function concat(arrays) {
    return [].concat.apply([], arrays);
}

export function min(array) {
    return Math.min.apply(null, array);
}

export function removeDuplicates(array) {
    return Array.from(new Set(array));
}