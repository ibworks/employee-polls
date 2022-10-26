import React, { useEffect } from "react";
import { connect } from 'react-redux'
import {logOut} from '../actions/users';
import  Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import '../App.css';
import LoginContainer from "./LoginContainer";
import DashboardContainer from "./DashboardContainer";
import QuestionContainer from "./QuestionContainer";
import { getAll as getAllUsers } from "../actions/users";
import { getAll as getAllQuestions } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const AppContainer = ({ loggedInUser, logOut, getAllUsers, getAllQuestions }) => {
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers();
        getAllQuestions();
    }, [getAllQuestions, getAllUsers]);

    useEffect(() => {
        if (!loggedInUser) {
            navigate("/login");
        }
    }, [loggedInUser, navigate]);

    return (
        <div className="app">
            <Header loggedInUser={loggedInUser} logOut={logOut} />
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<DashboardContainer />} />
                    <Route exact path="/login" element={<LoginContainer />} />
                    <Route exact path="/leaderboard" element={<div>leaderboard</div>} />
                    <Route exact path="/add" element={<div>add</div>} />
                    <Route exact path="/question/:id" element={<QuestionContainer />} />
                    <Route path="*" element={<div><h2>404 Page not found etc</h2></div>} />
                </Routes>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.users.loggedInUser
});
    
export default connect(
    mapStateToProps,
    { logOut, getAllQuestions, getAllUsers }
)(AppContainer)