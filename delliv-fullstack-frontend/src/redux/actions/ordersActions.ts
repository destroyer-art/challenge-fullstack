import { Dispatch } from 'redux';
import { GET, PUT } from '../../api/api';
import { FETCH_ORDERS, UPDATE_ORDER_STATUS, OrdersActionTypes } from '../../types/orderTypes';

export const fetchOrders = () => async (dispatch: Dispatch<OrdersActionTypes>) => {
  try {
    const response = await GET('orders');

    dispatch({
      type: FETCH_ORDERS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
};

export const updateOrderStatus = (orderId: number, newStatus: string) => async (
  dispatch: Dispatch<OrdersActionTypes>
) => {
  try {
    await PUT(`orders/${orderId}/update-status`, { newStatus }); 

    dispatch({
      type: UPDATE_ORDER_STATUS,
      payload: {
        orderId,
        newStatus,
      },
    });
  } catch (error) {
    console.error(`Error updating status for order ${orderId}:`, error);

    dispatch({
      type: UPDATE_ORDER_STATUS,
      payload: {
        orderId,
        newStatus: '',
      },
    });
  }
};
