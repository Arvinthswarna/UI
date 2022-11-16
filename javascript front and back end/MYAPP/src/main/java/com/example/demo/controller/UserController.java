package com.example.demo.controller;
import org.springframework.boot.context.config.ConfigData;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins="*")
public class UserController {
	@Autowired
	UserRepository userRepository;
	@PostMapping("/create")
	public ResponseEntity<User>createUser(@RequestBody User user) {
		//save into database;
		try {
			User _user= userRepository.save(new User(user.getEmail(),user.getPassword()));
			return new ResponseEntity<>(_user,HttpStatus.CREATED);
		}catch(Exception ex) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<User>> getAllUsers(){
		try {
			List<User> users = new ArrayList<User>();
			userRepository.findAll().forEach(users::add);
			if(users.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(users,HttpStatus.OK);
		}catch(Exception ex) {
			System.out.println(ex);
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
	
		
	}
	@GetMapping("/fetch_user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") long id) {
		Optional<User> userData = userRepository.findById(id);
		if (userData.isPresent()) {
			return new ResponseEntity<>(userData.get(), HttpStatus.OK);

		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}
		

	@PostMapping("/sign_in")
	public boolean validateUser(@RequestBody User user){
		User userData= userRepository.findUserByEmail(user.getEmail());
		if(user.getEmail().equals(userData.getEmail()) && user.getPassword().equals(userData.getPassword())){
			return true;
		}else{
			return false;
		}

	}
	@PostMapping("/signin")
	public String validateUserOne(@RequestBody User user){
		User userData= userRepository.findUserByEmail(user.getEmail());
		if(user.getEmail().equals(userData.getEmail()) && user.getPassword().equals(userData.getPassword())){
			return "true";
		}else{
			return "false";
		}

	}
	@PutMapping("/update_user/{id}")
	   public ResponseEntity<User> updateUser(@PathVariable("id") long id,@RequestBody User user){
		   Optional<User> userData = userRepository.findById(id);
		   if(userData.isPresent()) {
			   User _user = userData.get();
			   _user.setEmail(user.getEmail());
			   _user.setPassword(user.getPassword());
			   return new ResponseEntity<>(userRepository.save(_user),HttpStatus.OK);
		   }else {
			   return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		   }
	   }
	
	@DeleteMapping("delete_user/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable("id") long id){
		try {
			userRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}catch(Exception ex) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
