interface Order {
  id: number;
  customerName: string;
  deliveryAddress: string;
  status: string;
}

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

type OrdersAction = { type: 'SET_ORDERS'; payload: Order[] };

const ordersReducer = (state = initialState, action: OrdersAction): OrdersState => {
  switch (action.type) {
    case 'SET_ORDERS':
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};

export default ordersReducer;
