import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        textAlign: "center",
        lineHeight: 100,

        // 使用 translate 没有效果，方法已废弃
        /*
            decomposedMatrix, rotation, scaleX, scaleY, transformMatrix, translateX, translateY
            Deprecated. Use the transform prop instead.
        */
        // transform: "translate(-50%, -50%)", ❌
    },
});

// 样式的设置
const App = () => {
    return (
        <View style={styles.container}>
            <View style={{ height: 100, width: 100, backgroundColor: "#abc" }}>
                <Text style={styles.textContainer}>A</Text>
            </View>
            <View style={{ height: 100, width: 100, backgroundColor: "#acb" }}>
                <Text style={styles.textContainer}>B</Text>
            </View>
            <View style={{ height: 100, width: 100, backgroundColor: "#bca" }}>
                <Text style={styles.textContainer}>C</Text>
            </View>
        </View>
    );
};

export default App;
