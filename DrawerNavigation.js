import  React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../Screens/HomeScreen"
import About from '../screens/About'

const Drawer = createDrawerNavigator()
const DrawerNavigator=()=>{
  return (
    <Drawer.Navigator>
    
    <Drawer.Screen name = "     Pocket Dictionary" component = {HomeScreen} />
    <Drawer.Screen name = "     About" component = {About} />

    </Drawer.Navigator>
  )
  }
export default DrawerNavigator