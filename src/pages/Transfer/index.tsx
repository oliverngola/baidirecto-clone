import React from 'react'
import { View } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader'
import PageItem from '../../components/PageItem'

import styles from './styles'

const Transfer = () => {
  const items = [
    {
      title: 'Mesmo Banco',
      description: 'Transfira dinheiro para outras contas do Banco BAI.',
      icon: (
        <MaterialCommunityIcons
          name="home-import-outline"
          size={58}
          color="#00a3e0"
        />
      )
    },
    {
      title: 'Interbancária',
      description: 'Transfira dinheiro para contas de outros bancos.',
      icon: (
        <MaterialCommunityIcons
          name="home-import-outline"
          size={58}
          color="#00a3e0"
        />
      )
    },
    {
      title: 'Cartōes Flex',
      description: 'Transfira dinheiro entre os seus cartōes Flex.',
      icon: (
        <FontAwesome5 name="money-check-alt" size={58} color="#00a3e0" />
      )
    },
    {
      title: 'E-Kwanza',
      description: 'Carregue a sua carteia É-Kwanza.',
      icon: (
        <MaterialCommunityIcons name="content-duplicate" size={58} color="#00a3e0" />
      )
    }
  ]

  return (
    <>
      <PageHeader header={{ title: 'Transferir', subtitle: 'Enviar Dinheiro' }} />

      <View style={styles.details}>
        <View style={[styles.items]}>
          {items.map((item, index) => <PageItem key={index} item={item} />)}
        </View>
      </View>
    </>
  )
}

export default Transfer
