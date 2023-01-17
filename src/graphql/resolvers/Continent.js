export const Continent = {
    countries: ((parent, _, { db }) => db.countries.filter(country => country.continent_code === parent.code)),
    languages: ((parent, _, { db }) => db.languages.filter(language => language.continent_code === parent.code))
}