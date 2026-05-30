# 🚀 PRISMA ORM

A complete Prisma ORM learning and implementation project that demonstrates modern database management, schema modeling, migrations, and type-safe database operations using Prisma with Node.js and TypeScript.

This project helps developers understand how Prisma simplifies database interactions by providing an intuitive schema system, automated migrations, and a fully type-safe query builder. Prisma ORM is widely used for building scalable backend applications with PostgreSQL, MySQL, MongoDB, SQLite, and other databases.

---

# ✨ Features

* 🗄️ Database Modeling with Prisma Schema
* ⚡ Type-Safe Database Queries
* 🔄 Database Migrations
* 📦 Prisma Client Integration
* 🧠 Auto-Generated Types
* 🔍 CRUD Operations
* 🚀 High Developer Productivity
* 📊 Relational Database Management
* 🔐 Structured Data Handling
* 🌐 Modern Backend Development Workflow

---

# 🛠️ Tech Stack

### Backend

* Node.js
* TypeScript
* Prisma ORM
* Express.js

### Database

* PostgreSQL
* MySQL
* SQLite
* MongoDB

### Development Tools

* Prisma Client
* Prisma Migrate
* Prisma Studio
* Environment Variables

Prisma provides an auto-generated type-safe client, migration system, and database visualization tools that improve the developer experience.

---

# 📂 Project Structure

```bash
PRISMA-ORM/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── utils/
│
├── package.json
├── tsconfig.json
├── .env
├── README.md
└── server.ts
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/Pranshu51/PRISMA-ORM.git

cd PRISMA-ORM
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL="your_database_connection_string"
```

Example:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/prisma_db"
```

---

## 4. Initialize Prisma

```bash
npx prisma init
```

Prisma creates a schema file where database models and configurations are defined.

---

## 5. Run Migrations

```bash
npx prisma migrate dev --name init
```

This creates database tables based on the Prisma schema.

---

## 6. Generate Prisma Client

```bash
npx prisma generate
```

Prisma Client is automatically generated and provides fully type-safe database queries.

---

## 7. Start Application

```bash
npm run dev
```

---

# 📖 Prisma Schema Example

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```

Prisma uses a schema-driven approach where models define the structure of database tables and relationships.

---

# 🔥 CRUD Operations

## Create Data

```typescript
const user = await prisma.user.create({
  data: {
    name: "Pranshu",
    email: "pranshu@example.com",
  },
});
```

---

## Read Data

```typescript
const users = await prisma.user.findMany();
```

---

## Update Data

```typescript
await prisma.user.update({
  where: { id: 1 },
  data: { name: "Updated Name" },
});
```

---

## Delete Data

```typescript
await prisma.user.delete({
  where: { id: 1 },
});
```

---

# 📊 Prisma Workflow

```text
Database Schema
        ↓
Prisma Schema
        ↓
Migration Generation
        ↓
Database Update
        ↓
Prisma Client Generation
        ↓
Type-Safe Queries
        ↓
Application Development
```

---

# 🧠 Why Prisma ORM?

Prisma offers:

* Type Safety
* Auto-Completion
* Migration Management
* Better Developer Experience
* Simplified Database Queries
* Strong TypeScript Integration

Prisma is designed to make database development easier and more maintainable for modern applications.

---

# 📸 Screenshots

Add screenshots here.

```md
![Prisma Studio](assets/prisma-studio.png)

![Schema Example](assets/schema.png)

![Database Records](assets/database.png)
```

---

# 🌟 Key Concepts Covered

* Prisma Schema
* Prisma Client
* Database Relations
* CRUD Operations
* Migrations
* Database Seeding
* Type-Safe Queries
* Connection Management
* ORM Fundamentals

---

# 🎯 Learning Outcomes

After completing this project, developers will understand:

* Modern ORM Architecture
* Type-Safe Database Development
* Backend Database Integration
* Migration Workflows
* Relational Data Modeling
* Prisma Client Usage

---

# 🔥 Future Enhancements

* 🔐 Authentication System
* 👥 User Management
* 📊 Admin Dashboard
* 🌐 REST API Integration
* ⚡ GraphQL Support
* ☁️ Cloud Database Deployment
* 🧪 Testing Integration
* 📈 Query Optimization

---

# 🤝 Contributing

Contributions are welcome.

### Fork Repository

```bash
git clone https://github.com/Pranshu51/PRISMA-ORM.git
```

### Create Branch

```bash
git checkout -b feature-name
```

### Commit Changes

```bash
git commit -m "Added new feature"
```

### Push Changes

```bash
git push origin feature-name
```

### Open Pull Request

Submit your pull request for review.

---

# ⭐ Support

If you found this project useful:

* ⭐ Star the repository
* 🍴 Fork the project
* 📢 Share it with others

---

# 👨‍💻 Author

**Pranshu Tiwari**

GitHub: https://github.com/Pranshu51

Repository: https://github.com/Pranshu51/PRISMA-ORM

---

# 📜 License

This project is licensed under the MIT License.

---

# 🚀 Simplifying Database Development with Prisma ORM and Type-Safe Queries.
