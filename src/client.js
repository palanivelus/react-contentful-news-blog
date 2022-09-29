import * as contentful from 'contentful'

export const client = contentful.createClient({
    space: 'xxxxx', //TODO: update value
    accessToken: 'xxxxxx' //TODO: update value
})