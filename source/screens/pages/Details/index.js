import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsItem } from '../../../components/DetailsItem';
import { ScreenContainer } from '../../../components/ScreenContainer';
import { theme } from '../../../constants/theme';
import { getCountryInfo } from '../../../store/countries/actions';
import { useSort } from '../../../utils/useSort';
import { Header } from './components/Header';
import { styles } from './styles';

export const Details = ({ route }) => {
  const dispatch = useDispatch();
  const [orderBy, setOrderBy] = useState('Date');
  const [desc, setDesc] = useState(true);
  const { detailsLoading, details } = useSelector(state => state.countries);
  const parsedDetails = useSort(details, orderBy, desc);
  const { slug } = route?.params;

  useEffect(() => {
    dispatch(getCountryInfo(slug));
  }, [dispatch, slug]);

  const onHandleDesc = () => {
    setDesc(!desc);
  };

  const onHandleOrder = () => {
    const order = orderBy === 'Date' ? 'Cases' : 'Date';
    setOrderBy(order);
  };

  const RederItem = useCallback(({ item }) => {
    return <DetailsItem item={item} />;
  }, []);

  if (detailsLoading) {
    return (
      <ScreenContainer style={styles.container}>
        <ActivityIndicator size={'large'} color={theme.colors.lightText} />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Header
        order={orderBy}
        desc={desc}
        onPressDesc={onHandleDesc}
        onPressOrder={onHandleOrder}
      />
      <FlatList data={parsedDetails} renderItem={RederItem} />
    </ScreenContainer>
  );
};
