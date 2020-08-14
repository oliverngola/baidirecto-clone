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
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'

import styles from './styles'

const Home = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.starIcon}>
            <FontAwesome5 name="star" size={20} color="white" />
          </View>

          <View style={styles.search}>
            <KeyboardAvoidingView style={{ flexDirection: 'row' }}>
              <EvilIcons name="search" size={24} color="white" />
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

export default Home
