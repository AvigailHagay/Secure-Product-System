package com.example.services;
import com.example.repo.Product;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final JdbcTemplate jdbcTemplate;

    public ProductService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public void addProduct(Product product) {
        String sql = "INSERT INTO product (name, price) " +
                "VALUES (?, ?)";

        jdbcTemplate.update(sql,
                product.getName(),
                product.getPrice());
    }

    public List<Product> searchProduct(String term) {
        String sql = "SELECT * FROM product WHERE name LIKE ?";

        return jdbcTemplate.query(
                sql,
                new Object[]{"%" + term + "%"},
                (rs, rowNum) ->
                        new Product(
                                rs.getInt("id"),
                                rs.getString("name"),
                                rs.getDouble("price")
                        )
        );
    }

    public List<Product> getAllProducts() {
        String sql = "SELECT * FROM product";

        return jdbcTemplate.query(
                sql,
                (rs, rowNum) ->
                        new Product(
                                rs.getInt("id"),
                                rs.getString("name"),
                                rs.getDouble("price")
                        )
        );
    }
}
