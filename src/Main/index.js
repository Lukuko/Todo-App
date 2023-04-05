import { Container, TaskContainer } from "./styles";
import Header from "../components/Header";
import Tasks from "../components/Tasks";



export default function Main(){
    return (
        <Container>
            <Header />
            <TaskContainer>
                <Tasks/> 
            </TaskContainer>
           
        </Container>
    )
};