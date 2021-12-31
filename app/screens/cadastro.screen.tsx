import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {Text, Button, CheckBox, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomDialog from '../components/CustomDialog';
import usuarioService from '../services/usuario.service';
import styles from '../style/main-style';

const CadastroScreen = ({navigation}) => {
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [senha, setSenha] = useState(null);

  const [isSelected, setSelected] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [errorEmail, setErrorEmail] = useState(null);
  const [errorNome, setErrorNome] = useState(null);
  const [errorCpf, setErrorCpf] = useState(null);
  const [errorTelefone, setErrorTelefone] = useState(null);
  const [errorSenha, setErrorSenha] = useState(null);

  // Dialog Paper
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [titulo, setTitulo] = useState(null);
  const [mensagem, setMensagem] = useState(null);
  const [tipo, setTipo] = useState(null);

  const showDialog = (titulo, mensagem, tipo) => {
    setVisibleDialog(true);
    setTitulo(titulo);
    setMensagem(mensagem);
    setTipo(tipo);
  };

  const hideDialog = status => {
    setVisibleDialog(status);
  };

  const validar = () => {
    let error: boolean = false;

    setErrorEmail(null);
    setErrorCpf(null);

    if (email == null) {
      setErrorEmail('Preencha seu e-mail');
      error = true;
    }
    if (cpf == null) {
      setErrorCpf('Preencha seu CPF');
      error = true;
    }
    if (senha == null) {
      setErrorSenha('Preencha a senha');
      error = true;
    }

    return !error;
  };

  const salvar = () => {
    if (validar()) {
      setLoading(true);

      let data = {
        email: email,
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        senha: senha,
      };

      usuarioService
        .cadastrar(data)
        .then(response => {
          setLoading(false);
          const titulo = response.data.status ? 'Sucesso' : 'Erro';
          showDialog(titulo, response.data.mensagem, 'SUCESSO');

          // Alert.alert(titulo, response.data.mensagem);
          // setTitulo(titulo);
          // setMensagem(response.data.mensagem);
          // showDialog();
        })
        .catch(error => {
          setLoading(false);
          showDialog('Erro', 'Opps, erro inesperado', 'ERRO');
        });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
      style={styles.container}>
      <Text h3>Cadastre-se</Text>
      <Input
        placeholder="E-mail"
        onChangeText={value => {
          setEmail(value);
          setErrorEmail(null);
        }}
        keyboardType="email-address"
        errorMessage={errorEmail}
      />

      <Input
        placeholder="Nome"
        onChangeText={value => setNome(value)}
        errorMessage={errorNome}
      />

      <Input
        placeholder="CPF"
        onChangeText={value => {
          setCpf(value);
          setErrorCpf(null);
        }}
        keyboardType="number-pad"
        errorMessage={errorCpf}
        // ref={ref => (cpfField = ref)}
      />

      {/* <View style={customStyles.containerMask}>
        <TextInputMask
          type={'cpf'}
          value={cpf}
          onChangeText={text => {
            setCpf(text);
          }}
        />
      </View> */}

      <Input
        placeholder="Telefone"
        onChangeText={value => setTelefone(value)}
        keyboardType="phone-pad"
        returnKeyType="done"
        errorMessage={errorTelefone}
      />

      <Input
        placeholder="Senha"
        onChangeText={value => {
          setSenha(value);
          setErrorSenha(null);
        }}
        errorMessage={errorSenha}
        secureTextEntry={true}
      />

      <CheckBox
        title="Eu aceito os termos de uso e políticas de privacidade"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="red"
        onPress={() => setSelected(!isSelected)}
      />

      <Button
        icon={<Icon name="arrow-right" size={15} color="black" />}
        title=" Salvar"
        buttonStyle={customStyles.button}
        onPress={() => salvar()}
      />

      {visibleDialog && (
        <CustomDialog
          titulo={titulo}
          mensagem={mensagem}
          tipo={tipo}
          visible={visibleDialog}
          onClose={hideDialog}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default CadastroScreen;

const customStyles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  maskedInput: {
    flexGrow: 1,
    height: 40,
    fontSize: 18,
    borderColor: '#999',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignSelf: 'flex-start',
  },
  containerMask: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});
