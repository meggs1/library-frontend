export default function shoppingListItemReducer(
    state = {
      books: []
    },
    action
  ) {
    switch (action.type) {
      case 'GET_BOOKS':
        return {
          ...state,
          books: action.books
        }
  
      default:
        return state;
    }
  } 