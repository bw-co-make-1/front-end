import React from "react";
import { Route, NavLink, useHistory } from "react-router-dom";
import axios from "axios";


function IssueCards(issue) {
     

    return (
        <ContainerDiv>
            <h1>Name: { props.name }</h1>
            <StyledH2>Issue: { props.issue } </StyledH2>
            <StyledH2>Description: { props.description } </StyledH2>
            <StyledH2>Photo: { props.photo } </StyledH2>
            <StyledH2>City: { props.city } </StyledH2>
            <StyledH2>State: { props.state } </StyledH2>
            <StyledH2>Zipcode: { props.zip_Code } </StyledH2>

        </ContainerDiv>
    )
}

export default IssueCards
