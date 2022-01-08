import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {Input} from 'react-native-elements/dist/input/Input';
import {ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import usuarioService from '../services/usuario.service';
import styles from '../style/main-style';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const entrar = () => {
    let data = {
      username: email,
      password: password,
    };

    usuarioService
      .login(data)
      .then(response => {
        setLoading(false);

        //   navigation.navigate('Home');
        // desabilita o botão voltar resetando a pilha
        navigation.reset({
          index: 0,
          routes: [{name: 'Principal'}],
        });
      })
      .catch(error => {
        setLoading(false);
        Alert.alert('Erro', 'Usuário ou Senha inválido');
      });
  };

  const cadastrar = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Text h3>Login</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{type: 'font-awesome', name: 'envelope'}}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        leftIcon={{type: 'font-awesome', name: 'lock'}}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />

      {isLoading && <ActivityIndicator />}

      {!isLoading && (
        <Button
          icon={<Icon name="arrow-right" size={15} color="black" />}
          title=" Entrar"
          buttonStyle={buttonStyles.button}
          onPress={() => entrar()}
        />
      )}

      <Button
        icon={<Icon name="user" size={15} color="black" />}
        title=" Cadastrar"
        buttonStyle={buttonStyles.button}
        onPress={() => cadastrar()}
      />
    </View>
  );
};

export default LoginScreen;

const buttonStyles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});
