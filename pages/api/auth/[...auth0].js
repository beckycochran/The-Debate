// pages/api/auth/[...auth0].js

// handleAuth() creates the following routes:

// /api/auth/login: The route used to perform login with Auth0.
// /api/auth/logout: The route used to log the user out.
// /api/auth/callback: The route Auth0 will redirect the user to after a successful login.
// /api/auth/me: The route to fetch the user profile from.

// http://localhost:3000/debate, http://localhost:3000, http://localhost:3000/api/auth/login
// http://localhost:3000/debate
// http://localhost:3000
// http://localhost:3000/api/auth/login
// http://localhost:3000/api/auth/callback



import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth();