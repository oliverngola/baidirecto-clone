import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
})

export default styles