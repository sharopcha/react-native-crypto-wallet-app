import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import { IconTextButton } from '../components';

import { COLORS, SIZES, icons } from '../constants';

const MainLayout = ({ children, isTradeModalVisible }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isTradeModalVisible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isTradeModalVisible]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 250],
  });

  return (
    <View style={{ flex: 1 }}>
      {children}

      {/* Dim background */}
      {isTradeModalVisible && (
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: COLORS.transparentBlack,
          }}
          opacity={modalAnimatedValue}
        />
      )}

      {/* Modal */}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          top: modalY,
          width: '100%',
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
        }}
      >
        <IconTextButton
          label='Transfer'
          icon={icons.send}
          onPres={() => {
            console.log('transfer');
          }}
        />
        <IconTextButton
          label='Widthraw'
          icon={icons.withdraw}
          containerStyle={{
            marginTop: SIZES.base,
          }}
          onPres={() => {
            console.log('Widthraw');
          }}
        />
      </Animated.View>
    </View>
  );
};

const mapStetToProps = (state) => {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStetToProps, mapDispatchToProps)(MainLayout);
