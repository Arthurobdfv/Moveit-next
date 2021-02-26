import NextAuth, { InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    site: process.env.NEXT_PUBLIC_SITE,
    providers: [
        Providers.Google({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
    database:''

}

export default (req, res) => NextAuth(req, res, options);