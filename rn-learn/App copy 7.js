import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

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
    imgStyle: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: "#000",
    },

    inputStyle: {
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: "#aaa"
    }
});

// flex相关
const App = () => {

    const [state, setState] = useState("")

    const onPressHandler = () => {
        console.log("点击的按钮")
    }

    return (
        <>
            {/* 按钮 */}
            <View style={styles.container}>
                <Button title="这是一个按钮" onPress={onPressHandler}></Button>
            </View>
        </>
    );
};

export default App;
