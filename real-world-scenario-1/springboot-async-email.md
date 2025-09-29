# 📧 Spring Boot Multithreading with @Async – Email Service Example

## 📝 What We Did
- Built a **basic Spring Boot service** to demonstrate multithreading.
- Configured a **custom ThreadPoolTaskExecutor**.
- Used `@EnableAsync` to enable async processing.
- Annotated service methods with `@Async` so they run in **separate threads**.
- Created a simple **EmailService** that simulates sending emails.
- Added a controller endpoint to trigger async email sending.

---

## ⚙️ How It Works
1. When `/api/email/send` is called, the request immediately returns a success message.
2. The email sending happens **in the background**, executed by a thread from the pool.
3. We can verify async execution by checking the **thread name prefix** in logs.
4. This pattern is useful when you don’t want your main API call to wait for heavy background tasks.

---

## 🚀 Why It’s Useful
- Keeps APIs **responsive**.
- Offloads **time-consuming tasks** like sending emails, logging, or notifications.
- Improves **scalability** by leveraging multiple threads.
