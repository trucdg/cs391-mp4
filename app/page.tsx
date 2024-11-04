// app/page.tsx

"use client";

import styled from "styled-components";

import { useState } from "react";
import Link from "next/link";

const StyledDiv=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fce4ec; 
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  color: #D81B60; 
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #333; 
  text-align: center;
  margin-bottom: 1rem;
`;


const StyledInput = styled.input`
  padding: 0.5rem;
  border: 2px solid #D81B60; 
  border-radius: 8px;
  width: 100%; 
  margin-bottom: 1rem; 
  font-size: 1rem;
  transition: border-color 0.3s;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #D81B60; /* Deep pink background */
  color: white; /* White text */
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #EC407A; /* Lighter pink on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

export default function Home() {

  const [city, setCity] = useState("");

  return(
    <StyledDiv>
      <StyledTitle>Find the Weather in any city!</StyledTitle>
      <Subtitle>Enter a city name below to get the current weather</Subtitle>
      <StyledInput 
        type="text" 
        value={city} 
        placeholder="City name" 
        onChange={(e) => setCity(e.target.value)} />
      <StyledLink href={`/${city}`}>Get Weather</StyledLink>
    </StyledDiv>
  )
}