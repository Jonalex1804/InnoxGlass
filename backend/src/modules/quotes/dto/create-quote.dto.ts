import { IsString, IsEmail, IsNotEmpty, IsOptional } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateQuoteDto {
  @ApiProperty({ description: "Nombre del cliente" })
  @IsString()
  @IsNotEmpty()
  nombre: string

  @ApiProperty({ description: "Apellido del cliente" })
  @IsString()
  @IsNotEmpty()
  apellido: string

  @ApiProperty({ description: "Email del cliente" })
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiProperty({ description: "Teléfono del cliente" })
  @IsString()
  @IsNotEmpty()
  telefono: string

  @ApiProperty({ description: "Servicio de interés" })
  @IsString()
  @IsNotEmpty()
  servicio: string

  @ApiProperty({ description: "Descripción del proyecto", required: false })
  @IsString()
  @IsOptional()
  mensaje?: string
}
