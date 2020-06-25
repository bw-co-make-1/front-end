// import React from "react";
// import { Route, NavLink, useHistory } from "react-router-dom";
// import axios from "axios";
import React, { useState } from "react";

import IssueVotes from './IssueVotes';
import { ContainerDiv, StyledH2 } from './Styles'
import '../App.css';





function IssueCards(issues) {

    const [vote, newVotes] = useState();
    const newVote = () => {
    newVotes(vote + 1);
    }
   const issue = [{ name: "Brianna", issue: "potholes", description: "Big, ugly soul swallowing pothole at 5th and main", city: "Auburn Hills", state: "MI", zip_Code:27508  }, { name: "Holly", issue: "yard waste", description: "Neighbor puts leaf piles on the street after seasonal pickup and leaves it for months at a time", city: "Raleigh", state: "NC", zip_Code:27608 }]  

    return (
        <ContainerDiv>
            <h1>Name: { issue.name }</h1>
            <StyledH2>Issue: { issue.issue } </StyledH2>
            <StyledH2>Description: { issue.description } </StyledH2>
            {/* <StyledH2>Photo: { issue.photo } </StyledH2> */}
            <StyledH2>City: { issue.city } </StyledH2>
            <StyledH2>State: { issue.state } </StyledH2>
            <StyledH2>Zipcode: { issue.zip_Code } </StyledH2>
            <IssueVotes clickEvent = {newVote} vote = {vote}/>
        </ContainerDiv>
        

    )
}

export default IssueCards;
