import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
const TextInputComp = () => {
    // const [str, setStr] = useState("");
    // const [num, setNum] = useState();
    const [value, setValue] = useState("");
    const [show, setShow] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#F5FCFF",
            paddingTop: 25,
        },
        searchContainer: {
            height: 45,
            flexDirection: "row",
        },
        inputStyle: {
            height: 45,
            flex: 1,
            marginTop: 20,
            borderWidth: 1,
            marginLeft: 10,
            paddingLeft: 5,
            borderColor: "#ccc",
            borderRadius: 5,
        },
        btnStyle: {
            width: 80,
            marginTop: 20,
            marginLeft: -5,
            marginRight: 10,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: "#23BEFF",
            height: 45,
            justifyContent: "center",
            alignItems: "center",
        },
        search: {
            color: "#fff",
            fontSize: 15,
            fontWeight: "bold",
        },
        resultStyle: {
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            height: 200,
            borderColor: "#ccc",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
        },
        itemStyle: {
            fontSize: 16,
            padding: 5,
            paddingTop: 10,
            paddingBottom: 10,
            borderWidth: 1,
            borderColor: "#ddd",
            borderTopWidth: 0,
        },
    });

    return (
        <View style={styles.container}>
            {/* 搜索框 */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="请输入关键字"
                    value={value}
                    onChangeText={(e) => {
                        setShow((prev) => true);
                        setValue((prev) => e);
                    }}
                />
                {/* 搜索按钮 */}
                <View style={styles.btnStyle}>
                    <Text style={styles.search} onPress={() => setShow((prev) => false)}>
                        搜索
                    </Text>
                </View>
            </View>
            {value && show ? (
                <View style={styles.resultStyle}>
                    <Text
                        style={styles.itemStyle}
                        numberOfLines={1}
                        onPress={() => {
                            setValue((prev) => prev + "街道");
                            setShow(false);
                        }}
                    >
                        {value}街道
                    </Text>
                    <Text
                        style={styles.itemStyle}
                        numberOfLines={1}
                        onPress={() => {
                            setShow(false);
                            setValue((prev) => prev + "车站");
                        }}
                    >
                        {value}车站
                    </Text>
                    <Text
                        style={styles.itemStyle}
                        numberOfLines={1}
                        onPress={() => {
                            setShow(false);
                            setValue((prev) => prev + "机场");
                        }}
                    >
                        {value}机场
                    </Text>
                </View>
            ) : null}
        </View>
    );

    // return (
    //     <View style={styles.container}>
    //         <TextInput
    //             placeholder="请输入内容"
    //             value={str}
    //             style={styles.input}
    //             onChangeText={(e) => {
    //                 setStr((prev) => (prev = e));
    //             }}
    //         />
    //         <TextInput
    //             style={styles.input}
    //             placeholder="请输入内容"
    //             value={num}
    //             onChangeText={(e) => setNum((prev) => (prev = e))}
    //             keyboardType="numeric"
    //             // keyboardType="ascii-capable"
    //             // keyboardType="decimal-pad"
    //             // keyboardType="default"
    //             // keyboardType="email-address"
    //             // keyboardType="name-phone-pad"
    //             // keyboardType="number-pad"
    //             // keyboardType="numbers-and-punctuation"
    //             // keyboardType="phone-pad"
    //             // keyboardType="twitter"
    //             // keyboardType="url"
    //             // keyboardType="visible-password"
    //             // keyboardType="web-search"
    //         />
    //     </View>
    // );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "stretch",
//         justifyContent: "center",
//         backgroundColor: "#fff",
//     },
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//     },
// });
export default TextInputComp;
