import { Box } from "@chakra-ui/layout";
import { RiAddFill } from "react-icons/ri";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { FormTable, MyFbButton } from "../components";
import NewForm from "./NewForm";

const Forms = ({_setShowMenu}) => {
    let match = useRouteMatch()
    return (
        <>
            <Switch>
                <Route path={`${match.path}/new`}>
                    <NewForm type="new" />
                </Route>
                <Route path={`${match.path}/:id/frame`}>
                    <NewForm type="edit" _setShowMenu={_setShowMenu}/>  
                </Route>
                <Route path={`${match.path}/:id`}>
                    <NewForm type="edit"/>
                </Route>
                <Route path={match.path}>
                    <Box>
                        <Link to="/forms/new">
                            <MyFbButton leftIcon={<RiAddFill />}>Create New Form</MyFbButton>
                        </Link>
                    </Box>
                    <Box>
                        <FormTable />
                    </Box>
                </Route>
            </Switch>
        </>
    );
}

export default Forms;