import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Transfer = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PAGAR</Text>
      </View>

      <View style={styles.details}>
        <View style={[styles.items]}>
          <TouchableOpacity
            style={[styles.container, styles.item]}
            activeOpacity={0.6}
          >
            <MaterialIcons
              name="account-balance-wallet"
              size={58}
              color="#00a3e0"
            />
            <View style={styles.itemDetail}>
              <Text style={styles.itemDetailTitle}>BAIPaga</Text>
              <Text style={styles.itemDetailDesc}>
                Efectue pagamentos de forma mais rápida e cómoda.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.container, styles.item]}
            activeOpacity={0.6}
          >
            <MaterialCommunityIcons
              name="cards-playing-outline"
              size={58}
              color="#00a3e0"
            />
            <View style={styles.itemDetail}>
              <Text style={styles.itemDetailTitle}>Serviços</Text>
              <Text style={styles.itemDetailDesc}>
                Pesquisa entidades e sectores para fazer pagamentos.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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

export default Transfer
