// reducers/cartReducer.ts
interface Product {
    id: string;
    name: string;
    price: number;
  }
  
  interface CartItem extends Product {
    quantity: number;
  }
  
  interface CartState {
    items: CartItem[];
  }
  
  type CartAction =
    | { type: 'ADD_ITEM'; payload: Product }
    | { type: 'REMOVE_ITEM'; payload: { id: string } }
    | { type: 'INCREASE_QUANTITY'; payload: { id: string } }
    | { type: 'DECREASE_QUANTITY'; payload: { id: string } };
  
  export const initialState: CartState = {
    items: [],
  };
  
  export function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
      case 'ADD_ITEM':
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      case 'REMOVE_ITEM':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          items: state.items
            .map(item =>
              item.id === action.payload.id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter(item => item.quantity > 0),
        };
      default:
        return state;
    }
  }
  