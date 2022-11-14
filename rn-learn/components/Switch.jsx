import { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const SwitchComp = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <View style={styles.container}>
            <Switch
                value={isOn}
                onValueChange={() => setIsOn((prev) => !prev)}
                trackColor={{ false: "red", true: "blue" }}
                thumbColor={isOn ? "green" : "black"}
            />
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
});

export default SwitchComp;
