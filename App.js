import { useFonts } from 'expo-font';
import Main from './src/Main';

export default function App() {
  const [isFontsLoaded] = useFonts({//o objeto é gerado assíncrono, usar a const para resolver esse problema
    'GeneralSans-400' : require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600' : require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700' : require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if(!isFontsLoaded){//com isso, evitamos que o componente seja carregado antes das fontes
    return null;
  }//o if anterior é pra sempre verificar se as fontes vão ser carregadas e garantir que o componente não seja carregado antes delas
  return (
    <Main/>
  );
}


//Background-color #FDE5DF
