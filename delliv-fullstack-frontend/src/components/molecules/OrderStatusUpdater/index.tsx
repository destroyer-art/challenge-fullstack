import React, { useState } from 'react';
import { Order } from '../../../types/orderTypes';
import Label from '../../atoms/Label';
import SelectStatus from '../../atoms/SelectStatus';

interface OrderStatusUpdaterProps {
  order: Order;
}

export default function OrderStatusUpdater({ order }: OrderStatusUpdaterProps) {
  const [newStatus, setNewStatus] = useState<string>(order.status); // Ajuste o tipo de newStatus para string

  return (
    <div>
      <Label htmlFor={`status-select-${order.id}`}>Atualizar Status:</Label>
      <SelectStatus orderId={order.id} currentStatus={newStatus} onChange={setNewStatus} />
    </div>
  );
}
