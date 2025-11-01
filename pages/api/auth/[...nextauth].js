import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_CLIENT_KEY,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'kiwiAuth',
      credentials: {
        login: { label: 'Login', type: 'text' },
        pass: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Always throw an error for kiwiAuth
        throw new Error('Authentication failed for kiwiAuth')
      },
    }),
  ],
})
