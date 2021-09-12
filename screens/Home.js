import React, { useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import {
  getHoldings,
  getCoinMarket,
  testAction,
} from '../stores/market/marketActions';

import { MainLayout } from '.';
import { useFocusEffect } from '@react-navigation/native';

import { SIZES, COLORS, FONTS, dummyData, icons } from '../constants';

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins }) => {
  useFocusEffect(
    useCallback(() => {
      getHoldings(dummyData.holdings);
    })
  );

  return (
    <MainLayout>
      <View>
        <Text>Home</Text>
      </View>
    </MainLayout>
  );
};

const mapStetToProps = (state) => {
  return {
    myHoldings: state.marketReducer.myHoldings,
    coins: state.marketReducer.coins,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHoldings: (
      holdings,
      currency,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) =>
      dispatch(
        getHoldings(
          holdings,
          currency,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      ),
    getCoinMarket: (
      currency,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) =>
      dispatch(
        getCoinMarket(
          currency,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      ),
  };
};

export default connect(mapStetToProps, mapDispatchToProps)(Home);
