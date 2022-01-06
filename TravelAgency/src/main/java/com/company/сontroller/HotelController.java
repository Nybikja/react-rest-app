package com.company.сontroller;

import com.company.model.Hotel;
import com.company.service.serviceImpl.HotelServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/hotel")
public class HotelController {
    private final HotelServiceImpl hotelServiceImpl;


    @PostMapping("/create")
    public String create(@RequestBody Hotel hotel) {
        System.out.println(hotel);
        hotelServiceImpl.create(hotel);
        return "redirect:/hotel/read" + hotel.getId();
    }

    @GetMapping("read/{id}")
    public Hotel read(@PathVariable int id) {
        return hotelServiceImpl.readById(id);
    }

    @GetMapping("read")
    public List<Hotel> read() {
        return hotelServiceImpl.getAll();
    }
}
