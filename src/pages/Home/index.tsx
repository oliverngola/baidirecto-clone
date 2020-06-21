import React from 'react'
import {
  Feather as Icon,
  FontAwesome5,
  EvilIcons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

const Home = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.starIcon}>
            <FontAwesome5 name="star" size={20} color="white" />
          </View>
          <View style={styles.search}>
            <EvilIcons name="search" size={24} color="white" />
            <TextInput
              placeholder="O QUE PROCURA?"
              style={styles.searchInput}
            />
          </View>
        </View>

        <View style={styles.accountInfo}>
          <View style={styles.accountInfoPicture}></View>
          <View style={[styles.container, styles.accountInfoBoth]}>
            <Icon name="eye" size={24} color="white" />
            <Text style={styles.accountInfoText}>VER SALDO</Text>
          </View>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.operation}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <TouchableOpacity style={styles.item} activeOpacity={0.6}>
              <MaterialCommunityIcons
                name="content-duplicate"
                size={28}
                color="#00a3e0"
              />
              <Text style={styles.itemTitle}>CARREGAR E-KWANZA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} activeOpacity={0.6}>
              <MaterialCommunityIcons
                name="file-document"
                size={28}
                color="#00a3e0"
              />
              <Text style={styles.itemTitle}>CONSULTAR PATRIMÓNIO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} activeOpacity={0.6}>
              <MaterialIcons
                name="account-balance-wallet"
                size={28}
                color="#00a3e0"
              />
              <Text style={styles.itemTitle}>PAGAR SERVIÇOS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} activeOpacity={0.6}>
              <FontAwesome5 name="money-check-alt" size={28} color="#00a3e0" />
              <Text style={styles.itemTitle}>LEVANTAR DINHEIRO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} activeOpacity={0.6}>
              <MaterialCommunityIcons name="coin" size={28} color="#00a3e0" />
              <Text style={styles.itemTitle}>CÂMBIOS TAXAS DE CÂ...</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} activeOpacity={0.6}>
              <FontAwesome5 name="credit-card" size={28} color="#00a3e0" />
              <Text style={styles.itemTitle}>CONSULTAR CARTŌES</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.moviment}></View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  header: {
    height: 280,
    backgroundColor: '#00a3e0',
    padding: 32,
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

export default Home
