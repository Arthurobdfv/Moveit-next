import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    site: process.env.SITE,
    providers: [
        Providers.Google({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
          signinUrl: `${process.env.SITE}/api/auth/signin/google`,
          callbackUrl: `${process.env.SITE}/api/auth/callback/google`,
        }),
    ],
    database:''

}

export default (req, res) => NextAuth(req, res, options);