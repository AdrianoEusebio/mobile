import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function LiturgiaScreen() {

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.data}>Sexta-Feira, 6 de Janeiro de 2023</Text>

            <Text style={styles.titulo}>Tempo do Natal antes da Epifania | Sexta-Feira</Text>

            <Text style={styles.subtitulo}>Primeira Leitura (1JO 5,5-13)</Text>

            <Text style={styles.texto}>Leitura da Primeira Carta de São João.{'\n\n'}

                Caríssimos, 5quem é o vencedor do mundo, senão aquele que crê que Jesus é o Filho de Deus? 6Este é o que veio pela água e pelo sangue: Jesus Cristo. (Não veio somente com a água, mas com a água e o sangue). E o Espírito é que dá testemunho, porque o Espírito é a Verdade. 7Assim, são três que dão testemunho: 8o Espírito, a água e o sangue; e os três são unânimes.{'\n\n'}

                9Se aceitamos o testemunho dos homens, o testemunho de Deus é maior. Este é o testemunho de Deus, pois ele deu testemunho a respeito de seu Filho. Aquele que crê no Filho de Deus tem este testemunho dentro de si. 10Aquele que não crê em Deus faz dele um mentiroso, porque não crê no testemunho que Deus deu a respeito de seu Filho. 11E o testemunho é este: Deus nos deu a vida eterna, e esta vida está em seu Filho. 12Quem tem o Filho, tem a vida; quem não tem o Filho não tem a vida. 13Eu vos escrevo estas coisas a vós que acreditastes no nome do Filho de Deus, para que saibais que possuís a vida eterna.{'\n\n'}

                - Palavra do Senhor.
            </Text>
            <Text style={styles.subtitulo}>- Graças a Deus</Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FAFAFA'
    },
    data: {
        fontSize: 16,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titulo: {
        fontSize: 20,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitulo: {
        fontSize: 18,

        marginHorizontal: 30,
        fontWeight: 'bold',
    },
    texto: {
        textAlign: 'justify',
        fontSize: 20,
        marginVertical: 8,
        marginHorizontal: 30
    }
});