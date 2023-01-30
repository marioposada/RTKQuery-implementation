import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import {data} from "../../../constants/data";


const Details = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Character</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.status}</Text>
            <Text style={styles.text}>{item.species}</Text>
            <Text style={styles.text}>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Details;
