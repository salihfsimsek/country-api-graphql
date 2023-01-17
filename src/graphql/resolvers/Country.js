export const Country = {
    continent: (({ continent }, _, { db }) => {
        const continentName = db.continents[continent]
        return {
            code: continent,
            name: continentName
        }
    }),
    languages: ((parent, _, { db }) => {
        let languages = parent.languages.map(code => {
            const language = db.languages[code];
            return {
                ...language,
                code,
            };
        })
        return languages
    })
}