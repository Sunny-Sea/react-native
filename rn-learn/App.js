import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

const App = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff"
        }
    })

    const handleFetch = async () => {
        return await fetch("https://cnodejs.org/api/v1/topics").then((resp) =>
            resp.json()).then((resp) => console.log(resp)).catch(err => console.log(err));
    }

    return (
        <View style={styles.container}>
            <Button onPress={handleFetch} title="点击获取数据" />
        </View>
    )
}

export default App
