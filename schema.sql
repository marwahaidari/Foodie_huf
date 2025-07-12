-- جدول رستوران‌ها
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT,
  phone TEXT
);

-- جدول آیتم‌های منو
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  is_available BOOLEAN DEFAULT TRUE
);

-- جدول مشتری‌ها
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL
);

-- جدول سفارش‌ها
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id) ON DELETE SET NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول آیتم‌های داخل سفارش
CREATE TABLE order_items (
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE SET NULL,
  quantity INTEGER NOT NULL,
  PRIMARY KEY (order_id, menu_item_id)
);
