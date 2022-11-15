import { useState, useEffect } from "react";
import { SectionList, View, Text, Dimensions, ActivityIndicator, StyleSheet } from "react-native";
import { queryMovies } from "./data/Service";
import FlatListMovie from "./components/FlatList";

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const windowHeight = Dimensions.get("window").height;
    const windowWidth = Dimensions.get("window").width;
    const title1 = queryMovies(1, 10);
    const title2 = queryMovies(2, 10);

    useEffect(() => {
        setTimeout(() => {
            setData([
                {
                    title: "正在热映",
                    data: title1,
                },
                {
                    title: "即将上映",
                    data: title2,
                },
            ]);
            setLoading((prev) => true);
        }, 1000);
    }, []);

    const styles = StyleSheet.create({
        flex: {
            flex: 1,
            backgroundColor: "#fff",
        },
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FCFF",
            flexDirection: "row",
        },
        loadingView: {
            flex: 1,
            height: windowHeight,
            backgroundColor: "#F5FCFF",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
        },
        barStyle: {
            height: 48,
            width: windowWidth,
            justifyContent: "center",
            backgroundColor: "#fff",
        },
        txtStyle: {
            color: "#000",
            textAlign: "center",
            fontSize: 18,
        },
        sectionHeader: {
            padding: 10,
            backgroundColor: "#268dcd",
        },
        sectionTitle: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#fff",
        },
    });

    return (
        <View style={styles.flex}>
            <View style={styles.barStyle}>
                <Text style={styles.txtStyle}>电影列表</Text>
            </View>
            {!loading && (
                <View style={styles.container}>
                    <ActivityIndicator size="large" animating={true} />
                    <Text style={{ color: "#666666", paddingLeft: 10 }}>正在加载中...</Text>
                </View>
            )}
            <SectionList
                sections={data}
                renderItem={({ item }) => (
                    <FlatListMovie
                        movie={item}
                        onPress={() => {
                            alert(`电影名: ${item.title}`);
                        }}
                    />
                )}
                keyExtractor={(item) => item.id}
                renderSectionHeader={({ section }) => (
                    <View style={styles.sectionHeader}>
                        {/* {console.log(section)} */}
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                    </View>
                )}
                stickySectionHeadersEnabled={true}
            />
        </View>
    );
};

export default App;
