import React from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { useGetCharactersQuery } from "./../../../store/services/marvelApi";

const Home = ({ navigation }) => {
  const onHandlePress = () => {
    navigation.navigate("Details");
  };

  const { data, error, isLoading } = useGetCharactersQuery();

  const characters = data?.data.results.map((character) => {
    return (
      <View key={character.id}>
        <Text>{character.name}</Text>
        <Image
          style={{ width: 30, height: 30 }}
          source={{
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          }}
        />
      </View>
    );
  });

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Boilerplate</Text>
          <Button title="Go to Details" onPress={onHandlePress} />
          {characters}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
