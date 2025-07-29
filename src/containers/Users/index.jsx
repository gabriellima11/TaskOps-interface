import { useLocation } from "react-router-dom"

//Containers
import { ViewUsers } from "../ViewUser"
import { EditUsers } from "../EditUser"
import {Register} from '../Register'

//Styles
import { Container } from "./styles"

import {pathsUser} from '../../constants/paths'

export const Users = () =>{
    const { pathname } = useLocation();

    return(
        <Container>
            {pathname === pathsUser.User && <ViewUsers />}
            {pathname === pathsUser.EditUser && <EditUsers />}
            {pathname === pathsUser.Register && <Register />}
        </Container>
    )
}