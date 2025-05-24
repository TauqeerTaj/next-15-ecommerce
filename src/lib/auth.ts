import Credentials from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        await connectToDatabase();

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user) throw new Error("No user found");

        const isValid = await bcrypt.compare(password as string, user.password);
        if (!isValid) throw new Error("Invalid password");

        return { id: user._id.toString(), email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
};
