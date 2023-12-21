import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderListItem from "../../components/molecules/OrderListItem";
import { setOrders, updateOrderStatus } from "../../redux/orderSlice";
import { RootState } from "../../redux/rootReducer";
import { generateMockOrders } from "../../utils/mock";
import StatusUpdateForm from "../../components/molecules/StatusUpdateForm";

export default function OrderListPage() {
  const dispatch = useDispatch();
  // Certifique-se de que state.orders é do tipo Order[]
  const orders = useSelector((state: RootState) => state.orders.orders);

  useEffect(() => {
    // Substitua isso pela chamada à sua API real quando possível
    // dispatch(fetchOrders());

    // Use dados mockados enquanto ainda não há uma API real
    const mockOrders = generateMockOrders(5);
    dispatch(setOrders(mockOrders));
  }, [dispatch]);

  const handleUpdateStatus = (orderId: number, newStatus: string) => {
    // @ts-ignore
    dispatch(updateOrderStatus({ orderId, newStatus }));
  };

  return (
    <div>
      {Array.isArray(orders) ? (
        orders.map((order) => (
          <div key={order.id}>
            <OrderListItem order={order} />
            <StatusUpdateForm orderId={order.id} currentStatus={order.status} onUpdateStatus={handleUpdateStatus} />
          </div>
        ))
      ) : (
        <p>No orders available</p>
      )}
    </div>
  );
}
