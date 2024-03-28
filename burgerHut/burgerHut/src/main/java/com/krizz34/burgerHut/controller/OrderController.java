package com.krizz34.burgerHut.controller;

import com.krizz34.burgerHut.model.orders;
import com.krizz34.burgerHut.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository newOrderRepository;

    @PostMapping("/orders")
    orders newOrders(@RequestBody orders newOrders){
        return newOrderRepository.save(newOrders);
    }

    @GetMapping("/allOrders")
    List<orders> getAllOrders(){
        return newOrderRepository.findAll();
    }


}
