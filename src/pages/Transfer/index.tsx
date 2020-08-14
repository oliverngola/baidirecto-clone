import React from 'react'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

const Transfer = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TRANSFERIR</Text>
        <Text style={styles.headerSub}>ENVIAR DINHEIRO</Text>
      </View>

      <View style={styles.details}>
        <View style={[styles.items]}>
          <TouchableOpacity
            style={[styles.container, styles.item]}
            activeOpacity={0.6}
          >
            <MaterialCommunityIcons
              name="home-import-outline"
              size={58}
              color="#00a3e0"
            />
            <View style={styles.itemDetail}>
              <Text style={styles.itemDetailTitle}>Mesmo Banco</Text>
              <Text style={styles.itemDetailDesc}>
                Transfira dinheiro para outras contas do Banco BAI.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.container, styles.item]}
            activeOpacity={0.6}
          >
            <MaterialCommunityIcons
              name="home-import-outline"
              size={58}
              color="#00a3e0"
            />
            <View style={styles.itemDetail}>
              <Text style={styles.itemDetailTitle}>Interbancária</Text>
              <Text style={styles.itemDetailDesc}>
                Transfira dinheiro para contas de outros bancos.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.container, styles.item]}
            activeOpacity={0.6}
          >
            <FontAwesome5 name="money-check-alt" size={58} color="#00a3e0" />
            <View style={styles.itemDetail}>
              <Text style={styles.itemDetailTitle}>Cartōes Flex</Text>
              <Text style={styles.itemDetailDesc}>
                Transfira dinheiro entre os seus cartōes Flex.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.container, styles.item]}
            activeOpacity={0.6}
          >
            <MaterialCommunityIcons
              name="content-duplicate"
              size={58}
              color="#00a3e0"
            />
            <View style={styles.itemDetail}>
              <Text style={styles.itemDetailTitle}>E-Kwanza</Text>
              <Text style={styles.itemDetailDesc}>
                Carregue a sua carteia É-Kwanza.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Transfer
