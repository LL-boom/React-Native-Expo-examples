import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Result from "./Result";

function Control({ isRunning, handleLeftButtonPress, handleRightButtonPress }){
    //console.log(Result)
    return (
      <>
        {/* 根据情况判断左右按钮颜色和文字 */}
        <TouchableOpacity
        style={[
            styles.controlButtonBorder,
          { backgroundColor: isRunning ? "#333333" : "#1c1c1e" },
        ]}
        onPress={handleLeftButtonPress}

        >
        <View style={styles.controlButton}>
            <Text style={{ color: isRunning ? "#fff" : "#9d9ca2" }}>
            {isRunning ? "计次" : "复位"}
            </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        style={[
            styles.controlButtonBorder,
            { backgroundColor: isRunning ? "#340e0d" : "#0a2a12" },
          ]}
          onPress={handleRightButtonPress}
        >

        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? "#ea4c49" : "#37d05c" }}>
            {isRunning ? "停止" : "启动"}
          </Text>
        </View>
        </TouchableOpacity>
      </>
    );
}

const styles = StyleSheet.create({
    controlButtonBorder: {
      width: 70,
      height: 70,
      borderRadius: 70,
      justifyContent: "center",
      alignItems: "center",
    },
    controlButton: {
      width: 65,
      height: 65,
      borderRadius: 65,
      borderColor: "#000",
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default React.memo(Control);
