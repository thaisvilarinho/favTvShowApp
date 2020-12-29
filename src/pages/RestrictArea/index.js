import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Home, Favorite, Profile, ShowInfo} from '../../pages';
import colors from '../../styles/colors';
import {IconContent} from './styles';


const RestrictArea = () => {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName='Home'
      shifting={true}
      barStyle={{
        backgroundColor: `${colors.button}`,
        padding: 8,
      }}
    >
      <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon:({focused})=>(
              <IconContent>
                <Icon name={'home-outline'} size={26} color={focused ? `${colors.white}` : `${colors.unfocused}`} />
              </IconContent>
          )
        }}
      />
      <Tab.Screen 
        name='Favorite'
        component={Favorite} 
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon:({focused})=>(
              <Icon name={'heart-outline'} size={26} color={focused ? `${colors.white}` : `${colors.unfocused}`} />
          )
        }}
      />
      <Tab.Screen 
        name='Profile'
        component={Profile} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon:({focused})=>(
            <Icon name={'person-outline'} size={26} color={focused ? `${colors.white}` : `${colors.unfocused}`} />
          ) 
        }}
      />
      <Tab.Screen 
        name='ShowInfo'
        component={ShowInfo}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon:({focused})=>(
            <Icon name={'tv'} size={26} color={focused ? `${colors.white}` : `${colors.unfocused}`} />
          ) 
        }}
      />

    </Tab.Navigator>
  );
};

export default RestrictArea;
