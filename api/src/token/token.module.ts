import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { tokenProviders } from './token.providers';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), UsuarioModule],
  providers: [TokenService, ...tokenProviders],
  controllers: [TokenController],
  exports: [TokenService],
})
export class TokenModule {}
