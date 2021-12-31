import { Controller, Get } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async listar(): Promise<Usuario[]> {
    return await this.usuarioService.listar();
  }
}
