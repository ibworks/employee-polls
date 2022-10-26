import React from "react";
import { connect } from 'react-redux'
import Leaderboard from "../components/Leaderboard";

const LeaderboardContainer = ({ users }) => (
    <Leaderboard users={users} />
);

const mapStateToProps = state => ({
    users: state.users.all
})

export default connect(mapStateToProps, null)(LeaderboardContainer)