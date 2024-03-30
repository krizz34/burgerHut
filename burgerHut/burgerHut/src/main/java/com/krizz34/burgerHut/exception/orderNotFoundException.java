package com.krizz34.burgerHut.exception;

public class orderNotFoundException extends RuntimeException{

    public orderNotFoundException(Long orderId){
        super("Order not found! For the ID: " + orderId);
    }
}
