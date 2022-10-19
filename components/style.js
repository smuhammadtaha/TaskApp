import {Dimensions, StyleSheet} from 'react-native';

const colors = {
  white: '#fff',
  heading: '#002E46',
  secondary: '#99B0BC',
  iconColor: '#3F93C1',
};

export const styles = StyleSheet.create({
  container: {
    margin: '5%',
  },

  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  col: {flexDirection: 'row', alignItems: 'center'},
  col_1: {marginLeft: 15, flexDirection: 'row', alignItems: 'center'},
  col_2: {marginTop: 15, flexDirection: 'row', alignItems: 'center'},
  img: {
    width: 50,
    height: 50,
  },
  avatar: {
    borderColor: colors.white,
    borderRadius: 30,
    height: 50,
    width: 50,
    overflow: 'hidden',
    borderWidth: 2,
    alignItems: 'center',
    elevation: 1,
  },
  headingCon: {
    justifyContent: 'center',
    left: 10,
  },
  heading: {
    color: colors.heading,
    fontSize: 15,
    fontWeight: 'bold',
  },
  subheading: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mt: {
    marginTop: 10,
  },
  TextColor: {
    color: colors.secondary,
  },
  mainImg: {
    height: Dimensions.get('screen').height / 4.2,
    width: '100%',
    borderRadius: 10,
    elevation: 5,
  },
  TextSize: {
    fontSize: 14,
    left: 5,
  },
  avatar_1: {
    borderColor: '#fff',
    borderRadius: 30,
    height: 30,
    width: 30,
    overflow: 'hidden',
    borderWidth: 2,
    alignItems: 'center',
    elevation: 1,
  },
  img_1: {width: 30, height: 30},
  textView: {
    width: Dimensions.get('screen').width / 1.28,
    marginLeft: 10,
  },
  textField: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dis: {flexDirection: 'row', padding: 10},
  mr: {marginRight: 15},
});
