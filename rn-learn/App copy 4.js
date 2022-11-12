import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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

// flex相关
const App = () => {
    return (
        <>
            {/* <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: "abc" }}></View>
                <View style={{ flex: 1, backgroundColor: "acb" }}></View>
                <View style={{ flex: 1, backgroundColor: "bac" }}></View>
            </View> */}
            {/* 尝试把 flexDirection 改为row试试 */}
            <View style={{ height: 100, width: 50, flex: 1, justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ height: 100, width: 50, backgroundColor: "#aaa" }}></View>
                <View style={{ height: 100, width: 50, backgroundColor: "#bbb" }}></View>
                <View style={{ height: 100, width: 50, backgroundColor: "#ccc" }}></View>
            </View>
        </>
    );
};

export default App;
