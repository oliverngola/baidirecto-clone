import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  header: {
    height: 280,
    backgroundColor: '#00a3e0',
    padding: 40,
    alignItems: 'center',
  },

  starIcon: {
    padding: 7,
  },

  search: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,50,90,.12)',
    width: '95%',
    borderRadius: 25,
    padding: 7,
  },

  searchIcon: {
    marginRight: 10
  },

  searchInput: {
    color: 'white',
    textAlign: 'justify',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
  },

  accountInfo: {
    marginTop: 32,
  },

  accountInfoPicture: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: 'rgba(0,50,90,.12)',
    alignSelf: 'center',
  },

  accountInfoBoth: {
    alignItems: 'center',
  },

  accountInfoText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Roboto_400Regular',
    marginLeft: 5,
  },

  details: {
    position: 'relative',
    height: 3000,
    backgroundColor: '#f7fcfe',
  },

  operation: {
    marginTop: -44,
  },

  item: {
    width: 140,
    height: 100,
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    textAlign: 'center',
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#5c7c96',
    marginTop: 6,
  },

  moviment: {},
})

export default styles