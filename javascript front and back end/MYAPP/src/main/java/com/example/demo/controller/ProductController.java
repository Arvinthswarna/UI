package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Product;

import com.example.demo.repository.ProductRepository;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins="*")
public class ProductController {
	@Autowired
	ProductRepository productRepository;
	
	@PostMapping("/create")
	public ResponseEntity<Product> createProduct(@RequestBody Product product) {
		//save into database;
		try {
			Product _product= productRepository.save(new Product(product.getProductName(),product.getProductQty()));
			return new ResponseEntity<>(_product,HttpStatus.CREATED);
		}catch(Exception ex) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Product>> getAllProducts(){
		try {
			List<Product> products = new ArrayList<Product>();
			productRepository.findAll().forEach(products::add);
			if(products.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(products,HttpStatus.OK);
		}catch(Exception ex) {
			System.out.println(ex);
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
	}
	@GetMapping("/fetch_product/{productId}")
	public ResponseEntity<Product> getUserById(@PathVariable("productId") long productId){
		Optional<Product> productData = productRepository.findById(productId);
		if(productData.isPresent()) {
			return new ResponseEntity<>(productData.get(),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@PutMapping("/update_product/{productId}")
	   public ResponseEntity<Product> updateUser(@PathVariable("productId") long productId,@RequestBody Product product){
		   Optional<Product> productData = productRepository.findById(productId);
		   if(productData.isPresent()) {
			   Product _product = productData.get();
			   _product.setProductName(product.getProductName());
			   return new ResponseEntity<>(productRepository.save(_product),HttpStatus.OK);
		   }else {
			   return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		   }
	   }
	@DeleteMapping("delete_product/{productId}")
	public ResponseEntity<Product> deleteUser(@PathVariable("productId") long productId){
		try {
			productRepository.deleteById(productId);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}catch(Exception ex) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
