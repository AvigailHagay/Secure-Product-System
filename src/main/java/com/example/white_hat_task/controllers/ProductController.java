package com.example.white_hat_task.controllers;

import com.example.white_hat_task.repo.Product;
import com.example.white_hat_task.services.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@RequestMapping("/api/product")
@RestController
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/get")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addProduct(@Valid @RequestBody Product product, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<String> errors = bindingResult.getAllErrors().stream()
                    .map(ObjectError::getDefaultMessage)
                    .collect(Collectors.toList());
            return ResponseEntity.badRequest().body(errors);
        }
        productService.addProduct(product);
        return ResponseEntity.ok("Product added successfully");
    }

    @GetMapping("/search/{term}")
    public List<Product> searchProduct(@PathVariable String term) throws ResponseStatusException, UnsupportedEncodingException {
        // Validate input using a regex pattern (whitelist approach)
        if (!Pattern.matches("^[a-zA-Z0-9]*$", term)) {  // This regex allows only alphanumeric characters
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid search term");
        }
        // Encode the term
        String encodedTerm = URLEncoder.encode(term, "UTF-8");

        return productService.searchProduct(encodedTerm);
    }
}
