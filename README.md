# 🛒 NexShop — Full-Stack E-Commerce Platform (MERN)

> ✅ **Live Store:** [nexshop-frontend.vercel.app](https://nexshop-frontend.vercel.app)  
> 🛠️ **Admin Panel:** [nexshop-admin.vercel.app](https://nexshop-admin.vercel.app)

**NexShop** is a feature-rich, full-stack e-commerce web application built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. It includes a clean, responsive customer-facing store and a dedicated admin dashboard — deployed independently to simulate real-world modular architecture.

---

## ✨ Features

### 🧑‍💻 Customer App
- 🛍️ Browse products with search functionality
- 🛒 Add to cart, update quantity, and checkout
- 🔐 Secure authentication (login/register)
- 🚚 Shipping form and order placement
- 📦 View order history and statuses

### 🛠️ Admin Dashboard
- ➕ Add/edit/delete products
- 📋 View and manage all placed orders
- 👤 Manage registered users
- 📊 Dashboard for quick overview

---

## ⚙️ Tech Stack

| Layer         | Tools                             |
|--------------|------------------------------------|
| Frontend     | React 18, TypeScript, Tailwind CSS / Bootstrap |
| Backend      | Node.js, Express.js                |
| Database     | MongoDB Atlas                      |
| Auth & Roles | JWT, Role-based Access Control     |
| Deployment   | Vercel (Frontend & Admin), Render/Railway (Backend) |

---

## 🚀 Deployment Architecture

- **Frontend (User):** [`nexshop-frontend.vercel.app`](https://nexshop-frontend.vercel.app)
- **Admin Panel:** [`nexshop-admin.vercel.app`](https://nexshop-admin.vercel.app)
- **Backend:** Securely deployed and connected (URL not publicly exposed)

---

## 🧠 What I Learned

- Built a real-world full-stack app from scratch
- Designed and deployed separate frontend & admin portals
- Implemented JWT auth with protected routes
- Gained hands-on experience with MERN stack architecture
- Improved UI/UX design skills for responsive interfaces

---

## 📦 Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/nexshop.git
cd nexshop

# Setup backend
cd backend
npm install
npm run dev

# Setup frontend
cd ../frontend
npm install
npm start

# Setup admin panel
cd ../admin
npm install
npm start
