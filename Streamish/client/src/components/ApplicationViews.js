import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import Login from "./Login";
import Register from "./Register";


const ApplicationViews = ({ isLoggedIn }) => {
    return (
        <Switch>
            <Route path="/" exact>
                {isLoggedIn ? <VideoList /> : <Redirect to="/login" />}

            </Route>

            <Route path="/videos/add">
                {isLoggedIn ? <VideoForm /> : <Redirect to="/login" />}

            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

            <Route path="/videos/:id">{/* TODO: Video Details Component */}</Route>

        </Switch>
    );
};

export default ApplicationViews;