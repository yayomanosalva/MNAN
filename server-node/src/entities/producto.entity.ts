import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  producto: string;

  @Column()
  valor: number;
}
