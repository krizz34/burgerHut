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

    @PostMapping("/newOrder")
    orders newOrders(@RequestBody orders newOrders){
        return newOrderRepository.save(newOrders);
    }

    @GetMapping("/allOrders")
    List<orders> getAllOrders(){
        return newOrderRepository.findAll();
    }

    @GetMapping("/selectOrder/{orderId}")
    orders getOrderById(@PathVariable Long orderId){
        return newOrderRepository.findById(orderId)
                .orElseThrow(()->new orderNotFoundException(orderId));
    }

    @PutMapping("/updateOrder/{orderId}")
    orders updateOrder(@RequestBody orders editedOrder, @PathVariable Long orderId){
        return newOrderRepository.findById(orderId)
                .map(existingUserInstance -> {
                    existingUserInstance.setOrderTitle(editedOrder.getOrderTitle());
                    existingUserInstance.setExtras(editedOrder.getExtras());
                    existingUserInstance.setUserMob(editedOrder.getUserMob());
                    existingUserInstance.setStatus(editedOrder.getStatus());
                    return newOrderRepository.save(existingUserInstance);
                })
                .orElseThrow(()->new orderNotFoundException(orderId));
    }

    @DeleteMapping("/deleteOrder/{orderId}")
    String deleteOrder(@PathVariable Long orderId){
        if (!newOrderRepository.existsById(orderId)){
            throw new orderNotFoundException(orderId);
        }
        newOrderRepository.deleteById(orderId);
        return "Order with ID: " + orderId + " has been successfully deleted.";
    }

    @GetMapping("/preparingOrders")
    List<orders> getOrdersPreparing() {
        return newOrderRepository.findByStatus("preparing");
    }

    @GetMapping("/readyOrders")
    List<orders> getOrdersReady() {
        return newOrderRepository.findByStatus("ready");
    }



}
