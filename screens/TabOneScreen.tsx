import * as React from 'react';
import { StyleSheet, Alert, BackHandler } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {

  React.useEffect(() => {
    const backAction = () => {
        Alert.alert('Wait a moment!','Are you sure to exit the app?', [
            {
                text: 'Hold on',
                onPress: () => null,
                style: 'cancel',
            },
            { text: 'OK to exit', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
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
});
