import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageComp = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/ok.png")}
                style={[styles.image, { resizeMode: "cover" }]}
            />
            <Text style={styles.text}>cover</Text>
            <Image
                source={require("../assets/ok.png")}
                style={[styles.image, { resizeMode: "center" }]}
            />
            <Text style={styles.text}>center</Text>
            <Image
                source={require("../assets/ok.png")}
                style={[styles.image, { resizeMode: "contain" }]}
            />
            <Text style={styles.text}>contain</Text>
            <Image
                source={require("../assets/ok.png")}
                style={[styles.image, { resizeMode: "repeat" }]}
            />
            <Text style={styles.text}>repeat</Text>
            <Image
                source={require("../assets/ok.png")}
                style={[styles.image, { resizeMode: "stretch" }]}
            />
            <Text style={styles.text}>stretch</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    image: {
        width: 140,
        height: 110,
        backgroundColor: "red",
    },
    text: {
        justifyContent: "center",
        fontSize: 24,
    },
});

export default ImageComp;
