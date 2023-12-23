import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateOrderStatus } from '../../../redux/actions/ordersActions';

const SelectContainer = styled.div`
  margin-top: 8px;
`;

const StyledSelect = styled.select`
  padding: 8px;
  font-size: 14px;
`;

interface SelectStatusProps {
  orderId: number;
  currentStatus: string;
  children?: React.ReactNode;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const SelectStatus: React.FC<SelectStatusProps> = ({ orderId, currentStatus, children, onChange }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    onChange(newStatus);
    // @ts-ignore
    dispatch(updateOrderStatus(orderId, newStatus));
  };

  return (
    <SelectContainer>
      <StyledSelect value={currentStatus} onChange={handleStatusChange}>
        <option value="Pendente">Pendente</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Concluído">Concluído</option>
      </StyledSelect>
      {children}
    </SelectContainer>
  );
};

export default SelectStatus;
