This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started MacDonald's Take Home

This project is building using app route ( the new way to handle the routes of NextJS), also I got the knowledge to handle the routes with pages.

## Features

- Menu Products
- Page Details of each product with Dinamyc Route
- Add Product (1 or more products)
- Remove Product
- Pay Order - Confirmation View
- Button New Order to clean Store or State Management
- UseReducer to Shopping Cart
- Signin Context and NavBar with username (It's open to any user in order you can see the functionality)
- Testing e2e of views with Playwright
- Components
- Settings in next.config.js
- Structure of commits


## Run the project
```bash

yarn install
yarn dev

```
## .env with Port 3000
Open [http://localhost:3000](http://localhost:3000) Important keep this port 

## Tech Details
- TypeScript: Use interfaces and types
- NextJS
- useReducer - State Management Cart
- createContext - to handle in the full app the data
- Jest and RTL - Unit Test


### Project Structure

```
project-root/
│
├── README.md
├── src/
│ ├── app
│ ├─── api
│ │ ├── products
│ └─── cart - Cart view with all producs
│ └─── confirmation - Confirmation once the payment is acepted View
│ └─── details/[slug]  - Product Details View (Dynamic Route)
│ └─── auth/signin - Signin you can use any user, it's a demo
│ └─── page.tsx  - Home View
├── components
│ └── BackButton.tsx
│ └── BuyProduct.tsx 
│ └── Card.tsx
│ └── DetailsProduct.tsx
│ └── Footer.tsx
│ └── NavBar.tsx
├── middleware  - Call from client-side to server-side
├── test - Unit test
├── utils
│ └─── context - Handle Cart data in the entire app
│ └─── store  - useReducer to handle the state
│ └─── interfaces  - Organize all the interfaces and types
└── LICENSE
```


## You'll see the following Views

- Home - Menu - Navbar

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/home.png)

-  Product Details 

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/details.png)

-  Shopping Cart

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/shopingcart.png)

- Order confirmation

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/orderconfirmation.png)

- Signin

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/Signin.png)

- footer

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/footer.png)


## Testing

I added some test e2e, you'll see the commands in package.json

```
    "test":"npx playwright test",
    "test:interactive":"playwright test --ui"

```


![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/playwrighttest.png)

## ENV VARS
NEXT_PUBLIC_BASE_PATH:http://localhost:3000


