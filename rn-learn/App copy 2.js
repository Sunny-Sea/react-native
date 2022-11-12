import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

// 使用百分比
const App = () => {
    return (
        <View style={{ height: "100%" }}>
            <View style={{ height: "15%", backgroundColor: "#abc" }}></View>
            <View style={{ height: "25%", backgroundColor: "#acb" }}></View>
            <View style={{ height: "35%", backgroundColor: "#bca" }}></View>
        </View>
    );
};

export default App;
