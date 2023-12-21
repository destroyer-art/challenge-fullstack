import { Order } from "../../redux/orderSlice";

interface MockOrder extends Order {
  customerName: string;
}

export const generateMockOrders = (numOrders: number): MockOrder[] => {
  const mockOrders: MockOrder[] = [];

  for (let i = 1; i <= numOrders; i++) {
    mockOrders.push({
      id: i,
      customerName: `Customer ${i}`,
      deliveryAddress: `Address ${i}`,
      status: 'Pending',
    });
  }

  return mockOrders;
};

export const generateMockStatus = (): string => {
  const statusOptions = ['Pending', 'In Progress', 'Completed', 'Canceled'];
  const randomIndex = Math.floor(Math.random() * statusOptions.length);
  return statusOptions[randomIndex];
};