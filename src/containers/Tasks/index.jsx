import { useLocation } from "react-router-dom"

//Containers
import { CreateTask } from "../CreateTask"
import { ViewTask } from "../ViewTask"
import { EditTask } from "../EditTask"

//Styles
import { Container } from "./styles"

import paths from '../../constants/paths'

export const Tasks = ({filterCompany}) =>{
    const { pathname } = useLocation();

    return(
        <Container>
            {pathname === paths.Task &&<ViewTask filterCompany={filterCompany}/>}
            {pathname === paths.CreateTask && <CreateTask />}
            {pathname === paths.EditTask && <EditTask />}
        </Container>
    )
}