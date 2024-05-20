This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started MacDonald's Take Home

This project is building using app route ( the new way to handle the routes of NextJS), also I got the knowledge to handle the routes with pages.

First, run the development server:
```bash

yarn install
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) Important keep this port 

## Tech Details
- TypeScript: Use interfaces and types
- NextJS
- useReducer - State Management Cart
- createContext - to handle in the full app the data
- Jest and RTL - Unit Test

## Project Structure

-src
-- app
---- api
----- products - Call API data
---- cart - View
---- confirmation - View
---- details/[slug] - Product Details View (Dynamic Route)
---- app.tsx - Home View
-- components
---- BackButton.tsx
---- BuyProduct.tsx 
---- Card.tsx
---- DetailsProduct.tsx
---- Footer.tsx
---- NavBar.tsx
-- middleware - Call from client-side to server-side
-- test - Unit test
-- utils 
--- context - Handle Cart data in the entire app
--- store - useReducer to handle the state
--- interfaces.tsx - Organize all the interfaces and types


## You'll see the following Views

- Home - Menu - Navbar

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/home.png)



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
