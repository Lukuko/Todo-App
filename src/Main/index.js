import { Container, TaskContainer } from "./styles";
import Header from "../components/Header";
import Tasks from "../components/Tasks/Index";
import { tasks } from "../mocks/tasks";



export default function Main(){
    return (
        <Container>
            <Header />
            <TaskContainer>
                <Tasks tasks={tasks}/> 
            </TaskContainer>
           
        </Container>
    )
};