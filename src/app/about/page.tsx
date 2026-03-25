"use client";
import { useQuery } from "@apollo/client/react";
import { gql } from "graphql-tag";

const GET_HELLO = gql`
    query Hello {
        hello
    }
`

const About = () =>{
    const {data, loading, error} = useQuery(GET_HELLO);

    console.log("data is: ", data);
    console.log("loading is: ", loading);
    console.log("error is: ", error);
    return (
        <div>
            This is a about page
        </div>
    )
}

export default About;