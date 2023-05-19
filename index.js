import { ApolloServer ,gql} from 'apollo-server'

const persons = [
    {
        name: "Victor",
        phone: "52342524",
        street: "Calle Grap",
        city: "Reus",
        id: "1"

    },
    {
        name: "Julian",
        phone: "52342524",
        street: "Calle SQL",
        city: "Tarragona",
        id: "2"

    },
    {
        name: "Paolo",
        phone: "52342524",
        street: "Calle NEST",
        city: "VIla-seca",
        id: "3"

    },
]


const typeDefs = gql`
    type Person{
        name: String!
        phone: String
        street: String!
        city: String!
        id: ID!
    }

    type Query {
        personCount: Int!
        allPersons:[Person]!
        findPerson(name: String!): Person
    }
`

const resolvers = {
    Query:{
        personCount: () => persons.length,
        allPersons: () => persons,
        findPerson: (root, args) =>{
            const {name} = args
            return persons.find(person => person.name === name)
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) =>{

    console.log(`Server ready at ${url}`)

}) 