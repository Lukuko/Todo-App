import { Task, TaskAction, TaskDescription, TaskFooter, TaskHeader, TaskStatus, TaskIcon } from "./styles";
import { Text } from "../Text";
import Pending from "../../assets/images/pending.png";
import Edit from "../../assets/images/edit.png";
import Delete from "../../assets/images/delete.png";
import Done from "../../assets/images/done.png";
import { FlatList, TouchableOpacity } from "react-native";




export default function Tasks({ tasks }) {
    return (
        <FlatList
            data={tasks}
            keyExtractor={task => task._id}
            renderItem={({ item: task }) => (
                <Task>
                    <TaskHeader>
                        <Text size={18} weight="600">{task.title}</Text>
                    </TaskHeader>
                    <TaskDescription>
                        <Text opacity={0.5}>{task.description}</Text>
                    </TaskDescription>
                    <TaskFooter>
                        <TaskStatus>
                            <TaskIcon source={task.done ? Done : Pending} />
                            <Text size={16} color={task.done ? '#2192D8' : '#E620AE'}>
                                {task.done ? 'Feita' : 'Pendente'}
                            </Text>
                        </TaskStatus>
                        <TaskAction>
                            <TouchableOpacity onPress={() => alert("Editar")}>
                                <TaskIcon source={Edit} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => alert("Deletar")}>
                                <TaskIcon source={Delete} />
                            </TouchableOpacity>
                        </TaskAction>
                    </TaskFooter>
                </Task>
            )}
        />


    );
}