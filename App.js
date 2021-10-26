import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  BackHandler,
} from "react-native";
import { Text, ListItem } from "react-native-elements";
//https://docs.expo.dev/versions/latest/sdk/constants/
import Constants from "expo-constants";
import { EXAMPLES_LIST } from "./examples_list";

export default function APP(){
    const[exampleIndex , setExampleIndex] = useState(null);

    useEffect(()=>{
        //点击返回按键
        const backAction = () => {
            //在example中，返回列表
            if (exampleIndex !== null){
                setExampleIndex(null);
            }
            else{
                //在列表页，退出APP
                BackHandler.exitApp()
            }
            return true;
        };
        //API:BackHandler  仅适用于Android
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    },[exampleIndex]);

    if(exampleIndex !== null) return EXAMPLES_LIST[exampleIndex].component;

    return(
        <SafeAreaView style = {styles.container}>
        <Text h4 style = {styles.heading}>
            React Native Expo Examples List
        </Text>

        <ScrollView>
            {EXAMPLES_LIST.map((l,i) => (
                <ListItem key={i} bottomDivider onPress={() => setExampleIndex(i)}>
                    <View>
                        <Text> Day {l.days}</Text>
                    </View>

                <ListItem.Content>
                    <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
      </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    textAlign: "center",
    padding: 12,
  },
  title: {
    fontWeight: "bold",
  },
});
