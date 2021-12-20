import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../../../components/ListItem';
import { getCountries } from '../../../store/countries/actions';
import { styles } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(state => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const renderItem = useCallback(({ item }) => {
    return <ListItem item={item} />;
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Home;
