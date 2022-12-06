import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Home } from './src/screen/Home';
import { Listas } from './src/screen/Listas';
import { Produtos } from './src/screen/Produtos';

// Keep the splash screen visible while we fetch resources=
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {

    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      async function prepare() {
        try {
          // Pre-load fonts, make any API calls you need to do here
          await Font.loadAsync({
            'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
            'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
            'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'ConcertOne-Regular': require('./assets/fonts/ConcertOne-Regular.ttf'),
            'IndieFlower-Regular': require('./assets/fonts/IndieFlower-Regular.ttf'),
          });

        } catch (e) {
          console.warn(e);
        } finally {
          // Tell the application to render
          setAppIsReady(true);
        }
      }

      prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
        // This tells the splash screen to hide immediately! If we call this after
        // `setAppIsReady`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
        await SplashScreen.hideAsync();
      }
    }, [appIsReady]);

    // console.log(appIsReady)
    
    if (!appIsReady) {
      return null;
    } else {
      SplashScreen.hideAsync()
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Listas" component={Listas} options={{ headerShown: false }} />
          <Stack.Screen name="Produtos" component={Produtos} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;


