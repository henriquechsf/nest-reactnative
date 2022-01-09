import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Usuario } from 'src/usuario/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Repository } from 'typeorm';
import { Token } from './token.entity';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private usuarioService: UsuarioService,
    private authService: AuthService,
  ) {}

  async save(hash: string, username: string) {
    const objToken = await this.tokenRepository.findOne({ username: username });

    if (objToken) {
      this.tokenRepository.update(objToken.id, { hash: hash });
    } else {
      this.tokenRepository.insert({
        hash,
        username,
      });
    }
  }

  async refreshToken(oldToken: string) {
    const objToken = await this.tokenRepository.findOne({ hash: oldToken });

    if (objToken) {
      const usuario = await this.usuarioService.findOne(objToken.username);

      return await this.authService.login(usuario);
    } else {
      // é uma requisição inválida
      return new HttpException(
        {
          errorMessage: 'Token inválido',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async getUsuarioByToken(token: string) {
    const objToken: Token = await this.tokenRepository.findOne({ hash: token });

    if (objToken) {
      const usuario = await this.usuarioService.findOne(objToken.username);
      return usuario;
    } else {
      return null;
    }
  }
}
