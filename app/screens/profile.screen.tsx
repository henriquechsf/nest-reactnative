import * as React from 'react';
import {Alert, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logout = navigation => {
  AsyncStorage.removeItem('TOKEN')
    .then(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    })
    .catch(() => {
      Alert.alert('Erro ao sair');
    });
};

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        icon={<Icon name="arrow-right" size={15} color="black" />}
        title=" Sair"
        onPress={() => logout(navigation)}
      />
    </View>
  );
};

export default ProfileScreen;
