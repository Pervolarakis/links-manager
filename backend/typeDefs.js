const  { gql } = require('apollo-server-express');

const typeDefs = gql`
    type PrimaryTag {
        id: ID
        name: String!
    }

    type SubTag {
        id: ID
        name: String!
        primaryID: ID!
    }

    type Tag {
        id: ID
        name: String!
        subTagID: ID!
    }

    type Url {
        id: ID
        url: String!
        tagIdList: [ID!]
    }

    type SubTagWithTags {
        id: ID
        name: String!
        tags: [Tag]
    }

    type PrimaryBelongings {
        subTags: [SubTagWithTags]
    }

    type Query {
        getAllUrls: [Url]
        getAllPrimaryTopics: [PrimaryTag]
        getBelongingsOfPrimaryTag(id: ID): PrimaryBelongings
    }

    input SubInput {
        name: String
        primaryID: ID
    }

    input TagInput {
        name: String
        subTagID: ID
    }
    
    input UrlInput {
        url: String!
        tagIdList: [ID!]
    }

    type Mutation {
        createPrimaryTag(name: String) : PrimaryTag
        createSubTag(sub: SubInput) : SubTag
        createTag(tag: TagInput) : Tag
        createUrl(urlInput: UrlInput) : Url
    }

`
module.exports = typeDefs;