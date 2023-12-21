// redux/orderSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Order {
  id: number;
  customerName: string;
  deliveryAddress: string;
  status: string;
}

interface OrderState {
  orders: Order[];
}

interface UpdateOrderStatusPayload {
  orderId: number;
  newStatus: string;
}

export const updateOrderStatus = createAsyncThunk(
  'orders/updateOrderStatus',
  async (payload: UpdateOrderStatusPayload) => {
    // Lógica para atualizar o status do pedido na API
    // Substitua esta parte pela chamada real à API
    // Retorne os dados atualizados do pedido
    return { orderId: payload.orderId, status: payload.newStatus };
  }
);

const orderSlice = createSlice({
  name: 'orders',
  initialState: { orders: [] } as OrderState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Reducer assíncrono para updateOrderStatus
    builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
      // Atualiza o status do pedido no estado local
      const { orderId, status } = action.payload;
      const orderToUpdate = state.orders.find((order) => order.id === orderId);

      if (orderToUpdate) {
        orderToUpdate.status = status;
      }
    });
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;
