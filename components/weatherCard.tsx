//components/weatherCard.tsx

import styled from "styled-components";
import {Weather} from "@/app/interfaces/weather";


const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem; 
    border: 1px solid #D81B60; 
    margin: 0.5rem; 
    width: 70%; 
    max-width: 200px; 
    border-radius: 12px; 
    background-color: #F8BBD0; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    transition: transform 0.2s, box-shadow 0.2s; 

    &:hover {
        transform: translateY(-2px); 
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); 
    }

    @media screen and (max-width: 480px) {
        width: 90%; 
        max-width: none;
    }
`;

const WeatherDate = styled.h2`
    font-size: 1.2rem; 
    color: #D81B60; 
    margin-bottom: 0.5rem; 
    text-align: center; 
    
    @media (max-width: 768px) {
        font-size: 1rem; 
    }

    @media (max-width: 480px) {
        font-size: 0.7rem; 
    }
`;

const StyledP = styled.p`
    font-size: 1rem; 
    font-weight: bold; 
    color: #D81B60; 

    @media screen and (max-width: 768px) {
        font-size: 1rem; 
    }

    @media screen and (max-width: 480px) {
        font-size: 0.7rem; 
    }
`;

export default function WeatherCard(props:Weather) {
    return (
        <WeatherCardWrapper className="weather-card">
            <WeatherDate>{props.datetime}</WeatherDate>
            <StyledP>{props.conditions}</StyledP>
            <StyledP>{props.description}</StyledP>
            <StyledP>{props.tempmin}° - {props.tempmax}°</StyledP>

        </WeatherCardWrapper>
    )
}