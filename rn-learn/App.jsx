import React from "react";
import { View, StyleSheet } from "react-native";
// import ActivityIndicatorComp from "./components/Others/ActivityIndicator";
// import KeyboardAvoidingViewComp from "./components/Others/KeyboardAvoidingView";
// import ModalComp from "./components/Others/Modal";
// import RefreshControlComp from "./components/Others/RefreshControl";
import StatusBarComp from "./components/Others/StatusBar";

const App = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
        },
    });

    return (
        <View style={styles.container}>
            {/* <ActivityIndicatorComp /> */}
            {/* <KeyboardAvoidingViewComp /> */}
            {/* <ModalComp /> */}
            {/* <RefreshControlComp /> */}
            <StatusBarComp />
        </View>
    );
};

export default App;
