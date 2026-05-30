import React from "react";
import CountrySearch from "@/components/CountrySearch";

export default async function SearchPage() {

    const res = await fetch(
        "https://restcountries.com/v3.1/all"
    );

    const countries =
        await res.json();

    const CountrySearchComponent = (CountrySearch as unknown) as React.ComponentType<{
        countries: any;
    }>;

    return (

        <CountrySearchComponent
            countries={countries}
        />

    );

}