import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'

// 使用滚动视图
const App = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff"
        }
    })

    const logo = {
        uri: "https://images-1305186932.cos.ap-beijing.myqcloud.com/images/202210172142908.png",
        width: 80,
        height: 80
    }

    return (
        <>
            {/* 通过设置horizontal设置页面是垂直滚动还是水平滚动 */}
            <ScrollView>
                <Text style={{ fontSize: 40 }}>Scroll me plz</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{ fontSize: 40 }}>If you like</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{ fontSize: 40 }}>Scrolling down</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{ fontSize: 40 }}>What's the best</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{ fontSize: 40 }}>Framework around?</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{ fontSize: 40 }}>React Native</Text>
            </ScrollView>
        </>
    )
}

export default App
