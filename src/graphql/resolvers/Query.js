export const Query = {
    //Country queries
    countries: ((_, __, { db }) => {
        return Object.entries(db.countries)
            .map(([code, country]) => {
                return {
                    ...country,
                    code
                }
            })
    }),
    country: ((_, { code }, { db }) => {
        const country = db.countries[code]

        if (!country) return null

        return {
            ...country,
            code
        }
    }),

    //Language queries
    languages: ((_, __, { db }) => {
        return Object.entries(db.languages)
            .map(([code, language]) => {
                return {
                    ...language,
                    code
                }
            })
    }),
    language: ((_, { code }, { db }) => {
        const language = db.languages[code]

        if (!language) return null

        return {
            ...language,
            code
        }
    }),

    //Continent queries
    continents: (_, __, { db }) =>
        Object.entries(db.continents)
            .map(([code, name]) => ({
                code,
                name,
            })),
    continent: ((_, { code }, { db }) => {
        const continentName = db.continents[code]

        if (!continentName) return null

        return {
            code,
            name: continentName
        }
    })
}