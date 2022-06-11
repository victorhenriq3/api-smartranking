import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {
  @Post()
  async criarAtulizarJogador(@Body() criarJogadorDto: CriarJogadorDto) {
    const { nome } = criarJogadorDto;
    return JSON.stringify({
      nome: nome,
    });
  }
}
