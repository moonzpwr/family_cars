import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
        }),
    ],
    jwt: {
        encryption: true
    },
    secret: "secret token",
    debug: false
}

export default (req, res) => NextAuth(req, res, options)