import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

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

export default Transfer
