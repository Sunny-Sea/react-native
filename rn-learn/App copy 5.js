import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

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
    }
});

// flex相关
const App = () => {
    return (
        <>
            {/* 本地图片和网络图片的引入
            引入网络图片必须指定图片的宽高
            require 中的图片名字必须是一个静态字符串，不能使用变量！因为 require 是在编译时期执行，而非运行时期执行！。
            本地图片在引入时会包含图片的尺寸（宽度，高度）信息，但是如果是网络图片，则必须手动指定图片的尺寸。 */}
            <View style={styles.container} >
                <Image source={require("./assets/icon.png")} style={styles.imgStyle} />
                <Image source={{ uri: "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/202210172142908.png" }} style={styles.imgStyle} />
            </View>
        </>
    );
};

export default App;
