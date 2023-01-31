import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { useGetCharactersQuery } from "./../../../store/services/marvelApi";

const Home = ({ navigation }) => {
  const onHandlePress = () => {
    navigation.navigate("Details");
  };

  const { data, error, isLoading } = useGetCharactersQuery();

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error</Text>}
      <View style={styles.container}>
        <Text style={styles.text}>Boilerplate</Text>
        <Button title="Go to Details" onPress={onHandlePress} />
      </View>
    </>
  );
};

export default Home;
