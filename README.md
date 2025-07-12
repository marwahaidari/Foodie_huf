# 🍔 Foodie Hub – Backend API

A simple backend API for an online food ordering system for restaurants.  
This system allows users to:

- View restaurants and their menus  
- Register customers  
- Place food orders  
- Track and update order status

---

## 📦 Technologies Used

- Node.js + Express  
- PostgreSQL (with `pg` library)  
- Raw SQL (no ORM)  
- MVC architecture  
- No authentication/login required  

---

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install

First, create a PostgreSQL database named foodiehub. Then run the schema:

psql -U your_user -d foodiehub -f ./db/schema.sql
Replace your_user with your PostgreSQL username.

 Seed Sample Data (optional)

psql -U your_user -d foodiehub -f ./db/seed.sql

This will populate the database with restaurants, menu items, customers, and sample orders.


Start the Server:
npm run dev

Server runs at:
http://localhost:3000



 Database Schema
Table	Description
restaurants	Restaurant info (name, address)
menu_items	Menu items for each restaurant
customers	Customer info (name, phone number)
orders	Orders placed by customers
order_items	Items within each order (many-to-many link)


API Endpoints
🏪 Restaurants
GET /restaurants – Get all restaurants

GET /restaurants/:id – Get a specific restaurant

POST /restaurants – Add a new restaurant

PUT /restaurants/:id – Update restaurant info

DELETE /restaurants/:id – Delete a restaurant

🍽️ Menu Items
GET /restaurants/:id/menu – Get all menu items for a restaurant

POST /restaurants/:id/menu – Add a new menu item

PUT /menu/:id – Update a menu item

DELETE /menu/:id – Delete a menu item

👤 Customers
GET /customers – Get all customers

POST /customers – Add a new customer

PUT /customers/:id – Update customer info

DELETE /customers/:id – Delete a customer

🛒 Orders
GET /orders – Get all orders

POST /orders – Create a new order

GET /customers/:id/orders – Get orders by a specific customer

GET /restaurant/:id/orders – Get orders for a restaurant (optional)

PUT /orders/:id/status – Update order status

DELETE /orders/:id – Cancel/delete an order


 Example: Create Order
POST /orders
Content-Type: application/json

{
  "customer_id": 1,
  "restaurant_id": 2,
  "items": [
    { "menu_item_id": 5, "quantity": 2 },
    { "menu_item_id": 6, "quantity": 1 }
  ]
}

Bonus Endpoints (Optional)
GET /orders?status=pending – Filter orders by status

GET /popular-menu-items – Get top-selling menu items

✅ Notes
No login/authentication is required

All request and response bodies use JSON

Designed using RESTful API principles

Public API – suitable for frontend or Postman testing

