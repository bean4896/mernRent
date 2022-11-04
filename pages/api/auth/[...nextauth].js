import NextAuth from 'next-auth';
import { SessionProvider } from "next-auth/react"
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';


export default NextAuth({
    // session
    session: {
        jwt: true,
    },

    // Configure one or more authentication providers, see https://next-auth.js.org/configuration/providers
    providers: [
        CredentialsProvider({
                
            async authorize(credentials) {

                const client = await connectToDatabase();

                const db = client.db();

                // check if user exists
                const user = await db.collection('users').findOne({ email: credentials.email });

                // If no user was found or the password is incorrect, return null
                if (!user) {
                    client.close();
                    throw new Error('No user found!');
                }
                
                // If user was found, check password
                const isValid = await verifyPassword(credentials.password, user.password);

                // If password is incorrect, return null
                if (!isValid) {
                    throw new Error('Could not log you in!');
                }

                client.close();
                return {email: user.email};
            }
        })
    ],
});