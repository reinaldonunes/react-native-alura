import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Services from '../views/Services'
import Cart from '../views/Cart'

import { colors } from '../../styles/globalStyle'

const Tab = createBottomTabNavigator()

const EmptyIcon = () => null;

export default function Routes(){
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.light,
                tabBarInactiveTintColor: colors.purple,
                tabBarActiveBackgroundColor: colors.purple,
                tabBarInactiveBackgroundColor: colors.orange,
                tabBarStyle: { backgroundColor: colors.orange, height: 60},
                tabBarLabelStyle: {
                    width: '100%',
                    flex: 1,
                    fontSize: 16,
                    lineHeight: 22,
                    fontWeight: 'bold',
                    paddingTop: 0,
                    paddingBottom: 22, // Defina o mesmo valor de paddingBottom que a altura da tabBarStyle
                },
                keyboardHidesTabBar: true
            }}
            
        >
            <Tab.Screen
                name="Serviços" 
                component={Services}
                options={{
                    tabBarIcon: () => <EmptyIcon />, // Usa o componente EmptyIcon para desativar o ícone
                }}
            />
            <Tab.Screen
                name="Carrinho"
                component={Cart} 
                options={{
                    tabBarIcon: () => <EmptyIcon />, // Usa o componente EmptyIcon para desativar o ícone
                }}   
            />
        </Tab.Navigator>
    </NavigationContainer>
}