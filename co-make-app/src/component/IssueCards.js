import React from "react";
import { Route, NavLink, useHistory } from "react-router-dom";
import axios from "axios";


function IssueCards(issue) {
     

    return (
        <ContainerDiv>
            <h1>Name: { props.name }</h1>
            <h2>Issue: { props.issue } </h2>
            <h2>Description: { props.description } </h2>
            <h2>Photo: { props.photo } </h2>
            <h2>City: { props.city } </h2>
            <h2>State: { props.state } </h2>
            <h2>Zipcode: { props.zip_Code } </h2>

        </ContainerDiv>
    )
}

export default IssueCards();
