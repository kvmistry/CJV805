package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.document.Property;
import com.example.demo.repo.PropertyRepo;

@Service
public class PropertyService {

	@Autowired
	PropertyRepo propertyRepo;

	public List<Property> getProperties() {
		if (propertyRepo.findAll().isEmpty()) {
			return null;
		} else {
			return propertyRepo.findAll();
		}
	}

	public Property setProperties(Property property) {
		for (Property prop : propertyRepo.findAll())
			if (property.getLocation().getStreetAddress().equals(prop.getLocation().getStreetAddress())) {
				return new Property();
			}
		return propertyRepo.save(property);
	}

	public Property getPropertiesById(String pId) {
		Optional<Property> property = propertyRepo.findById(pId);
		if (property.isPresent()) {
			return property.get();
		} else {
			return new Property();
		}
	}

	public List<Property> getPropertiesByType(String pType) {
		if (propertyRepo.findByType(pType).isEmpty()) {
			return null;
		} else {
			return propertyRepo.findByType(pType);
		}
	}

	public List<Property> getPropertiesByTitle(String pTitle, String pType) {
		if (propertyRepo.findByTitle(pTitle).isEmpty()) {
			return new ArrayList();
		} else {
			List<Property> property = new ArrayList();

			for (Property property1 : propertyRepo.findByTitle(pTitle)) {
				if (property1.getType().equals(pType)) {
					property.add(property1);
				}
			}
			System.out.println("property : " + property.isEmpty());
			if (property.isEmpty() && pType.equals("empty")) {
				System.out.println("In service if");
				return propertyRepo.findByTitle(pTitle);
			} else {
				System.out.println("In service else " + pType);
				return property;
			}
		}
	}

	public List<Property> getPropertiesByBestseller(boolean bestsellerProperty) {
		if (propertyRepo.findByBestseller(bestsellerProperty).isEmpty()) {
			return null;
		} else {
			return propertyRepo.findByBestseller(bestsellerProperty);
		}
	}

	public Property updateProperty(Property Property, String Id) {
		if (propertyRepo.findById(Id).isPresent()) {
			Property.setId(Id);
			return propertyRepo.save(Property);
		} else {
			return new Property();
		}
	}

	public String deleteProperty(String Id) {
		if (propertyRepo.findById(Id).isPresent()) {
			propertyRepo.deleteById(Id);
			return "Removed";
		} else {
			return "Not Found!!";
		}

	}
}
