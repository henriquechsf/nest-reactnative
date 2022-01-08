import * as React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const logout = navigation => {
  navigation.reset({
    index: 0,
    routes: [{name: 'Login'}],
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
