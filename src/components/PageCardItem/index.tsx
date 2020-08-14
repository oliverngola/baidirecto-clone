import React, { ReactNode } from "react";
import { TouchableOpacity, Text } from "react-native"

import styles from "./styles"

interface PageCardItemProps {
  item: {
    title: string
    icon: ReactNode
  }
}

const PageCardItem: React.FC<PageCardItemProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.6}>
      {item.icon}
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default PageCardItem