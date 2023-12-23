import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderListItem from "../../components/molecules/OrderListItem";
import { RootState } from "../../redux/rootReducer";
import { updateOrderStatus } from "../../redux/orderSlice";
import StatusUpdateForm from "../../components/molecules/StatusUpdateForm";
import { OrderType } from "../../types/orderTypes";
import { fetchOrders } from "../../redux/actions/ordersActions";

export default function OrderListPage() {
  const dispatch = useDispatch();
  const orders: OrderType[] = useSelector((state: RootState) => state.orders.orders);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleUpdateStatus = (orderId: number, newStatus: string) => {
    // @ts-ignore
    dispatch(updateOrderStatus({ orderId, newStatus }));
  };

  return (
    <div>
      {Array.isArray(orders) && orders.length > 0 ? (
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
