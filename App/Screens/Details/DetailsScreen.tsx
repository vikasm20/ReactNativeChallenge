import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {icArrow, icFav, icHoloFav} from '../../Const/Assets';
import {primaryColor, whiteColor} from '../../Const/Colors';
import {listFavourite} from '../../Redux/Actions';
import {styles} from './DetailsScreenStyles';

export const DetailsScreen = ({route, navigation}) => {
  const item = route?.params?.item;
  const disptach = useDispatch();
  const favList = useSelector(state => state?.list?.favData);
  const [refresh, setIsRefresh] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: primaryColor}}>
      <View style={{flex: 1}}>
        <LinearGradient
          colors={[primaryColor, whiteColor]}
          style={{paddingBottom: '10%'}}>
          <View style={styles.headerView}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Image style={styles.backIcon} source={icArrow} />
            </TouchableOpacity>
            <Text style={styles.headerTitleText}>{'Details Screen'}</Text>
            <TouchableOpacity
              onPress={() => {disptach(listFavourite(item?.['im:name']?.label))
              setIsRefresh(!refresh)
              }}>
              <Image
                style={styles.favIcon}
                source={favList?.filter(x => x === item?.['im:name']?.label).length>0  ? icFav : icHoloFav}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <Image
          style={styles.image}
          source={{uri: item?.['im:image'][0]?.label}}
        />
        <View style={{backgroundColor: whiteColor, flex: 1}}>
          <View style={{margin: '5%'}}>
            <View style={styles.subView}>
              <Text style={styles.attributesLabel}>
                {item?.['im:name']?.label}
              </Text>
              <Text style={styles.priceLabel}>{item?.['im:price']?.label}</Text>
            </View>
            <Text style={styles.titleLabel}>{item?.['title']?.label}</Text>
            <Text style={styles.artistsHeader}>{'Artists : '}</Text>
            <Text style={styles.artistsLabel}>
              {item?.['im:artist']?.label}
            </Text>
          </View>
        </View>
        <Text style={styles.rightsLabel}>{item?.['rights']?.label}</Text>
      </View>
    </SafeAreaView>
  );
};
