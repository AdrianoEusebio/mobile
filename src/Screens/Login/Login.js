import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./style";


const Separator = () => {
    return <View style={styles.separator} />;
  }

export default function Login({navigation}){
   
   const entrar = () =>{
    navigation.reset({
        index:0,
        routes:[{name : "Cadastro"}]

    })
}

    return(


<View style ={styles.formContext}> 
    <View style = {styles.form}>
        <Text style ={styles.Stitulo}> Login </Text>
        <Separator/>
        <Separator/>
        <Text style = {styles.container}> Email</Text>
        <TextInput style = {styles.fundInput}
        placeholder="example@hallel.com"/>
        <Text style = {styles.container} > Senha</Text>
        <TextInput style = {styles.fundInput} 
        placeholder="Digite sua Senha"/>
        
        

        <View style={styles.forgotContainer}>
        <TouchableOpacity>
      <Text style={styles.forgotText}> Esqueceu sua Senha?</Text>
         
        </TouchableOpacity> 
        </View>
        <Separator/>
        <Button  title="Entrar" onPress={() => entrar()} />
        <Separator/>
        <View> 
        <TouchableOpacity>

      <Text style={styles.forgotText1}> Não tem uma conta? Clique Aqui!</Text>
         
        </TouchableOpacity>
    </View>
    </View>
</View>



    );
}