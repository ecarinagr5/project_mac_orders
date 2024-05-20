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


### Project Structure

.. code-block:: raw
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

project_name
├── docs
│   ├── make.bat
│   ├── Makefile
│   └── source
│       ├── conf.py
│       └── index.rst
├── examples
│   └── example.py
├── src
│   └── package_name
│       └── __init__.py
├── tests
│   └── __init__.py
├── .gitignore
├── LICENSE.txt
├── MANIFEST.in
├── README.rst
├── requirements.txt
├── setup.cfg
├── setup.py
└── tox.ini

## You'll see the following Views

- Home - Menu - Navbar

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/home.png)

-  Product Details 

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/details.png)

-  Shopping Cart

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/shopingcart.png)

- Order confirmation

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/orderconfirmation.png)
- footer

![Alt text](https://github.com/ecarinagr5/project_mac_orders/blob/main/images/footer.png)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
