export const authConfig = {
  pages: { signIn: "/login" },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        token.count = user.count;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
        session.user.count = token.count;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isonAdminPage = request.nextUrl?.pathname.startsWith("/admin");
      const isonLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isonVotingPage =
        request.nextUrl?.pathname.startsWith("/dashboard/Voting");
      if (isonAdminPage && !user?.isAdmin) {
        return false;
      }
      if (isonLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      if (isonVotingPage && !user) {
        return false;
      }
      if (isonVotingPage && user.count >= 1) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
};
