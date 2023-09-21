import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BerandaScreen from '../screens/BerandaScreen';
import PayScreen from '../screens/PayScreen';
import LiveScreen from '../screens/LiveScreen';
import VideoScreen from '../screens/VideoScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native'; // Add this import

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          const routeIcon: any = {
            Beranda: 'home',
            Pay: 'wallet',
            Live: 'videocam',
            Video: 'play',
            Notifikasi: 'notifications',
            Profile: 'people',
          };
          return (
            <Icon
              name={`${routeIcon[route.name]}${focused ? '' : '-outline'}`}
              size={28}
              color={focused ? '#ED4D2D' : '#686868'}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          const routeName: any = {
            Beranda: 'Beranda',
            Pay: 'Pay',
            Live: 'Live',
            Video: 'Video',
            Notifikasi: 'Notifikasi',
            Profile: 'Saya',
          };
          return (
            <Text style={{color: `${focused ? '#ED4D2D' : '#686868'}`}}>
              {routeName[route.name]}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="Beranda" component={BerandaScreen} />
      <Tab.Screen name="Pay" component={PayScreen} />
      <Tab.Screen name="Live" component={LiveScreen} />
      <Tab.Screen name="Video" component={VideoScreen} />
      <Tab.Screen name="Notifikasi" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
