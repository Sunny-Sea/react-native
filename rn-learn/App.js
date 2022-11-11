import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

const Comp = props => {
    const [state, setState] = useState(1);
    return (
        <View>
            <Text>
                A:{props.a}, 年龄: {props.aAge}
            </Text>
            <Text>{state}</Text>
            <Button
                title="+1"
                onPress={() => setState(prev => setState(prev + 1))}
            ></Button>
        </View>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            <Comp
                a="a"
                aAge={18}
            />
            <Comp
                a="aa"
                aAge={18}
            />
            <Comp
                a="aaa"
                aAge={18}
            />
        </View>
    );
};

export default App;
