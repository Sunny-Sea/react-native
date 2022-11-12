import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image, FlatList, SectionList } from 'react-native'

// FlatList 和 SectionList
const App = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            paddingTop: 100
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
            borderWidth: 1,
            borderColor: "#ccc",
            marginBottom: 10,
        },
        sectionHeader: {
            paddingTop: 2,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 2,
            fontSize: 14,
            fontWeight: "bold",
            backgroundColor: "rgba(247,247,247,1.0)",
        }
    })

    // const data = [
    //     { key: "Devin" },
    //     { key: "Dan" },
    //     { key: "Dominic" },
    //     { key: "Jackson" },
    //     { key: "James" },
    //     { key: "Joel" },
    //     { key: "John" },
    //     { key: "Jillian" },
    //     { key: "Jimmy" },
    //     { key: "Julie" },
    // ]

    const data = [
        { title: "D", data: ["Devin", "Dan", "Dominic"] },
        {
            title: "J",
            data: [
                "Jackson",
                "James",
                "Jillian",
                "Jimmy",
                "Joel",
                "John",
                "Julie",
            ],
        },
    ]

    return (
        <View style={styles.container}>
            {/* <FlatList
                data={data}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                keyExtractor={(item, index) => index}
            /> */}
            <SectionList
                sections={data}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={(item, index) => index}
                renderSectionHeader={({ section }) => <Text style={section.item}>{section.title}</Text>}
            />
        </View>
    )
}

export default App
