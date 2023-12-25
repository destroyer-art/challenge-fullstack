import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Order } from '../../../types/orderTypes';
import { fetchOrders } from '../../../redux/actions/ordersActions';
import { RootState } from '../../../redux/rootReducer';
import OrderStatusUpdater from '../OrderStatusUpdater';
import { Container, CustomerName, DeliveryAddress, ErrorMessage, LoadingMessage, OrderItem, Title } from './styles';

export default function OrdersList() {
  const dispatch = useDispatch();
  const { data: orders = [], status, error } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <Container>
      <Title>Lista de Pedidos</Title>
      {status === 'loading' && <LoadingMessage>Loading...</LoadingMessage>}
      {status === 'failed' && <ErrorMessage>Error: {error}</ErrorMessage>}
      
      {orders.length === 0 ? (
        <p>A lista de pedidos está vazia.</p>
      ) : (
        <ul>
          {orders.map((order: Order) => (
            <OrderItem key={order.id}>
              <CustomerName>Nome do Cliente: {order.customerName}</CustomerName>
              <DeliveryAddress>Endereço de Entrega: {order.deliveryAddress}</DeliveryAddress>
              <OrderStatusUpdater order={order} />
            </OrderItem>
          ))}
        </ul>
      )}
    </Container>
  );
}
