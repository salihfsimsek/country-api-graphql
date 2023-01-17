export const Language = {
    countries: ((parent, _, { db }) => db.countries.filter(country => country.code === parent.code))
}