import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform } from "react-native";
import { StatusBar } from 'expo-status-bar';

const statusBarHeight = StatusBar.statusBarHeight

export default function Inicio(){
    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView>
                <View style = {styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style = {styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style = {styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style = {styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style = {styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style = {styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style = {styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style = {styles.content}>
                    <Text>Conteúdo</Text>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#040316',
        paddingTop: Platform.OS === 'android' ? statusBarHeight:25,
    },
    content:{
        alignSelf: 'center',
        flex: 1,
        width: '98%',
        height: 120,
        marginBottom: 20,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center'
    }
});