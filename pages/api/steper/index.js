// import { parseUrl } from 'query-string'
import { getSession } from "next-auth/react"

export default async (request, response) => {
    const { method, url } = request;
    const session = await getSession({ request });
    // if (session) {
    //     response.send({
    //         content:
    //             "This is protected content. You can access this content because you are signed in.",
    //     })
    // } else {
    //     response.send({
    //         error: "You must be sign in to view the protected content on this page.",
    //     })
    // }
    if (method === "GET") {
        // const { query = {} } = parseUrl(url) || {};
        return response;
    }

    if (method === "POST") {
        const { body } = request;
        data.push({ ...body, id: data.length + 1 });
        return response;
    }
}