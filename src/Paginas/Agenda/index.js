import { StyleSheet, Text, Image, ScrollView, View, ImageBackground } from "react-native";

export default function AgendaScreen() {
    return (
        <ScrollView style={styles.container}>

            <ImageBackground style={styles.fundo} source={require('./background.png')}>
                <Text style={styles.titulo}>Agenda Hallel</Text>
                <Text style={styles.subtitulo}>Programaçao dos proximos eventos organizados pela Hallel:</Text>
                <ImageBackground style={styles.bloco} source={require('./fundo.png')}>
                    <Image style={styles.icone} source={require('./igreja.jpg')} />
                    <View>
                        <Text style={styles.data}>7 de Janeiro de 2023 - 10:00</Text>
                        <Text style={styles.desc}>Visita à paróquia São Sebastião</Text>
                        <Text style={styles.mais}>Saiba Mais...</Text>
                    </View>
                </ImageBackground>
                <ImageBackground style={styles.bloco} source={require('./fundo.png')}>
                    <Image style={styles.icone} source={require('./estrada.jpg')} />
                    <View>
                        <Text style={styles.data}>8 de Janeiro de 2023 - 8:30</Text>
                        <Text style={styles.desc}>Retiro em Cacau Pireira</Text>
                        <Text style={styles.mais}>Saiba Mais...</Text>
                    </View>
                </ImageBackground>
                <ImageBackground style={styles.bloco} source={require('./fundo.png')}>
                    <Image style={styles.icone} source={require('./bento.png')} />
                    <View>
                        <Text style={styles.data}>12 de Janeiro de 2023 - 10:00</Text>
                        <Text style={styles.desc}>Visita à Paróquia São Bento</Text>
                        <Text style={styles.mais}>Saiba Mais...</Text>
                    </View>
                </ImageBackground>
                <ImageBackground style={styles.bloco} source={require('./fundo.png')}>
                    <Image style={styles.icone} source={require('./teatro.jpg')} />
                    <View>
                        <Text style={styles.data}>15 de Janeiro de 2023 - 16:00</Text>
                        <Text style={styles.desc}>Visita ao Teatro Amazonas</Text>
                        <Text style={styles.mais}>Saiba Mais...</Text>
                    </View>
                </ImageBackground>
                <ImageBackground style={styles.bloco} source={require('./fundo.png')}>
                    <Image style={styles.icone} source={require('./gracas.png')} />
                    <View>
                        <Text style={styles.data}>17 de Janeiro de 2023 - 10:00</Text>
                        <Text style={styles.desc}>Visita à Paróquia Nossa Senhora das Graças</Text>
                        <Text style={styles.mais}>Saiba Mais...</Text>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    fundo: {
        flex: 1,
        resizeMode: 'cover',
    },
    titulo: {
        fontSize: 26,
        marginVertical: 8,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 40
    },
    subtitulo: {
        fontSize: 16,
        marginHorizontal: 30,
    },
    desc: {
        fontSize: 16,
        marginLeft: 140,
        fontWeight: 'bold',
    },
    mais: {
        color: '#2D7AF1',
        fontSize: 16,
        marginLeft: 140,
        marginTop: 16,
        fontWeight: 'bold',
    },
    data: {
        color: '#ec9b22',
        fontSize: 16,
        marginLeft: 140,
    },
    bloco: {
        margin: 10,
        marginTop: 20,
        marginBottom: -12,
        height: 160,
        width: 416,
        justifyContent: 'center',
    },
    icone: {
        position: 'absolute',
        marginLeft: 20,
        height: 120,
        width: 100,
    }
});