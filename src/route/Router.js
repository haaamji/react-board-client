import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserList from '../user/UserList';
import AddUser from '../user/AddUser';
import EditUser from '../user/EditUser';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={UserList} />
                        <Route path="/users" component={UserList} />
                        <Route path="/add-user" component={AddUser} />
                        <Route path="/edit-user" component={EditUser} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )

}

export default Router;