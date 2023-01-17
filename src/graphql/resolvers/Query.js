export const Query = {
    //Country queries
    countries: ((_, __, { db }) => db.countries),
    country: ((_, { code }, { db }) => db.countries.find(country => country.code === code))
}