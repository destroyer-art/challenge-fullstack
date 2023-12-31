import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'O nome do cliente não pode estar vazio' })
  @IsString({ message: 'O nome do cliente deve ser uma string' })
  customerName: string;

  @IsNotEmpty({ message: 'O endereço de entrega não pode estar vazio' })
  @IsString({ message: 'O endereço de entrega deve ser uma string' })
  deliveryAddress: string;

  @IsNotEmpty({ message: 'O cep não pode estar vazio' })
  @IsInt({ message: 'O cep deve ser um número inteiro' })
  cep: number;

  @IsNotEmpty({ message: 'A cidade não pode estar vazia' })
  @IsString({ message: 'A cidade deve ser uma string' })
  city: string;

  @IsNotEmpty({ message: 'O bairro não pode estar vazio' })
  @IsString({ message: 'O bairro deve ser uma string' })
  neighborhood: string;

  @IsNotEmpty({ message: 'O status não pode estar vazio' })
  @IsString({ message: 'O status deve ser uma string' })
  status: string;
}
