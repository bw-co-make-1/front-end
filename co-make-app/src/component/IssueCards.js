import React, { useState } from "react";
import IssueVotes from "./IssueVotes";


const [vote, newVotes] = useState(0);
const newVote = () => {
    newVotes(vote + 1);
}
function IssueCards(issue) {
     

    return (
        <div>
            <h1>Name: { issue.name }</h1>
            <h2>Issue: { issue.issue } </h2>
            <h2>Description: { issue.description } </h2>
            <h2>Photo: { issue.photo } </h2>
            <h2>City: { issue.city } </h2>
            <h2>State: { issue.state } </h2>
            <h2>Zipcode: { issue.zip_Code } </h2>
            <IssueVotes clickEvent = {newVote} vote = {vote}/>
        </div>
        


    )
}

export default IssueCards();
