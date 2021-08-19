export const getBooks = () => {
    return dispatch => {
        fetch("http://localhost:3000/books")
        .then(resp => resp.json())
        .then(books => dispatch({ type: "GET_BOOKS", books}))
    }
}

export const addBook = (book) => {
    return dispatch => {
        fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ book })
        })
        .then(resp => resp.json())
        .then(book => {
            dispatch({ type: "ADD_BOOK", book })
    })}
}


