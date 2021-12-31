import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResultadoDTO } from 'src/dto/resultado.dto';
import { UsuarioCadastrarDTO } from './dto/usuario-cadastrar.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async listar(): Promise<Usuario[]> {
    return await this.usuarioService.listar();
  }

  @Post()
  async cadastrar(@Body() data: UsuarioCadastrarDTO): Promise<ResultadoDTO> {
    return await this.usuarioService.cadastrar(data);
  }
}
