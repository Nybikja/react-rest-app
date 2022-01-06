package com.company.service.serviceImpl;

import com.company.model.Hotel;
import com.company.repository.HotelRepository;
import com.company.service.HotelService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@AllArgsConstructor
@Service
public class HotelServiceImpl implements HotelService {
    private final HotelRepository hotelRepository;

    @Override
    public Hotel create(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    @Override
    public Hotel readById(int id) {
        return hotelRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Hotel with id " + id + " not found"));
    }

    @Override
    public Hotel update(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    @Override
    public void delete(int id) {
        hotelRepository.delete(readById(id));
    }

    @Override
    public List<Hotel> getAll() {
        return hotelRepository.findAll();
    }
}
