import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
