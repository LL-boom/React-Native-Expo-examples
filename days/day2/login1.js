import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function Login1(){
    return(
        <SafeAreaView style = {styles.container}>
            <StatusBar style = 'light' />

            <View style = {styles.content}>
                <View style={styles.textWrapper}>
                <Text style={styles.hiText}>欢迎回来!</Text>
                <Text style={styles.userText}>Your User Name</Text>
                <Text style={styles.userText}>phoneNumber</Text>
                </View>

            <View style = {styles.form}>
                {/* icon使用 */}
                <FontAwesome5 name='lock' style={styles.iconLock} />

                {/* 文本输入框 */}
                <TextInput
                style={styles.inputPassword}
                // 打开键盘
                keyboardType="numeric"
                secureTextEntry={true}
                autoFocus={true}
                placeholder="请输入密码"
                placeholderTextColor="#929292"
                />

                {/* 点击透明 */}
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonLoginText}>登录</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.action}>
                <TouchableOpacity>
                    <Text style={styles.userText}>帮助</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={styles.userText}>忘记密码</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    )
}


const TEXT = {
    color: "#fff",
    textAlign: "center",
};


const styles = StyleSheet.create({
    container : {
        flex :1 ,
        backgroundColor: "pink",
        paddingTop: Constants.statusBarHeight
    },
    content : {
        //填充
        paddingHorizontal: 30,
    },
    hiText : {
        ...TEXT,
        fontSize: 40,
        lineHeight: 50,
        fontWeight: "bold",
        marginBottom: 20,
    },
    textWrapper: {
        marginTop: 60,
        marginBottom: 30,
    },
    userText: {
        ...TEXT,
        fontSize: 16,
        lineHeight: 30,
      },
    form: {
        marginBottom: 30,
    },
    iconLock: {
        color: "#929292",
        position: "absolute",
        fontSize: 16,
        top: 22,
        left: 22,
        zIndex: 10,
    },
    inputPassword: {
        height: 60,
        borderRadius: 30,
        paddingHorizontal: 30,
        fontSize: 20,
        color: "#929292",
        backgroundColor: "#fff",
        textAlign: "center",
        textAlignVertical: "center",
      },
    buttonLogin: {
        height: 50,
        borderRadius: 25,
        backgroundColor: "#8d015a",
        justifyContent: "center",
        marginTop: 15,
    },
    buttonLoginText: {
        ...TEXT,
        fontSize: 18,
    },
    action: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userText: {
        ...TEXT,
        fontSize: 16,
        lineHeight: 30,
    },
});