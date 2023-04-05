import styled from "styled-components";
import {Platform, StatusBar} from 'react-native'

const isAndroid = Platform.OS === 'android'; //LEMBRE DA DESGRAÇA DAS LETRAS MAÍUSCULAS E MINÚSCULAS

//SafeAreaView Só funciona no IOS, no android tem que fazer o armengue abaixo
export const Container = styled.SafeAreaView `
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0 }
    flex : 1;
`;

export const TaskContainer = styled.View`
    flex: 1;
`;