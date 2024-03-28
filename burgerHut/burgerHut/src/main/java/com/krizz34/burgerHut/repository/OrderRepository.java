package com.krizz34.burgerHut.repository;

import com.krizz34.burgerHut.model.orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<orders,Long> {
}
