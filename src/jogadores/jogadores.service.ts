import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';

@Injectable()
export class JogadoresService {
  private readonly logger = new Logger(JogadoresService.name);

  private jogadores: Jogador[] = [];

  async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
    this.logger.log(`criaJogadorDTO: ${criaJogadorDto}`);
  }

  private criar(criaJogadorDto: CriarJogadorDto): void {
    const { nome, telefoneCelular, email } = criaJogadorDto;

    const jogador: Jogador = {
      _id: '',
      nome: '',
      telefoneCelular: '',
      email: '',
    };
  }
}
