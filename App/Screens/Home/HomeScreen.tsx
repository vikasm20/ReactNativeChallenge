import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Animated,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {icArrow, icFav} from '../../Const/Assets';
import {primaryColor, whiteColor} from '../../Const/Colors';
import Urls from '../../Const/Urls';
import {listError, listLoading, listSuccess} from '../../Redux/Actions';
import {styles} from './HomeScreenStyles';

export const HomeScreen = ({navigation}) => {
  const [searchList, setSearchList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [refershList, setRefreshList] = useState(false);
  const disptach = useDispatch();
  const listData = useSelector(state => state?.list);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const diffClamp = Animated.diffClamp(scrollY, 0, 100);

  const translateY = diffClamp.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -60],
    extrapolate: 'clamp',
  });

  const opacity = diffClamp.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    getList();
    disptach(listLoading());
  }, []);

  const getList = () => {
    axios
      .get(Urls.iTunesAPI)
      .then(response => {
        disptach(listSuccess(response?.data?.feed?.entry));
        setSearchList(response?.data?.feed?.entry);
      })
      .catch(error => {
        disptach(listError(error));
      });
  };

  const onSearch = text => {
    let listDataArray = [...listData?.data];
    if (text.trim() === '') {
      setSearchList(listDataArray);
    } else {
      setSearchList(
        listDataArray?.filter(x =>
          x?.['im:name']?.label?.toLowerCase()?.includes(text.toLowerCase()),
        ),
      );
    }
    setSearchText(text);
    setRefreshList(!refershList);
  };

  const ItemRow = ({item, onItemTap}) => {
    return (
      <TouchableOpacity
        activeOpacity={1.0}
        testID={'itemTap'}
        onPress={() => {
          onItemTap();
        }}
        style={styles.card}>
        <Image
          style={styles.image}
          source={{uri: item?.['im:image'][0]?.label}}
        />
        <View style={{marginHorizontal: '5%'}}>
          <View style={styles.itemRowOne}>
            <Text style={styles.textTitle} numberOfLines={1}>
              {item?.['im:name']?.label}
            </Text>

            <Text style={styles.textAmount}>{item?.['im:price']?.label}</Text>
          </View>

          <View style={styles.itemRowTwo}>
            <Image style={styles.favImage} source={icFav} />
            <Text style={styles.textFavCount}>{'1.5k'}</Text>
          </View>

          <Text numberOfLines={2} style={styles.textDesc}>
            {item?.['im:name']?.label}
          </Text>

          <View style={styles.itemRowTwo}>
            <Text style={styles.textMoreInfo}>{'more info'}</Text>
            <Image style={styles.arrowImage} source={icArrow} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      testID={'listScreen'}
      style={{flex: 1, backgroundColor: primaryColor}}>
      <Animated.View
        style={{
          zIndex: 100,
          transform: [{translateY}],
        }}>
        <LinearGradient colors={[primaryColor, whiteColor]} style={{}}>
          <Text style={styles.headerTitle}>{'MusicoFy'}</Text>
          <Animated.View
            style={[
              styles.mainView,
              {
                opacity,
              },
            ]}>
            <TextInput
              testID={'searchInput'}
              style={styles.textInput}
              placeholder={'Search Songs'}
              value={searchText}
              onChangeText={onSearch}
            />
          </Animated.View>
        </LinearGradient>
        <Animated.FlatList
          style={{backgroundColor: whiteColor, height: '100%'}}
          data={searchList}
          key={(item, index) => index.toString()}
          keyExtractor={(item, index) => index.toString()}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={{textAlign: 'center'}}>Loading...</Text>
          }
          extraData={refershList}
          onScroll={e => {
            if (e.nativeEvent.contentOffset.y > 0)
              scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
          renderItem={({item, index}) => {
            return (
              <ItemRow
                item={item}
                onItemTap={() => navigation.navigate('Details', {item: item})}
              />
            );
          }}
          ListFooterComponent={<View style={{height: 100}} />}
        />
      </Animated.View>
    </SafeAreaView>
  );
};
