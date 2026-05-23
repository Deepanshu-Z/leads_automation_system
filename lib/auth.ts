import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from "@/lib/prisma";

import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {},

        password: {},
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const agent = await prisma.agent.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!agent) {
          return null;
        }

        const valid = await bcrypt.compare(
          credentials.password,

          agent.passwordHash,
        );

        if (!valid) {
          return null;
        }

        return {
          id: String(agent.id),

          name: agent.name,

          email: agent.email,

          role: agent.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // ← use your custom page, not NextAuth's default
  },
  session: {
    strategy: "jwt" as const,
  },

  callbacks: {
    async jwt({
      token,

      user,
    }: any) {
      if (user) {
        token.role = user.role;

        token.id = user.id;
      }

      return token;
    },

    async session({
      session,

      token,
    }: any) {
      session.user.id = token.id;

      session.user.role = token.role;

      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
