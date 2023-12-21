import React from 'react';
import { SelectContainer, StyledSelect } from './styles';

interface StatusSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SelectStatus({ value, onChange }: StatusSelectProps) {
  const statusOptions = ['Pending', 'In Progress', 'Delivered'];

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <SelectContainer>
      <StyledSelect value={value} onChange={handleStatusChange}>
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};
