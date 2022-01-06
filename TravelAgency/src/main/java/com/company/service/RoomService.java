package com.company.service;

import com.company.model.Room;

import java.util.List;

public interface RoomService {
    Room create(Room room);
    Room readById(int id);
    Room update(Room room);
    void delete(int id);
    List<Room> getAll();
}
