import React,{useState} from 'react';
import { ScrollView, Text , StyleSheet,View} from 'react-native';
import Books,{AllBooks} from './components/Books';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function App() {
    return (
        <View style={styles.appBackground}>
            <Text style={styles.banner}>
                My Favourite WebNovels and Manhwas
            </Text>
            <ScrollView>
                <AllBooks />
            </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({
    banner: {
        paddingTop: 70,
        fontSize: 20,
        color: "red",
        fontWeight: "bold",
        backgroundColor:"black",
    },
    appBackground:{
        flex: 1,
        backgroundColor:"white",
    },

});


