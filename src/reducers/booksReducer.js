export default function booksReducer(state = { books: [] }, action) {
    switch (action.type) {
      case 'GET_BOOKS':
        return {
          ...state,
          books: action.books
        }

        case "ADD_BOOK":
            return {
                ...state,
                books: [...state.books, action.book]
            }
      default:
        return state;
    }
} 