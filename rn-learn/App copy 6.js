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

    return (
        <>
            {/* 文本输入 */}
            <View style={styles.container}>
                <TextInput
                    defaultValue={state}
                    onChangeText={(text) => setState(prev => prev = text)}
                    placeholder="请输入内容"
                    style={styles.inputStyle}
                />
                <Text>{state}</Text>
            </View>
        </>
    );
};

export default App;
