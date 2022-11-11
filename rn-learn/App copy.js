import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * 函数式组件
 */
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text>函数式组件</Text>
//             <StatusBar style="auto" />
//         </View>
//     );
// }

/**
 * 类组件
 */
export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>类组件</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text></Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
