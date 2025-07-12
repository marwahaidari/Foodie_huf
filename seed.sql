TRUNCATE order_items, orders, menu_items, customers, restaurants RESTART IDENTITY CASCADE;

INSERT INTO restaurants (id, name, address) VALUES
(1, 'Herat Kabab House', 'Jada-e-Badam Bagh'),
(2, 'Shaheen Fast Food', 'Mahalla-e-Mirwais'),
(3, 'Sadaf Restaurant', 'Pol-e-Malan'),
(4, 'Kabul Darbar', 'Jada-e-Mahmudi'),
(5, 'Herat Biryani House', 'Pol-e-Bagh-e-Millat'),
(6, 'Fresh Pizza', 'Jada-e-Sarakhsi');

INSERT INTO customers (name, phone) VALUES
('Ali Azimi', '0799000001'),
('Sara Haidari', '0799000002'),
('Farhad Omid', '0799000003'),
('Maryam Esmati', '0799000004'),
('Javad Sultani', '0799000005'),
('Fatima Naseri', '0700111222'),
('Ahmad Rahimi', '0700222333');

INSERT INTO menu_items (id, restaurant_id, name, price, is_available) VALUES
(1, 1, 'Kabab-e-Chopan', 350, true),
(2, 1, 'Kofta with Naan', 250, true),
(3, 2, 'Zinger Burger', 200, true),
(4, 2, 'French Fries', 100, false),
(5, 3, 'Qabeli Palaw', 300, true),
(6, 3, 'Mantu', 280, true),
(7, 4, 'Chicken Biryani', 270, true),
(8, 4, 'Beef Korma', 320, true),
(9, 5, 'Shami Kebab', 150, true),
(10, 5, 'Aushak', 180, true),
(11, 6, 'Pepperoni Pizza', 400, true),
(12, 6, 'Veggie Pizza', 380, true);

INSERT INTO orders (id, customer_id, restaurant_id, status, created_at) VALUES
(1, 1, 1, 'pending', NOW()),
(2, 2, 2, 'completed', NOW()),
(3, 3, 3, 'pending', NOW()),
(4, 4, 4, 'completed', NOW()),
(5, 5, 5, 'pending', NOW()),
(6, 6, 6, 'pending', NOW());

INSERT INTO order_items (order_id, menu_item_id, quantity) VALUES
(1, 1, 2),
(1, 2, 1),
(2, 3, 1),
(2, 4, 3),
(3, 5, 2),
(3, 6, 1),
(4, 7, 1),
(4, 8, 2),
(5, 9, 3),
(5, 10, 2),
(6, 11, 1),
(6, 12, 2);
