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

  searchInput: {
    color: 'white',
    marginLeft: 10,
    fontFamily: 'Roboto_400Regular',
  },

  accountInfo: {
    marginTop: 42,
  },

  accountInfoPicture: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'rgba(0,50,90,.12)',
    alignSelf: 'center',
  },

  accountInfoBoth: {
    alignItems: 'center',
  },

  accountInfoText: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Roboto_400Regular',
    marginLeft: 5,
  },

  details: {
    position: 'relative',
    height: 3000,
    backgroundColor: '#f7fcfe',
  },

  operation: {
    marginTop: -50,
  },

  item: {
    width: 130,
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
    fontSize: 13,
    color: '#5c7c96',
    marginTop: 6,
  },

  moviment: {},
})

export default styles