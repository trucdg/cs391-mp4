
// app/[city]/page.tsx
"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "@/components/weatherCard";
import styled from "styled-components";
import { Weather } from "../interfaces/weather";

const CityName = styled.h1`
    text-align: center;
    font-size: 2.5rem; 
    color: #D81B60;  
    margin-top: 1rem;
    text-transform: capitalize;
    font-weight: bold;
    letter-spacing: 1.5px;

    @media screen and (max-width: 768px) {
        font-size: 2rem; 
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const WeatherContentWrapper = styled.main`
    width: 90vw;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 1.5rem;
    background-color: #F8BBD0; 
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 1rem; 
    }
`;

const WeatherCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
    padding: 1rem;
    border: 3px solid #EC407A; 
    border-radius: 10px;
    background-color: #FCE4EC; 
    width: 80%;
    margin: auto;

    @media screen and (max-width: 768px) {
        gap: 0.5rem; 
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr; 
    }
`;


export default function CityPage() {
    const params = useParams();

    // console.log("inside page.tsx");
    // console.log("inside page.tsx");
    // console.log(params);

    // Fetch weather data with SWR
    const {data, error} = useSWR(`/api/getWeatherData?city=${params.city}`, (url) => fetch(url).then((res) => res.json())
    );

    console.log(data);

    // Handle error and loading states
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading ... </div>;

    // If there is data, get the days otherwise an empty array
    const days = data?.days || [];

    return (
        <WeatherContentWrapper>
            <CityName>{params.city}</CityName>
            <WeatherCardsContainer>
                {
                    days.map((weather: Weather, i:number) =>
                        (
                            <WeatherCard
                                key={i}
                                datetime={weather.datetime}
                                conditions={weather.conditions}
                                description={weather.description}
                                tempmin={weather.tempmin}
                                tempmax={weather.tempmax}
                            />
                        )
                    )
                }
            </WeatherCardsContainer>

        </WeatherContentWrapper>
    )
}




