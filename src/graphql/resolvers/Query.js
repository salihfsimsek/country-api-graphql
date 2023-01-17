export const Query = {
    //Country queries
    countries: ((_, __, { db }) => db.countries),
    country: ((_, { code }, { db }) => db.countries.find(country => country.code === code)),

    //Language queries
    languages: ((_, __, { db }) => db.languages),
    language: ((_, { code }, { db }) => db.languages.find(language => language.code === code)),

    //Continent queries
    continents: ((_, __, { db }) => db.continents),
    continent: ((_, { code }, { db }) => db.continents.find(continent => continent.code === code))
}