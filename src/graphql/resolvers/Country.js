export const Country = {
    continent: ((parent, _, { db }) => db.continents.find(continent => continent.code === parent.continent_code)),
    languages: ((parent, _, { db }) => db.languages.filter(language => language.code === parent.code))
}