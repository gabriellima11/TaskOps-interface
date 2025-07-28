import { useLocation } from "react-router-dom"

//Containers
import { CreateTask } from "../CreateTask"
import { ViewTask } from "../ViewTask"
import { EditTask } from "../EditTask"

//Styles
import { Container } from "./styles"

import {pathsTask} from '../../constants/paths'

export const Tasks = ({filterCompany}) =>{
    const { pathname } = useLocation();

    return(
        <Container>
            {pathname === pathsTask.Task &&<ViewTask filterCompany={filterCompany}/>}
            {pathname === pathsTask.CreateTask && <CreateTask />}
            {pathname === pathsTask.EditTask && <EditTask />}
        </Container>
    )
}