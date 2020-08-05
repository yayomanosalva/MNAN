import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CreateProductosDto } from '../../dto/create-productos-dto';
import { ProductosService } from '../../service/productos/productos.service';

@Controller('api/productos')
export class ProductosController {
  constructor(private _productosService: ProductosService) {}

  @Post()
  create(
    @Body() _createProductosDto: CreateProductosDto,
    @Res() response: any,
  ) {
    this._productosService
      .createProducto(_createProductosDto)
      .then(producto => {
        response.status(HttpStatus.CREATED).json(producto);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ producto: 'error en la creación del producto' });
      });
  }

  @Get()
  getAll(@Res() response) {
    this._productosService
      .getAll()
      .then(productoList => {
        response.status(HttpStatus.OK).json(productoList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ producto: 'error al obtener los productos' });
      });
  }

  @Put(':id')
  update(
    @Body() updateProductoDto: CreateProductosDto,
    @Res() response,
    @Param('id') idProducto,
  ) {
    this._productosService
      .updateProducto(idProducto, updateProductoDto)
      .then(producto => {
        response.status(HttpStatus.OK).json(producto);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ producto: 'error al actualizar el producto' });
      });
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') idProducto) {
    this._productosService
      .delectProducto(idProducto)
      .then(res => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ producto: 'error al eliminar el producto' });
      });
  }
}
