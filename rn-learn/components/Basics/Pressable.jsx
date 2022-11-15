import { View, Pressable, Text, StyleSheet } from "react-native";

const PressableComp = () => {
    const onPressInFn = () => {
        console.log("onPressInFn 触发了!");
    };

    const onLongPressFn = () => {
        console.log("onLongPressFn 触发了!");
    };

    const onPressFn = () => {
        console.log("onPressFn 触发了!");
    };

    const onPressOutFn = () => {
        console.log("onPressOutFn 触发了!");
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
        },
        pressable: {
            width: 200,
            height: 100,
            backgroundColor: "#ccc",
            alignItems: "center",
            justifyContent: "center",
        },
        pressdStyle: {
            backgroundColor: "rgb(210, 230, 255)",
            height: 100,
            lineHeight: "100",
        },
        unPressdStyle: {
            backgroundColor: "#ccc",
        },
    });

    return (
        <View style={styles.container}>
            <Pressable
                delayLongPress={1000}
                onPressIn={onPressInFn}
                // style={styles.pressable}
                onLongPress={onLongPressFn}
                onPress={onPressFn}
                hitSlop={{ top: 20, bottom: 0, left: 20, right: 40 }}
                onPressOut={onPressOutFn}
                // pressRetentionOffset={{ top: 10, bottom: 10, left: 10, right: 10 }}
                style={({ pressed }) => {
                    // console.log(pressed);
                    // console.log(props);
                    // {"pressed": false}
                    if (pressed) {
                        return styles.pressdStyle;
                    } else {
                        return styles.unPressdStyle;
                    }
                }}
            >
                {/* <Text>Pressable</Text> */}
                {/* 可以根据是否按压来决定 Text 的样式 */}
                {({ pressed }) => {
                    if (pressed) {
                        return (
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    lineHeight: 100,
                                }}
                            >
                                Pressd
                            </Text>
                        );
                    } else {
                        return (
                            <Text
                                style={{
                                    textAlign: "center",
                                }}
                            >
                                unPress
                            </Text>
                        );
                    }
                }}
            </Pressable>
        </View>
    );

    /**
     * 官网案例
     */
    // const [timesPressed, setTimesPressed] = useState(0);
    // let textLog = "";
    // if (timesPressed > 1) {
    //     textLog = timesPressed + "x onPress";
    // } else if (timesPressed > 0) {
    //     textLog = "onPress";
    // }
    // const styles = StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         justifyContent: "center",
    //     },
    //     text: {
    //         fontSize: 16,
    //     },
    //     wrapperCustom: {
    //         borderRadius: 8,
    //         padding: 6,
    //     },
    //     logBox: {
    //         padding: 20,
    //         margin: 10,
    //         borderWidth: StyleSheet.hairlineWidth,
    //         borderColor: "#f0f0f0",
    //         backgroundColor: "#f9f9f9",
    //     },
    // });
    // return (
    //     <View style={styles.container}>
    //         <Pressable
    //             onPress={() => {
    //                 setTimesPressed((current) => current + 1);
    //             }}
    //             style={({ pressed }) => [
    //                 {
    //                     backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
    //                 },
    //                 styles.wrapperCustom,
    //             ]}
    //         >
    //             {({ pressed }) => (
    //                 <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
    //             )}
    //         </Pressable>
    //         <View style={styles.logBox}>
    //             <Text testID="pressable_press_console">{textLog}</Text>
    //         </View>
    //     </View>
    // );
};

export default PressableComp;
