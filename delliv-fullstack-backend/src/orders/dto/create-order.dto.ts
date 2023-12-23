import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'O nome do cliente não pode estar vazio' })
  @IsString({ message: 'O nome do cliente deve ser uma string' })
  customerName: string;

  @IsNotEmpty({ message: 'O endereço de entrega não pode estar vazio' })
  @IsString({ message: 'O endereço de entrega deve ser uma string' })
  deliveryAddress: string;

  @IsNotEmpty({ message: 'O status não pode estar vazio' })
  @IsString({ message: 'O status deve ser uma string' })
  status: string;
}
