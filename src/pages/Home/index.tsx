import React, { useState } from 'react'
import {
  Feather as Icon,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'

import PageCardItem from '../../components/PageCardItem'

import styles from './styles'

const Home = () => {
  const [isVisibleTotalBalance, setIsVisibleTotalBalance] = useState(false)
  const [totalBalance, setTotalBalance] = useState<number>(39.00)

  const operationItems = [
    {
      title: 'CARREGAR E-KWANZA',
      icon: (
        <MaterialCommunityIcons
          name="content-duplicate"
          size={28}
          color="#00a3e0"
        />
      )
    },
    {
      title: 'CONSULTAR PATRIMÓNIO',
      icon: (
        <MaterialCommunityIcons
          name="file-document"
          size={28}
          color="#00a3e0"
        />
      )
    },
    {
      title: 'PAGAR SERVIÇOS',
      icon: (
        <MaterialIcons
          name="account-balance-wallet"
          size={28}
          color="#00a3e0"
        />
      )
    },
    {
      title: 'LEVANTAR DINHEIRO',
      icon: (
        <FontAwesome5 name="money-check-alt" size={28} color="#00a3e0" />
      )
    },
    {
      title: 'CÂMBIOS TAXAS DE CÂ...',
      icon: (
        <MaterialCommunityIcons name="coin" size={28} color="#00a3e0" />
      )
    },
    {
      title: 'CONSULTAR CARTŌES',
      icon: (
        <FontAwesome5 name="credit-card" size={28} color="#00a3e0" />
      )
    }
  ]

  return (
    <>
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.starIcon}>
            <Icon name="star" size={22} color="white" />
          </View>

          <View style={styles.search}>
            <KeyboardAvoidingView style={{ flexDirection: 'row' }}>
              <Icon name="search" style={styles.searchIcon} size={22} color="white" />
              <TextInput
                placeholder="O QUE PROCURA?"
                placeholderTextColor="#fff"
                style={styles.searchInput}
              />
            </KeyboardAvoidingView>
          </View>

        </View>

        <View style={styles.accountInfo}>
          <View style={styles.accountInfoPicture}></View>
          <View style={[styles.container, styles.accountInfoBoth]}>
            {isVisibleTotalBalance ?
              (
                <>
                  <Icon name="eye" onPress={() => setIsVisibleTotalBalance(!isVisibleTotalBalance)} size={24} color="white" />
                  <Text style={styles.accountInfoText}>VER SALDO</Text>
                </>
              ) :
              (
                <>
                  <Icon name="eye-off" onPress={() => setIsVisibleTotalBalance(!isVisibleTotalBalance)} size={24} color="white" />
                  <Text style={styles.accountInfoText}>{totalBalance},00 KZ</Text>
                </>
              )
            }
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
            {operationItems.map((item, index) => <PageCardItem key={index} item={item} />)}
          </ScrollView>
        </View>

        <View style={styles.moviment}></View>
      </View>
    </>
  )
}

export default Home
