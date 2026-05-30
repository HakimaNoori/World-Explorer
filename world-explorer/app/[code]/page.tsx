export default async function CountryDetailsPage(
    { params }: { params: { code: string } }
) {

    const res = await fetch(

        `https://restcountries.com/v3.1/alpha/${params.code}`,

        {
            cache: "no-store"
        }

    );

    const data = await res.json();

    const country = data[0];

}