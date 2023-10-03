import React from 'react'
import { customStyles } from '../../styles/globalStyle'
import styles from '../../styles/globalStyle'
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'


export default function Default({ children }){
    return(
    <SafeAreaView style={customStyles} >
        <StatusBar backgroundColor={styles.purple} />
        <KeyboardAvoidingView 
        style={styles.fill}
        behavior={Platform.OS == 'ios' ? "padding" : "height"} 
        >
            { children }
        </KeyboardAvoidingView>
    </SafeAreaView>
    )
}