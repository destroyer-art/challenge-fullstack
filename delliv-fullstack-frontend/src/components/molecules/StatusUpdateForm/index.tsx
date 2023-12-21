import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../../../redux/orderSlice";
import Button from "../../atoms/Button";
import SelectStatus from "../../atoms/SelectStatus";

interface StatusUpdateFormProps {
  orderId: number;
  currentStatus: string;
  onUpdateStatus: (orderId: number, newStatus: string) => void;
}

export default function StatusUpdateForm({ orderId, currentStatus, onUpdateStatus }: StatusUpdateFormProps) {
  const dispatch = useDispatch();
  const [newStatus, setNewStatus] = useState(currentStatus);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewStatus(e.target.value);
  };

  const handleUpdateStatus = () => {
    // Simula uma chamada à API para atualizar o status
    // @ts-ignore
    dispatch(updateOrderStatus({ orderId: order.id, newStatus }));
  };

  return (
    <div>
      <SelectStatus value={newStatus} onChange={setNewStatus} />

      <Button onClick={handleUpdateStatus}>Update Status</Button>
    </div>
  );
}
