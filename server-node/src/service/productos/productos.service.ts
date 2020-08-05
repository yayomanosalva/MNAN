import { Injectable } from '@nestjs/common';
import { ProductoEntity } from '../../entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductosDto } from '../../dto/create-productos-dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(ProductoEntity)
    private readonly productoRepository: Repository<ProductoEntity>,
  ) {}

  async getAll(): Promise<ProductoEntity[]> {
    return await this.productoRepository.find();
  }

  async createProducto(
    productoNuevo: CreateProductosDto,
  ): Promise<ProductoEntity> {
    const nuevo = new ProductoEntity();
    nuevo.producto = productoNuevo.Producto;
    nuevo.valor = productoNuevo.Valor;
    return await this.productoRepository.save(nuevo);
  }

  async updateProducto(
    idProducto: number,
    productoActualizar: CreateProductosDto,
  ): Promise<ProductoEntity> {
    const productoUpdate = await this.productoRepository.findOne(idProducto);
    productoUpdate.producto = productoActualizar.Producto;
    productoUpdate.valor = productoActualizar.Valor;
    return await this.productoRepository.save(productoUpdate);
  }

  async delectProducto(idProducto: number): Promise<any> {
    return await this.productoRepository.delete(idProducto);
  }
}
