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
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'

import styles from './styles'

const Home = () => {
  const [isVisibleTotalBalance, setIsVisibleTotalBalance] = useState(false)
  const [totalBalance, setTotalBalance] = useState<number>(39.00)

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

export default Home
