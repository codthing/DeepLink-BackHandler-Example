import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, BackHandler } from 'react-native';
import { RootStackParamList } from '../types';
import { useRoute } from '@react-navigation/native'

export default function DetailScreen({ navigation: { goBack, navigate } }: StackScreenProps<RootStackParamList, 'Home'>) {

    // 返回上一屏  start
    function handleBackButtonClick() {
        goBack();
        return true;
    }

    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, []);
    // 返回上一屏  end

    const route = useRoute()

    console.log(route)

    if (route.params != undefined) {
        return (
            <View style={styles.container} >
                <Text style={styles.title}>{route.params.id}</Text>
            </View >
        )
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>ListScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 24,
        color: '#2e78b7',
    },
});
