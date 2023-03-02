package com.es.controller;

import com.es.model.Category;
import com.es.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
public class SearchController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/search")
    public Page<Category> updatePlace(@RequestParam String title, Pageable pageable) {
        return categoryService.find(title, pageable);
    }

}
