import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Order } from '../../../types/orderTypes';
import { fetchOrders } from '../../../redux/actions/ordersActions';
import { RootState } from '../../../redux/rootReducer';
import OrderStatusUpdater from '../OrderStatusUpdater';

export default function OrdersList() {
  const dispatch = useDispatch();
  const { data: orders = [], status, error } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div>
      <h1>Lista de Pedidos</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <ul>
        {orders.map((order: Order) => (
          <li key={order.id}>
            <p>Nome do Cliente: {order.customerName}</p>
            <p>Endereço de Entrega: {order.deliveryAddress}</p>
            <p>Status do Pedido: {order.status}</p>

            <OrderStatusUpdater order={order} />
          </li>
        ))}
      </ul>
    </div>
  );
}
