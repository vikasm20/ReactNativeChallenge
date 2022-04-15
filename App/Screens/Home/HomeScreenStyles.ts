import {StyleSheet} from 'react-native';
import {primaryColor} from '../../Const/Colors';

export const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: '5%',
    width: '90%',
    marginTop: 20,
    height: 40,
    borderRadius: 5,
    borderColor: primaryColor,
    borderWidth: 1,
    backgroundColor: '#f4f4f4',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    width: '90%',
  },

  card: {
    // flex: 1,
    flexDirection: 'row',
    marginVertical: '2%',
    marginHorizontal: '5%',
    elevation: 5,
    shadowOffset: {width: 0, height: 10},
    shadowColor: primaryColor,
    shadowOpacity: 0.1,
    borderColor: '#4c669f',
    backgroundColor: '#fff',
    padding: '2%',
    borderRadius: 5,
  },
  text: {
    flex: 1,
    alignSelf: 'center',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '62%',
  },
  textAmount: {
    fontSize: 13,
    textAlign: 'right',
    padding: 6,
    borderWidth: 1,
    borderColor: primaryColor,
    borderRadius: 5,
  },
  textDesc: {
    flex: 1,
    width: 150,
    fontSize: 13,
    marginTop: 5,
  },
  textMoreInfo: {
    textAlign: 'right',
    flex: 1,
    fontSize: 13,
    color: primaryColor,
  },
  textFavCount: {
    marginLeft: 5,
    fontSize: 13,
  },
  favImage: {
    height: 20,
    width: 20,
  },
  arrowImage: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
  itemRowOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemRowTwo: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
  },
});
