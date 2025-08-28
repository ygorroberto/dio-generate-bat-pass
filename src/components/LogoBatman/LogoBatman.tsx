import React from 'react';
import { Image, View, Text } from 'react-native';

import { styles } from './Styles';

export function LogoBatman() {
  return (
    <View>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image style={styles.image} source={require('../../../assets/wing-batman.png')}></Image>
    </View>
  );
}