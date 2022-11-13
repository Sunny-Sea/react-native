import { useState } from 'react'
import { View, StyleSheet, Text, Button, Image, TouchableOpacity } from 'react-native'
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync } from 'expo-image-picker'
import { shareAsync } from 'expo-sharing'

const App = () => {
    // 保存获取的图片的地址
    const [imageUrl, setImageUrl] = useState("")

    const handleGetImage = async() => {
        // 首先需要获取用户权限
        const result = await requestMediaLibraryPermissionsAsync();
        // console.log(result)
        if (!result.granted) {
            // 用户不同意
            alert("需要访问相册的权限")
            return
        }

        // 异步的到开手机相册，让用户选择图片
        let imageResult = await launchImageLibraryAsync();
        if (!imageResult.canceled) {
            setImageUrl(prev=>prev=imageResult.assets[0].uri)
        }
        console.log(imageResult.assets,imageResult.canceled)
        return;
    }

    const imageShare = async () => await shareAsync(imageUrl);
    // const imageShare = async () => {
    //     console.log(imageUrl);
    //     return await shareAsync(imageUrl);
    // }

    return (
        <View style={styles.container}>
            {imageUrl ? (
                <>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.thumbnail}
                    />
                    <TouchableOpacity style={styles.button} onPress={imageShare}>
                        <Text style={styles.buttonText}>分享照片</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>setImageUrl(prev=>prev="")}>
                        <Text style={styles.buttonText}>重新选择照片</Text>
                    </TouchableOpacity>
                </>
            ) : (<>
                    <Image source={require("./assets/adaptive-icon.png")} style={styles.logo} />
                    <Text style={styles.instructions}>按下按钮，与朋友分享照片</Text>
                    <TouchableOpacity style={styles.button} onPress={handleGetImage}>
                        <Text style={styles.buttonText}>选择照片</Text>
                    </TouchableOpacity>
                </>)}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10,
    },
    instructions: {
        color: "#888",
        fontSize: 18,
        marginHorizontal: 15,
        textAlign: "center",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "blue",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    },
})


export default App
