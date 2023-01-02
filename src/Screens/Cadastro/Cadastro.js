import React from "react";
import {View, Text, TextInput, Button, TouchableOpacity} from "react-native"
import styles from "../Cadastro/style";


const Separator = () => {
    return <View style={styles.separator} />;
  }

export default function Cadastro(){
    return(
        <View style ={styles.formContext}> 
    <View style = {styles.form}>
        <Text style={{ fontSize: 30, marginLeft: 112, marginTop: 10}}> Cadastro </Text>
        <Text style={{marginLeft: 45, marginVertical: 2, marginTop: 50}}> Nome </Text>
        <TextInput style={styles.fundInput} placeholder=" Nome Completo"></TextInput>
        <Text style={{marginLeft: 45, marginVertical: 2, marginTop: 10 }}> Email</Text>
        <TextInput style={styles.fundInput} placeholder="example@Hallel.com"></TextInput>
        <Text style={{marginLeft: 45, marginVertical: 2, marginTop: 10 }}> Senha</Text>
        <TextInput style={styles.fundInput} placeholder="******"></TextInput>
        <Text style={{marginLeft: 45, marginVertical: 2, marginTop: 10 }}> Confirme sua Senha</Text>
        <TextInput style={styles.fundInput} placeholder="******"></TextInput>

        <Separator/>
        <Separator/>
         <Button title="Cadastrar"/>
        <Separator/>
        
        

        <TouchableOpacity>
      <Text style={styles.forgotText}> Já tem uma Conta?</Text>
         
        </TouchableOpacity> 
        </View>
         
  </View>
    );
}