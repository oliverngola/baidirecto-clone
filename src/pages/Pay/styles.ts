import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  header: {
    height: 150,
    backgroundColor: '#00a3e0',
    padding: 32,
    alignItems: 'center',
    textAlign: 'center',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
  },

  details: {
    position: 'relative',
    height: 3000,
    backgroundColor: '#f7fcfe',
  },

  items: {
    padding: 22,
    marginTop: -80,
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
    fontSize: 14,
    color: '#00a3e0',
  },

  itemDetailDesc: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 13,
    color: '#5c7c96',
  },
})

export default styles