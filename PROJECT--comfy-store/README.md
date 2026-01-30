# Comfy Store

A modern, full-featured e-commerce application built with React, Redux, and Tailwind CSS. Comfy Store is a furniture shopping platform with advanced filtering, cart management, user authentication, and order tracking capabilities.

## Features

### Core Shopping Features
- **Product Browsing**: Browse featured products and search through a complete product catalog
- **Advanced Filtering**: Filter products by category, color, company, and price range
- **Product Details**: View detailed information about individual products
- **Shopping Cart**: Add/remove items, adjust quantities, and see real-time cart totals
- **Checkout**: Secure checkout form with user information collection
- **Order Management**: View order history and track past purchases

### User Features
- **User Authentication**: Register and login system for personalized shopping
- **Order History**: Track all previous orders with order details
- **Cart Persistence**: Cart items are persisted using Redux
- **Responsive Design**: Mobile-friendly interface that works on all devices

### Technical Features
- **State Management**: Redux Toolkit for predictable state management
- **API Integration**: Axios with React Query for efficient server communication
- **Real-time Data Fetching**: React Query for caching and synchronization
- **Client-side Routing**: React Router for seamless page navigation
- **Form Handling**: Custom form components with validation
- **Notifications**: Toast notifications for user feedback
- **Pagination**: Browse products with built-in pagination
- **Theme Support**: DaisyUI theming system

## Tech Stack

### Frontend
- **React 19**: UI library
- **React Router DOM 7**: Client-side routing
- **Redux Toolkit**: State management
- **React Redux**: Redux bindings for React
- **React Query**: Data fetching and caching

### Styling
- **Tailwind CSS 4**: Utility-first CSS framework
- **DaisyUI**: Tailwind component library
- **React Icons**: Icon library

### Tools
- **Vite**: Fast build tool and development server
- **Axios**: HTTP client for API requests
- **React Toastify**: Toast notifications
- **Day.js**: Date manipulation library
- **ESLint**: Code linting

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PROJECT--comfy-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── pages/              # Page components (Landing, Products, Cart, etc.)
├── components/         # Reusable components
│   ├── Navbar.jsx
│   ├── CartItem.jsx
│   ├── ProductsGrid.jsx
│   ├── Filters.jsx
│   └── ...
├── features/           # Redux slices
│   ├── cart/
│   └── user/
├── assets/             # Static assets
├── App.jsx             # Main app component with routing
├── store.js            # Redux store configuration
├── data.js             # Mock data
├── utils/              # Utility functions
└── main.jsx            # Application entry point
```

## Key Components

### Pages
- **Landing**: Homepage with featured products
- **Products**: Full product catalog with filters and pagination
- **SingleProduct**: Detailed product view
- **Cart**: Shopping cart with item management
- **Checkout**: Order review and payment form
- **Orders**: User order history
- **Login/Register**: User authentication pages
- **About**: About page

### Components
- **Navbar**: Navigation header with user menu
- **Filters**: Advanced product filtering
- **ProductsGrid/ProductsList**: Product display layouts
- **CartTotals**: Cart summary and totals
- **CheckoutForm**: Order submission form
- **PaginationContainer**: Product list pagination

## State Management

### Redux Slices
- **cart**: Manages shopping cart state (items, totals)
- **user**: Manages user authentication state

## API Integration

The application uses React Query for server communication with features like:
- Automatic caching
- Request deduplication
- Stale data management
- Devtools for debugging (`npm run dev` includes React Query Devtools)

## Styling

The project uses:
- **Tailwind CSS 4** with custom configuration
- **DaisyUI** theme system (current theme: Dracula)
- Responsive design patterns for mobile, tablet, and desktop
- CSS modules where needed

To change themes, modify the `data-theme` attribute in [index.html](index.html#L2)

## Future Enhancements

- Payment gateway integration
- Product reviews and ratings
- Wishlist functionality
- Advanced search capabilities
- Email notifications
- Admin dashboard

