import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

interface PageHeaderProps {
  header: {
    title: string
    subtitle?: string
  }
}

const PageHeader: React.FC<PageHeaderProps> = ({ header }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{header.title}</Text>
      {header.subtitle && (
        <Text style={styles.headerSub}>{header.subtitle}</Text>
      )}
    </View>
  )
}

export default PageHeader