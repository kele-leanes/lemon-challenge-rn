import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../../../components/ListItem';
import { ScreenContainer } from '../../../components/ScreenContainer';
import { theme } from '../../../constants/theme';
import { getCountries } from '../../../store/countries/actions';
import { useSort } from '../../../utils/useSort';

import { styles } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(state => state.countries);
  const parsedData = useSort(data, 'Country', false);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const renderItem = useCallback(({ item }) => {
    return <ListItem item={item} />;
  }, []);

  if (isLoading) {
    return (
      <ScreenContainer style={styles.container}>
        <ActivityIndicator size={'large'} color={theme.colors.lightText} />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <FlatList data={parsedData} renderItem={renderItem} />
    </ScreenContainer>
  );
};

export default Home;
