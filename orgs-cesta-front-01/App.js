import React, { useCallback } from 'react';

import { StatusBar, SafeAreaView, View} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat"
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

import Cesta from "./src/views/Cesta"
import mock from "./src/mocks/cesta"


export default function App() {
  const [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if (!fontLoaded) {
    SplashScreen.hideAsync();
  }else{
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Cesta {...mock} />
      </SafeAreaView>
    );
  }
}