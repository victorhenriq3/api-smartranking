import { Controller } from '@nestjs/common';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor() {}

  async criarCategoria(
    @Body(criarCategoriaDto: CriarCategoriaDto)
  )
}
