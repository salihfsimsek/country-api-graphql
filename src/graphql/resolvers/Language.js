export const Language = {
    countries: ((parent, _, { db }) => {
        //List of countries that speak the language
        let countries = []

        Object.entries(db.countries).forEach(([code, country]) => {
            if (country.languages.includes(parent.code)) {
                countries.push({
                    ...country,
                    code
                })
            }
        })

        return countries
    })
}