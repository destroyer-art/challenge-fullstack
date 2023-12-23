import { Dispatch } from 'redux';
import { RootState } from '../store';
import { OrderType } from '../../types/orderTypes';
import { GET } from '../../api/api';

export enum OrderActionTypes {
  FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS',
  FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE',
}

interface FetchOrdersSuccessAction {
  type: OrderActionTypes.FETCH_ORDERS_SUCCESS;
  payload: OrderType[];
}

interface FetchOrdersFailureAction {
  type: OrderActionTypes.FETCH_ORDERS_FAILURE;
  payload: string;
}

export type OrderAction = FetchOrdersSuccessAction | FetchOrdersFailureAction;

export const fetchOrders = () => async (dispatch: Dispatch<OrderAction>, getState: () => RootState) => {
  try {
    const response = await GET('/orders');
    dispatch({ type: OrderActionTypes.FETCH_ORDERS_SUCCESS, payload: response.data });
  } catch (error: any) {
    dispatch({ type: OrderActionTypes.FETCH_ORDERS_FAILURE, payload: (error as Error).message });
  }
};
