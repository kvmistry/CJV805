package com.example.demo.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Property")
public class Property {
	@Id
	private String id;
	private String img;
	private String title;
	private String description;
	private String price;
	private Location location;
	private String type;
	private String rules;
	private String amenities;
	private boolean bestseller;

	public Property() {
		super();
	}

	public Property(String id, String img, String title, String description, String price, Location location,
			String type, String rules, String amenities, boolean bestseller) {
		super();
		this.id = id;
		this.img = img;
		this.title = title;
		this.description = description;
		this.price = price;
		this.location = location;
		this.type = type;
		this.rules = rules;
		this.amenities = amenities;
		this.bestseller = bestseller;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getRules() {
		return rules;
	}

	public void setRules(String rules) {
		this.rules = rules;
	}

	public String getAmenities() {
		return amenities;
	}

	public void setAmenities(String amenities) {
		this.amenities = amenities;
	}

	public boolean isBestseller() {
		return bestseller;
	}

	public void setBestseller(boolean bestseller) {
		this.bestseller = bestseller;
	}

	@Override
	public String toString() {
		return "Property [id=" + id + ", img=" + img + ", title=" + title + ", description=" + description + ", price="
				+ price + ", location=" + location + ", type=" + type + ", rules=" + rules + ", amenities=" + amenities
				+ ", bestseller=" + bestseller + "]";
	}

}
