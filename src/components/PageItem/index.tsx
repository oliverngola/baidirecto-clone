import React, { ReactNode } from "react";
import { TouchableOpacity, View, Text } from "react-native"

import styles from "./styles"

interface PageItemProps {
  item: {
    title: string
    description: string
    icon: ReactNode
  }
}

const PageItem: React.FC<PageItemProps> = ({ item }) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.item]}
      activeOpacity={0.6}
    >
      {item.icon}
      <View style={styles.itemDetail}>
        <Text style={styles.itemDetailTitle}>{item.title}</Text>
        <Text style={styles.itemDetailDesc}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PageItem