import React, { useEffect } from "react";
import { connect } from 'react-redux'
import {logOut} from '../actions/users';
import  Header from "../components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import '../App.css';
import {AddContainer, DashboardContainer, LeaderboardContainer, LoginContainer, QuestionContainer} from "./index";
import { getAll as getAllUsers } from "../actions/users";
import { getAll as getAllQuestions } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const AppContainer = ({ loggedInUser, logOut, getAllUsers, getAllQuestions }) => {
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers();
        getAllQuestions();
    }, [getAllUsers, getAllQuestions]);

    const loggedInRoutes = (
        <Routes>
            <Route exact path="/" element={<DashboardContainer />} />
            <Route exact path="/login" element={<LoginContainer />} />
            <Route exact path="/leaderboard" element={<LeaderboardContainer />} />
            <Route exact path="/add" element={<AddContainer />} />
            <Route exact path="/question/:id" element={<QuestionContainer />} />
            <Route path="*" element={<div><h2>404 Page not found etc</h2></div>} />
        </Routes>);
    const loggedOutRoutes = (
        <Routes>
            <Route path="*" element={<LoginContainer />} />
        </Routes>);

    return (
        <div className="app">
            <Header loggedInUser={loggedInUser} logOut={logOut} />
            <div className="content">
                { loggedInUser ? loggedInRoutes : loggedOutRoutes }                
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.users.loggedInUser
});
    
export default connect(
    mapStateToProps,
    { logOut, getAllUsers, getAllQuestions }
)(AppContainer)