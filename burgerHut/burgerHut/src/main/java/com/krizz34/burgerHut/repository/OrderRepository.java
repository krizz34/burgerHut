package com.krizz34.burgerHut.repository;

import com.krizz34.burgerHut.model.orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<orders,Long> {
    List<orders> findByStatus(String status);
}
