import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableHighlight } from "react-native";

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
            {/* TouchableHighlight 示例 */}
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => {
                        console.log("触摸效果");
                    }}
                    onLongPress={() => {
                        console.log("长按效果");
                    }}
                    disabled={false} // 默认是 false，如果是 true 表示关闭该组件的触摸功能
                    onPressIn={() => {
                        console.log("触摸开始");
                    }}
                    onPressOut={() => {
                        console.log("触摸结束");
                    }}
                >
                    <View
                        style={{
                            width: 200,
                            height: 50,
                            alignItems: "center",
                            backgroundColor: "#2196F3",
                        }}
                    >
                        <Text style={{ color: "#fff", lineHeight: 50, fontSize: 20 }}>
                            this is a button
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </>
    );
};

export default App;
