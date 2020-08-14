import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'

import PageHeader from '../../components/PageHeader'
import PageItem from '../../components/PageItem'

import styles from './styles'

const Transfer = () => {
  const items = [
    {
      title: 'BAIPaga',
      description: 'Efectue pagamentos de forma mais rápida e cómoda.',
      icon: (
        <MaterialIcons
          name="account-balance-wallet"
          size={58}
          color="#00a3e0"
        />
      )
    },
    {
      title: 'Serviços',
      description: 'Pesquisa entidades e sectores para fazer pagamentos.',
      icon: (
        <MaterialCommunityIcons
          name="cards-playing-outline"
          size={58}
          color="#00a3e0"
        />
      )
    },
  ]

  return (
    <>
      <PageHeader header={{ title: 'Pagar' }} />

      <View style={styles.details}>
        <View style={[styles.items]}>
          {items.map((item, index) => <PageItem key={index} item={item} />)}
        </View>
      </View>
    </>
  )
}

export default Transfer
