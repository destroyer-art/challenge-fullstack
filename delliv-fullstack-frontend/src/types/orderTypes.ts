export interface Order {
  id: number;
  customerName: string;
  cep: number;
  city: string;
  neighborhood: string;
  deliveryAddress: string;
  status: string;
}

export interface OrdersState {
  data: Order[]; 
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; 
  error: string | null;
}

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const UPDATE_ORDER_STATUS = 'UPDATE_ORDER_STATUS';

interface FetchOrdersAction {
  type: typeof FETCH_ORDERS;
  payload: Order[];
}

export interface UpdateOrderStatusAction {
  type: typeof UPDATE_ORDER_STATUS;
  payload: {
    orderId: number;
    newStatus: string;
  };
}

export type OrdersActionTypes = FetchOrdersAction | UpdateOrderStatusAction;
