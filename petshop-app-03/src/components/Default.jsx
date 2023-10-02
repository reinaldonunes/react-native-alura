import React from 'react'
import styles from '../../styles/globalStyle'
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'

export default function Default({ children }){
    return(
    <SafeAreaView style={styles.fill}>
        <StatusBar />
        <KeyboardAvoidingView 
        style={styles.fill}
        behavior={Platform.OS == 'ios' ? "padding" : "height"} 
        >
            { children }
        </KeyboardAvoidingView>
    </SafeAreaView>
    )
}