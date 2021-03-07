import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, BackHandler } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../types';

export default function ListScreen({
    navigation: { goBack, navigate }
}: StackScreenProps<RootStackParamList, 'Test'>) {

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
                
                <TouchableOpacity onPress={() => navigate('Detail')} style={styles.link}>
                    <Text style={styles.linkText}>Go to DetailScreen</Text>
                </TouchableOpacity>
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
    title_tip: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
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
