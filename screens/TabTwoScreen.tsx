import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen({ navigation }: StackScreenProps<RootStackParamList, 'Root'>) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>

      <TouchableOpacity onPress={() => navigation.navigate('List')} style={styles.link}>
        <Text style={styles.linkText}>go to ListScreen</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: 'rgba(0,100,0,0.5)',
    borderRadius: 12
  },
  linkText: {
    fontSize: 28,
    color: '#2e78b7',
    paddingHorizontal: 18
  },
});
