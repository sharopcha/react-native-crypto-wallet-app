import {
  useFonts,
  Roboto_900Black,
  Roboto_700Bold,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

export default () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return fontsLoaded;
};
