import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT


export const getNews = async () => {
    const query = gql`
        query {
            article {
                id
                title
                published_at
                image {
                    id
                }
                tags {
                    tag_id {
                        name
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query)
    return result.article
}


export const getNewsDetails = async (id) => {
    const query = gql`
        query {
            article_by_id(id: ${id}) {
                id
                title
                body
                published_at
                categories {
                    category_id {
                        name
                    }
                }
                image {
                    id
                }
                tags {
                    tag_id {
                        name
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query)
    return result.article_by_id
}