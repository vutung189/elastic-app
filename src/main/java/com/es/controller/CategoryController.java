package com.es.controller;

import com.es.model.Category;
import com.es.service.CategoryService;
import com.es.service.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PutMapping("/categories/index")
    public ResponseEntity<?> updatePlace(@RequestBody Map<String, Object> mapData) {
        categoryService.indexCategories(mapData);
        return ResponseEntity.ok().body(null);

    }

}
