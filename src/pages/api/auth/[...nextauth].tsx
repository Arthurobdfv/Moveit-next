import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    site: process.env.VERCEL_URL,
    providers: [
        Providers.Google({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
    database:''

}

export default (req, res) => NextAuth(req, res, options);