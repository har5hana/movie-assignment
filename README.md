# MovieHub — React Integrated Learning Exercise

A Netflix-style movie discovery SPA built from the supplied MovieHub assignment.

## Included
- 30 supplied movies in `src/data/movies.js`
- Home page with hero, Popular Movies (rating >= 8.3) and latest releases
- Movies page with controlled search and genre filtering
- Add Movie controlled form with client-side validation
- Dynamic movie details at `/movies/:id`
- Trailer iframe and movie metadata
- About page
- Reusable Navbar, Footer, MovieCard, Section and SearchForm components
- React Router navigation
- Serverless Hello World function at `api/hello.js`
- Responsive dark styling

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build check

```bash
npm run build
```

## Serverless endpoint

`api/hello.js` is included in the assignment's required structure. It returns:

```json
{"message":"Hello from MovieHub API"}
```

For the serverless function to run as `/api/hello`, deploy the project to a serverless platform such as Vercel or run it through a compatible local serverless development environment.
