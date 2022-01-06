package com.company.service;

import com.company.model.Hotel;

import java.util.List;

public interface HotelService {
    Hotel create(Hotel hotel);
    Hotel readById(int id);
    Hotel update(Hotel hotel);
    void delete(int id);
    List<Hotel> getAll();
}
