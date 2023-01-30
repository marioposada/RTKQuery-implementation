import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Home = ({ navigation }) => {
  const onHandlePress = () => {
    navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Boilerplate</Text>
      <Button title="Go to Details" onPress={onHandlePress} />
    </View>
  );
};

export default Home;
