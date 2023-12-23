import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingMessage = styled.p`
  color: #666;
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
`;

export const OrderItem = styled.li`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const CustomerName = styled.p`
  font-weight: bold;
`;

export const DeliveryAddress = styled.p`
  color: #555;
`;

export const Status = styled.p<{ status: string }>`
  font-style: italic;
  color: ${(props) => (props.status === 'Delivered' ? '#008000' : '#ff0000')};
`;
