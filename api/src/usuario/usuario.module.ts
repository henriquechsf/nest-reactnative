import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { usuarioProviders } from './usuario.providers';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';

@Module({
  imports: [DatabaseModule],
  providers: [UsuarioService, ...usuarioProviders],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
