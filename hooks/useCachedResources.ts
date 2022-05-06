import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          akshar: require('../assets/fonts/Akshar-Regular.ttf'),
          "akshar-bold": require('../assets/fonts/Akshar-Bold.ttf')
        })
      } catch (err) {
        console.warn(err);
      } finally {
        setIsLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, [])

  return isLoadingComplete;
}