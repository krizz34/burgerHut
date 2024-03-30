package com.krizz34.burgerHut.controller;

import com.krizz34.burgerHut.exception.orderNotFoundException;
import com.krizz34.burgerHut.model.orders;
import com.krizz34.burgerHut.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class OrderController {

    @Autowired
    private OrderRepository newOrderRepository;

    @PostMapping("/newOrders")
    orders newOrders(@RequestBody orders newOrders){
        return newOrderRepository.save(newOrders);
    }

    @GetMapping("/allOrders")
    List<orders> getAllOrders(){
        return newOrderRepository.findAll();
    }

    @GetMapping("/selectOrders/{orderId}")
    orders getOrderById(@PathVariable Long orderId){
        return newOrderRepository.findById(orderId).orElseThrow(()->new orderNotFoundException(orderId));
    }



}
