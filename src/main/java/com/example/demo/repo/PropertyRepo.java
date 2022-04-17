package com.example.demo.repo;

import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.document.Property;

@Repository
public interface PropertyRepo extends MongoRepository<Property, String> {
	
	public List<Property> findByType(String propertyType);
	public List<Property> findByTitle(String propertyTitle);
	public List<Property> findByBestseller(boolean bestseller);

}
