import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {Input} from 'react-native-elements/dist/input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/main-style';

const CadastroScreen = ({navigation}) => {
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);

  const salvar = () => {
    console.log('salvou');
  };

  return (
    <View style={styles.container}>
      <Text h3>Cadastre-se</Text>
      <Input
        placeholder="E-mail"
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />

      <Input placeholder="Nome" onChangeText={value => setNome(value)} />

      <Input
        placeholder="CPF"
        onChangeText={value => setCpf(value)}
        keyboardType="number-pad"
      />

      <Input
        placeholder="Telefone"
        onChangeText={value => setTelefone(value)}
        keyboardType="phone-pad"
        returnKeyType="done"
      />

      <Button
        icon={<Icon name="arrow-right" size={15} color="black" />}
        title=" Salvar"
        buttonStyle={buttonStyles.button}
        onPress={() => salvar()}
      />
    </View>
  );
};

export default CadastroScreen;

const buttonStyles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});
