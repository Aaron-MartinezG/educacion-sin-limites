// Stub de autenticación — integración pendiente para QA/PROD
//
// En un ambiente real, aquí se configuraría NextAuth (Auth.js) v5:
//
//   import NextAuth from "next-auth";
//   import Credentials from "next-auth/providers/credentials";
//
//   export const { handlers, signIn, signOut, auth } = NextAuth({
//     providers: [
//       Credentials({
//         credentials: { username: {}, password: {} },
//         authorize: async (credentials) => { /* validar contra Supabase */ },
//       }),
//     ],
//   });
//
// Para este MVP, la autenticación se simula mediante AppContext.iniciarSesion()
// que inyecta un usuario hardcodeado sin validación real.
// Limitación declarada en ENVIRONMENTS.md.
export {};
