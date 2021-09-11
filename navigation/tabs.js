import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { connect } from 'react-redux';
import { setTradeModalVisibility } from '../stores/tab/tabActions';

import { Home, Portfolio, Market, Profile } from '../screens';
import { TabIcon } from '../components';
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const Tabs = ({ setTradeModalVisibility, isTradeModalVisible }) => {
  const tradeTabBtnOnClick = () => {
    setTradeModalVisibility(!isTradeModalVisible);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 140,
          backgroundColor: COLORS.primary,
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon focused={focused} icon={icons.home} label='Home' />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
        name='Home'
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.briefcase}
                  label='Portfolio'
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
        name='Portfolio'
        component={Portfolio}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={isTradeModalVisible ? icons.close : icons.trade}
                isTrade
                label='Trade'
                iconStyle={
                  isTradeModalVisible
                    ? {
                        width: 15,
                        height: 15,
                      }
                    : null
                }
              />
            );
          },
          tabBarButton: (props) => {
            return (
              <CustomTabBarButton
                {...props}
                onPress={() => tradeTabBtnOnClick()}
              />
            );
          },
        }}
        name='Trade'
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon focused={focused} icon={icons.market} label='Market' />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
        name='Market'
        component={Market}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.profile}
                  label='Profile'
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
        name='Profile'
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const mapStetToProps = (state) => {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTradeModalVisibility: (isVisible) => {
      return dispatch(setTradeModalVisibility(isVisible));
    },
  };
};

export default connect(mapStetToProps, mapDispatchToProps)(Tabs);
