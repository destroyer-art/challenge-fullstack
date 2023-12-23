import { FETCH_ORDERS, OrdersActionTypes, OrdersState } from "../../types/orderTypes";

const initialState: OrdersState = {
  data: [],
  status: 'idle',
  error: null,
};

const ordersReducer = (state = initialState, action: OrdersActionTypes): OrdersState => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default ordersReducer;
