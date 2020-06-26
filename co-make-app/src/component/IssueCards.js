import React, { useState } from "react";

import IssueVotes from './IssueVotes';
import { ContainerDiv, StyledH2 } from './Styles'
import '../App.css';





function IssueCards(issues) {

    const [vote, newVotes] = useState();
    const newVote = () => {
    console.log(vote)
    newVotes(vote + 1);
    }
   var issue = [{ name: "Brianna", issue: "potholes", description: "Big, ugly soul swallowing pothole at 5th and main", city: "Auburn Hills", state: "MI", zip_Code:27508  }, { name: "Holly", issue: "yard waste", description: "Neighbor puts leaf piles on the street after seasonal pickup and leaves it for months at a time", city: "Raleigh", state: "NC", zip_Code:27608 }]  

    return (
        <ContainerDiv>
            { issue.map ( (i) =>(<div key={Date.now()}>
            <h1>Name: { i.name }</h1>
            <StyledH2>Issue: { i.issue } </StyledH2>
            <StyledH2>Description: { i.description } </StyledH2>
            {/* <StyledH2>Photo: { issue.photo } </StyledH2> */}
            <StyledH2>City: { i.city } </StyledH2>
            <StyledH2>State: { i.state } </StyledH2>
            <StyledH2>Zipcode: { i.zip_Code } </StyledH2>
            <IssueVotes clickEvent = {newVote} vote = {vote}/></div>)) }
       
        </ContainerDiv>
        

    )
}

export default IssueCards;
