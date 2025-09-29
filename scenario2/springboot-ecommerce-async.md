# 🏪 Spring Boot E-Commerce Project with JPA, DTO, and Multithreading

## 📝 What We Did
- Designed a **mini e-commerce system** with entities:
  - `Customer` → One-to-Many `Orders`
  - `Order` → Many-to-One `Customer`, One-to-Many `OrderItems`
  - `OrderItem` → Many-to-One `Order`, Many-to-One `Product`
  - `Product` → One-to-Many `OrderItems`
- Created **DTOs** for:
  - Accepting order requests (`OrderRequestDTO`)
  - Returning responses (`OrderResponseDTO`)
- Built services for:
  - **Saving orders** with JPA.
  - **Sending confirmation emails** asynchronously.
  - **Generating invoices** asynchronously using `CompletableFuture`.
- Used a **custom ThreadPoolTaskExecutor** for async tasks.

---

## ⚙️ How It Works
1. User calls `POST /orders/place` with customer and product details.
2. The system:
   - Validates customer and products using JPA repositories.
   - Saves the order and related items into the database.
   - Immediately returns an `OrderResponseDTO` (so the client doesn’t wait).
3. In the background:
   - `EmailService` sends a confirmation email asynchronously.
   - `InvoiceService` generates an invoice asynchronously.
4. Both async tasks run on a thread pool (`Ecom-Async-*`).

---

## 🚀 Why It’s Useful
- Demonstrates **real-world usage** of:
  - **JPA relationships** (`OneToMany`, `ManyToOne`, etc.).
  - **DTOs** for clean API input/output.
  - **@Async multithreading** for non-blocking operations.
- Keeps API **fast and user-friendly** while heavy tasks run behind the scenes.
- Mirrors actual **e-commerce workflows**: order placement, notification, and invoice handling.

---

## 🌟 Key Takeaways
- You don’t need to manually manage `Thread` or `Runnable` in Spring Boot.
- With `@Async`, Spring handles multithreading internally using thread pools.
- Combine **JPA + DTO + @Async** for production-grade, scalable applications.
