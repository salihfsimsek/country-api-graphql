
export const Continent = {
    countries: ((parent, __, { db }) => {
        //First we get the entries of the countries object
        //Then we filter the entries to only get the ones that match the continent code
        //Then we map the entries to return the country object with the code added
        return Object.entries(db.countries).filter((entry) => entry[1].continent === parent.code)
            .map(([code, country]) => {
                return {
                    ...country,
                    code
                }
            })
    })
}