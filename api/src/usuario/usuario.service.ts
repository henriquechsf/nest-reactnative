import { Inject, Injectable } from '@nestjs/common';
import { ResultadoDTO } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { UsuarioCadastrarDTO } from './dto/usuario-cadastrar.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async cadastrar(data: UsuarioCadastrarDTO): Promise<ResultadoDTO> {
    const usuario = new Usuario();
    usuario.email = data.email;
    usuario.nome = data.nome;
    usuario.password = data.senha;
    usuario.cpf = data.cpf;
    usuario.telefone = data.telefone;

    return this.usuarioRepository
      .save(usuario)
      .then((result) => {
        return <ResultadoDTO>{
          status: true,
          mensagem: 'Usuário cadastrado com sucesso',
        };
      })
      .catch((error) => {
        return <ResultadoDTO>{
          status: false,
          mensagem: 'Ocorreu um erro ao cadastrar o usuário',
        };
      });
  }
}
