import { useState, useEffect } from "react";
import FlatListMovie from "./components/FlatList";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    ActivityIndicator,
    Alert,
} from "react-native";
import { queryMovies } from "./data/Service";

const windowWidth = Dimensions.get("window").width;

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const movieData = queryMovies();
    // const windowHeight = Dimensions.get("window").height;

    // 模拟数据请求
    useEffect(() => {
        setTimeout(() => {
            setData((prev) => movieData);
            data && setLoading(true);
        }, 1000);
    }, [movieData.length]);

    const styles = StyleSheet.create({
        flex: {
            flex: 1,
            backgroundColor: "#268dcd",
        },
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FCFF",
            flexDirection: "row",
        },
        barStyle: {
            height: 48,
            width: windowWidth,
            justifyContent: "center",
            backgroundColor: "#268dcd",
        },
        txtStyle: {
            color: "#fff",
            textAlign: "center",
            fontSize: 18,
        },
    });

    return (
        <View style={styles.flex}>
            <View style={styles.barStyle}>
                <Text style={styles.txtStyle}>电影列表</Text>
            </View>
            {!loading && (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#268dcd" />
                    <Text
                        style={{
                            color: "#666",
                            paddingLeft: 10,
                        }}
                    >
                        努力加载中
                    </Text>
                </View>
            )}
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <FlatListMovie
                        movie={item}
                        onPress={() => Alert.alert(`电影名${item.title}`)}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default App;
