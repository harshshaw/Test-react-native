import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import MapView from 'react-native-maps';
import * as Linking from 'expo-linking';
import * as Location from 'expo-location';

import Card from './cards'
export default function App() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const style = StyleSheet.create({
        containers: {
            paddingTop: 50,
        },
        tinyLogo: {
            width: 270,
            height: 95,
        }
    })

    // Card elements to show 3 outputs with alert on press

    return (
        <View style={styles.container}>
            <Card>

                <Image
                    style={style.tinyLogo}
                    source={{ uri: 'https://etimg.etb2bimg.com/photo/76159933.cms' }}></Image>
                <Text >SRM Store</Text>
                <Text>Address: Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203</Text>
                <Button onPress={() => { return Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${location}&destination=12.8231° N, 80.0442° E`); }} title="Direction"></Button>
            </Card>
            <Card>

                <Image
                    style={style.tinyLogo}
                    source={{ uri: 'https://i.ytimg.com/vi/K_JAB-V_kIM/maxresdefault.jpg' }}></Image>
                <Text >Lake MAll</Text>
                <Text>Address: 104, Rash Behari Ave, Lake Market, Kalighat, Kolkata, West Bengal 700029</Text>
                <Button onPress={() => { return Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${location}&destination=22.5153° N, 88.3932° E`); }} title="Direction"></Button>
            </Card>
            <Card>
                <Image
                    style={style.tinyLogo}
                    source={{ uri: 'https://previews.123rf.com/images/rickdeacon/rickdeacon1607/rickdeacon160700269/60279822-shot-of-a-lindt-chocolate-store-at-an-airport.jpg' }}></Image>
                <Text >Chocolate Store</Text>
                <Text>Address: 1858/1, Rajdanga Main Road, 3rd Floor, Acropolis Mall, Kolkata, West Bengal 700107</Text>
                <Button onPress={() => { return Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${location}&destination=chocolate+store+chennai`); }} title="Direction"></Button>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
