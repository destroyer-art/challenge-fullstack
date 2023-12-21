import React from "react";
import { ListItemContainer } from "./styles";

interface OrderListItemProps {
  order: {
    id: number;
    customerName: string;
    deliveryAddress: string;
    status: string;
  };
}

export default function OrderListItem({ order }: OrderListItemProps) {
  return (
    <ListItemContainer>
      <p>
        <strong>Name:</strong> {order.customerName}
      </p>
      <p>
        <strong>Delivery Address:</strong> {order.deliveryAddress}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
    </ListItemContainer>
  );
}