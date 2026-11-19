# E-Commerce Backend

A secure, robust Express.js & MySQL RESTful API for e-commerce applications.

## Setup Instructions
1. Clone repository and install dependencies: `npm install`
2. Copy `.env.example` to `.env` and configure your MySQL database credentials.
3. Run database migrations using the provided `src/database/schema.sql`.
4. Start development server: `npm run dev`

## API Endpoints
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - User login
- GET `/api/products` - List products
- POST `/api/products` - Create product (Admin)
- GET `/api/cart` - View cart
- POST `/api/orders` - Place order
- POST `/api/payments` - Process payment
