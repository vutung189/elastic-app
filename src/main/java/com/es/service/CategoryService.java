package com.es.service;

import com.es.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface CategoryService {
    void save(List<Category> categories);
    void indexCategories(Map<String, Object> mapData);

    Page<Category> find(String title, Pageable pageable);
}
