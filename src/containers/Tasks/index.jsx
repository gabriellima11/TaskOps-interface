import { useLocation } from "react-router-dom"
import { CreateTask } from "../CreateTask"
import { ViewTask } from "../ViewTask"
import { EditTask } from "../EditTask"

import paths from '../../constants/paths'

export const Tasks = ({filterCompany}) =>{
    const { pathname } = useLocation();

    return(
        <>
            {pathname === paths.Task &&<ViewTask filterCompany={filterCompany}/>}
            {pathname === paths.CreateTask && <CreateTask />}
            {pathname === paths.EditTask && <EditTask />}
        </>
    )
}