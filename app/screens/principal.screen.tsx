import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './profile.screen';
import FeedScreen from './feed.screen';
import ProdutosScreen from './produtos.screen';
import ServicosScreen from './servicos.screen';
import CadastrarScreen from './cadastrar.screen';

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-search"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={ProdutosScreen}
        options={{
          tabBarLabel: 'Produtos',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Servicos"
        component={ServicosScreen}
        options={{
          tabBarLabel: 'Servicos',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="tools" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={CadastrarScreen}
        options={{
          tabBarLabel: 'Cadastrar',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="human-greeting"
              color={color}
              size={size}
            />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}
