import { View,Text,StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';


const Usuario = ({usuario}) => {
  return (
    <View>
    <Text>{usuario}</Text>
    <StatusBar style="auto" />
  </View>
  )
}

export default Usuario