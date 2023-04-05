import { Task, TaskAction, TaskDescription, TaskFooter, TaskHeader, TaskStatus,TaskIcon } from "./styles";
import { Text } from "../Text";
import Pending from "../../assets/images/pending.png";//os dois pontos antes da barra é para voltar diretórios
import Edit from "../../assets/images/edit.png";
import Delete from "../../assets/images/delete.png";





export default function Tasks(){
    return(
       <Task>
        <TaskHeader>
            <Text size={18} weight="600">Estudar React</Text>
        </TaskHeader>

        <TaskDescription>
            <Text opacity={0.5}>Fazer a atividade passada na ultima aula</Text>
        </TaskDescription>

        <TaskFooter>
            <TaskStatus>
                <TaskIcon source={Pending}/>
                <Text size={16} color ="#E620AE">Pendente</Text>
                </TaskStatus>
            <TaskAction>
            <TaskIcon source={Edit}/>
            <TaskIcon source={Delete}/>
            </TaskAction>
        </TaskFooter>
       </Task>
    );
}