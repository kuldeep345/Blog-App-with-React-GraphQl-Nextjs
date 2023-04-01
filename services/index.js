import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRPAHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }  
                }
            }
        }
    `;

    const results = await request(graphqlAPI, query)

    return results.postsConnection.edges
}

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug:String!) {
              post(where:{slug:$slug}){
                author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
                content {
                    raw
                }
              }         
            }
    `;

    const results = await request(graphqlAPI, query , { slug })

    return results.post
}


export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails(){
            posts(
                orderBy:createdAt_ASC
                last:3
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query)

    return result.posts;
}

export const getSimilarPosts = async (category , slug) => {
    const query = gql`
        query GetPostDetails($slug:String!, $categories:[String!]){
            posts(
                where:{ slug_not:$slug , AND:{categories_some:{ slug_in:$categories }}}
                last:3
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query , {category , slug})
    return result.posts
}

export const getCategories = async () => {
    const query = gql`
        query getCategories {
            categories {
                name
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.categories
}