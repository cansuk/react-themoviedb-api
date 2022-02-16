export const getManagedArr = (arr, id) => {
    if (!arr) return -1;
    const predicate = (el) => el === id;
    let index = arr.findIndex(predicate);
    if (index === -1) {
        arr.push(id);
    } else {
        arr.splice(index, 1)
    }
    return arr;
}

export const updateLocalStorage = (arr, type) => {

    const moviesStorage = JSON.parse(window.localStorage.getItem('movies-api')) || {};

    moviesStorage[type] = arr;

    window.localStorage.setItem('movies-api', JSON.stringify(moviesStorage));

}

export const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const getRandomPrimaryColor = () => {
    const colors = ['red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown',
        'grey',
        'black']
    return colors[Math.floor(Math.random() * colors.length)];
}