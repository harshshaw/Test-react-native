import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

export default function App() {

    //This component is to load startup api data from my last project using axios get and update it in
    //a state , with a scope to map over data on card elements 

    console.log("app executed")
    const [data, updateData] = useState([]);

    const req = async () => {
        await axios.get(`https://isdb-startup.herokuapp.com/startup`).then(res => updateData(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        req()
    }, [])
    return (
        <View style={styles.container}>
            <Text>startup</Text>
            <StatusBar style="auto" />
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
