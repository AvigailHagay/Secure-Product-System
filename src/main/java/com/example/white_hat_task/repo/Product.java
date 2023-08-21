package com.example.white_hat_task.repo;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotEmpty(message = "The name of the product is mandatory")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "The name of the product must be alphanumeric")
    @Size(max = 15, min = 3, message = "The name of the product must be between 3 and 15 characters")
    private String name;

    @NotNull(message = "The price of the product is mandatory")
    @Positive(message = "The price of the product must be positive")
    private Double price;

    public Product() {}
    public Product(Integer Id, String name, Double price) {
        this.id = Id;
        this.name = name;
        this.price = price;
    }
    public Integer getId() { return id; }
    public String getName() { return name; }
    public Double getPrice() { return price; }
    public void setId(Integer id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setPrice(Double price) { this.price = price; }

}
