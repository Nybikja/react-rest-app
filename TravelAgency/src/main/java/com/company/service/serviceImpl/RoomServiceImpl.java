package com.company.service.serviceImpl;

import com.company.model.Room;
import com.company.repository.RoomRepository;
import com.company.service.RoomService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@AllArgsConstructor
@Service
public class RoomServiceImpl implements RoomService {
    private final RoomRepository roomRepository;

    @Override
    public Room create(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public Room readById(int id) {
        return roomRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Room with id " + id + " not found"));
    }

    @Override
    public Room update(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public void delete(int id) {
        roomRepository.delete(readById(id));
    }

    @Override
    public List<Room> getAll() {
        return roomRepository.findAll();
    }
}
