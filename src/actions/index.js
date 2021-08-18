export const getBooks = () => {
    return dispatch => {
        fetch("http://localhost:3000/books")
        .then(resp => resp.json())
        .then(books => dispatch({ type: "GET_BOOKS", books}))
    }
}