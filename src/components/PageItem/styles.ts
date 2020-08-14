import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  item: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    marginBottom: 18,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    textAlign: 'center',
  },

  itemDetail: {
    width: '80%',
    marginLeft: 10,
  },

  itemDetailTitle: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 16,
    color: '#00a3e0',
  },

  itemDetailDesc: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#5c7c96',
  },
})

export default styles