# Secure Product System

This web application it's a straightforward product management system with both product input and search capabilities, while emphasizing security and user experience.

## 🛠️ Technical Stack:

### Frontend:
- **React**: Chosen for its component-based architecture and efficient DOM manipulation.
- **CSS**: Custom styling to make the UI more intuitive and appealing.
- **Bootstrap**: Incorporated for its responsive design capabilities and its wide array of UI components.

### Backend:
- **Spring**: A robust Java framework, making it easier to ensure security and develop scalable applications.

### Database:
- **MySQL**: A reliable and widely-used relational database system.

## 📝 Pages:

- **Home Page - Search Products**: The home page show all the products and allows users to search for products by name.
  ![Home](/src/main/resources/static/img_1.png)


- **Add Product**: The add product page allows users to add new products to the database.
  ![Add Product](/src/main/resources/static/img.png)

## 🌟 Features and Security Measures:

### 1. Product Input Restrictions:
- **Price**: The system only accepts positive values, ensuring valid product pricing.
- **Name**: Ensuring validity by accepting names between 3-15 characters and allowing only alphanumeric characters (a-zA-Z0-9).

### 2. Server-side Validation:
Spring's `@Valid` is utilized to validate input. This not only ensures that the application receives data adhering to its constraints but also provides an added layer of security against potentially malicious or incorrect inputs.

### 3. Search Product Page:
The product search page takes user requests via the URL. A whitelist approach is employed for input validation, reducing the risk of malicious code injections.

### 4. SQL Query Security:
By adopting parameterized SQL queries, the application mitigates SQL injection risks. For instance:

```java
public void addProduct(Product product) {
    String sql = "INSERT INTO product (name, price) VALUES (?, ?)";
    jdbcTemplate.update(sql, product.getName(), product.getPrice());
}
```

## 🚀 Getting Started:
### Initialization:

1. **Setting Up the Database**:
   ```bash
   mysql -u yourUsername -p
   ```
   After logging in, create the products database:
   ```sql
   CREATE DATABASE products;
   ```
2. **Navigate to the React project folder and install dependencies**:
   ```bash
   cd my-app
   npm install
   ```
   **To run the React frontend**:
    ```bash
    npm start
    ```
3. **Build Gradle project**:
   ```bash
   ./gradlew build
   ```
   **To run the Spring backend**:
   ```bash
   ./gradlew bootRun
   ```
Now, the application should be running. Access the frontend via http://localhost:3000 and the backend API on http://localhost:8080.

