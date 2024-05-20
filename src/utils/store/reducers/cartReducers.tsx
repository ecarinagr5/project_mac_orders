// reducers/cartReducer.ts
"use client";

import { Product, CartState } from "../../interfaces";

export type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "INCREASE_QUANTITY"; payload: { id: string } }
  | { type: "DECREASE_QUANTITY"; payload: { id: string } }
  | { type: "TOTAL_AMOUNT"; payload: { amount: number } }
  | { type: "CLEAN_PAYMENT"; payload: { data: number } };

export const initialState: CartState = {
  items: [],
  amount: 0,
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, {
          ...action.payload, quantity: 1,
          slug:  action?.payload?.slug,
          image: action?.payload?.image
        }],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    case "TOTAL_AMOUNT":
      return {
        ...state,
        amount: action.payload.amount,
      };
    case "CLEAN_PAYMENT":
      return {
        ...state,
        amount: 0,
        items: [],
      };
    default:
      return state;
  }
}
