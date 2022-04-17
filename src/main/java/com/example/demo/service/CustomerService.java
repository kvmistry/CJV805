package com.example.demo.service;

import javax.websocket.server.ServerEndpoint;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.document.Customer;
import com.example.demo.document.Login;
import com.example.demo.repo.CustomerRepo;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class CustomerService {
	@Autowired
	CustomerRepo custRepo;
	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	public Customer setCustomerDetails(Customer customer) {
		if ((customer.getEmail() != null && customer.getEmail() != "")
				&& (customer.getPassword() != null && customer.getPassword() != "")) {
			if (customer.getEmail().contains("@")
					&& (customer.getPassword().length() >= 6 && customer.getPassword().length() <= 20)) {
				String encrypted = encoder.encode(customer.getPassword());
				customer.setPassword(encrypted);
				return custRepo.save(customer);
			}
		}
		return new Customer();
	}

	public Customer getCustomerByEmail(Login login) {

		Optional<Customer> customer = custRepo.findByEmail(login.getEmail());
		if (customer.isPresent()) {
			if (encoder.matches(login.getPassword(), customer.get().getPassword())) {
				return customer.get();
			} else {
				return new Customer();
			}
		} else {
			return new Customer();
		}
	}

	public Customer getCustomerById(String id) {
		Optional<Customer> customer = custRepo.findById(id);
		if (customer.isPresent()) {
			return customer.get();
		} else {
			return new Customer();
		}
	}

	public List<Customer> getCustomers() {
		List<Customer> customer = custRepo.findAll();
		if (customer.isEmpty()) {
			return null;
		} else {
			return customer;
		}
	}
}
