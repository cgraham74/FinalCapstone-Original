package com.techelevator.service;
import com.techelevator.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PantryService {

    @Autowired
    PantryRepository pantryRepository;

}
