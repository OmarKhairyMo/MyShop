import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListProduct from "../../components/ListProduct";
import MainTextInput from "../../components/MainTextInput";
import { REACENTLY, Trending } from "../../data/dummyData";

const Home = () => {
  return (
    <View style={styles.contianer}>
      <View style={styles.header}>
        <MainTextInput />
      </View>
      <View style={styles.recentList}>
        <ListProduct title="New Collection" myList={REACENTLY} />
      </View>
      <View style={styles.trendingCont}>
        <ListProduct title="Trending" myList={Trending} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  contianer: { flex: 1, paddingLeft: 10 },
  header: {
    height: "10%",
    paddingRight: 10,
    justifyContent: "flex-end",
  },
  recentList: { height: "36%", marginVertical: 20 },
  trendingCont: { height: "30%", marginVertical: 20 },
});
