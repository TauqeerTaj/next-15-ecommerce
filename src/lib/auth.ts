// import Credentials from "next-auth/providers/credentials";
// import { NextAuthConfig } from "next-auth";
// import { connectToDatabase } from "@/lib/db";
// import { User } from "@/models/User";
// import bcrypt from "bcryptjs";

// export const authConfig: NextAuthConfig = {
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         await connectToDatabase();

//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing credentials");
//         }

//         const { email, password } = credentials;
//         const user = await User.findOne({ email });
//         if (!user) throw new Error("No user found");

//         const isValid = await bcrypt.compare(password as string, user.password);
//         if (!isValid) throw new Error("Invalid password");

//         return { id: user._id.toString(), email: user.email };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   session: {
//     strategy: "jwt",
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token && session.user) {
//         session.user.id = token.id as string;
//         session.user.email = token.email as string;
//       }
//       return session;
//     },
//   },
// };

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/db";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        await connectToDatabase();

        let user = null;

        user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found");

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );
        if (!isValid) throw new Error("Invalid password");

        return {
          email: user.email,
          password: user.password,
        };
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
});
