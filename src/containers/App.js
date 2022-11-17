import React, { useEffect } from "react";
import { connect } from 'react-redux'
import {logOut} from '../actions/users';
import  Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import '../App.css';
import {DashboardContainer, LeaderboardContainer, LoginContainer, NewQuestionContainer, QuestionContainer} from "./index";
import { getAll as getAllUsers } from "../actions/users";
import { getAll as getAllQuestions } from "../actions/questions";

const AppContainer = ({ authedUser, logOut, getAllUsers, getAllQuestions }) => {

    useEffect(() => {
        getAllUsers();
        getAllQuestions();
    }, [getAllUsers, getAllQuestions]);

    const loggedInRoutes = (
        <Routes>
            <Route exact path="/" element={<DashboardContainer />} />
            <Route exact path="/login" element={<LoginContainer />} />
            <Route exact path="/leaderboard" element={<LeaderboardContainer />} />
            <Route exact path="/add" element={<NewQuestionContainer />} />
            <Route exact path="/questions/:id" element={<QuestionContainer />} />
            <Route path="*" element={
                <div>
                    <h2>404 Page not found</h2>
                    <img src="https://csshint.com/wp-content/uploads/2019/06/HTML-Funny-404-Pages.gif" alt="404" />
                </div>} />
        </Routes>);
    const loggedOutRoutes = (
        <Routes>
            <Route path="*" element={<LoginContainer />} />
        </Routes>);

    return (
        <div className="app">
            <Header authedUser={authedUser} logOut={logOut} />
            <div className="content">
                { authedUser ? loggedInRoutes : loggedOutRoutes }                
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    authedUser: state.users.authedUser
});
    
export default connect(
    mapStateToProps,
    { logOut, getAllUsers, getAllQuestions }
)(AppContainer)