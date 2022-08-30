// // DEMO 

// API routes provide a solution to build your API with Next.js.

// Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.

// For example, the following API route pages/api/user.js returns a json response with a status code of 200:

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
