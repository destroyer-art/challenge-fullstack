import React, { useState } from 'react';
import { Order } from '../../../types/orderTypes';
import Label from '../../atoms/Label';
import SelectStatus from '../../atoms/SelectStatus';

interface OrderStatusUpdaterProps {
  order: Order;
}

export default function OrderStatusUpdater({ order }: OrderStatusUpdaterProps) {
  const [newStatus, setNewStatus] = useState<string>(order.status);
  const [loading, setLoading] = useState<boolean>(false);

  const handleStatusChange = async (selectedStatus: string) => {
    try {
      setLoading(true);
      await updateOrderStatus(String(order.id), selectedStatus);
      setNewStatus(selectedStatus);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, status: string) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(`Status atualizado para ${status} para o pedido ${orderId}`);
        resolve();
      }, 1000);
    });
  };

  return (
    <div>
      <Label htmlFor={`status-select-${order.id}`} style={{ color: getStatusColor(newStatus) }}>Status: {` ${newStatus}`}</Label>
      <SelectStatus
        orderId={order.id}
        currentStatus={newStatus}
        onChange={handleStatusChange}
      />
      {loading && <p>Atualizando status...</p>}
    </div>
  );
}

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Concluído':
      return '#096D25';
    case 'Pendente':
      return '#FF3933';
    case 'Em andamento':
      return '#FF8333';
    default:
      return 'black';
  }
};
