package com.es.repository;

import com.es.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends ElasticsearchRepository<Category, String> {

    @Query("{\n" +
            "        \"bool\": {\n" +
            "            \"should\": [\n" +
            "                {\n" +
            "                    \"match\": {\n" +
            "                        \"title\": {\n" +
            "                            \"query\": \"?0\",\n" +
            "                            \"boost\": 1\n" +
            "                        }\n" +
            "                    }\n" +
            "                },\n" +
            "                {\n" +
            "                    \"match\": {\n" +
            "                        \"skills.name\": {\n" +
            "                            \"query\": \"?0\",\n" +
            "                            \"boost\": 10\n" +
            "                        }\n" +
            "                    }\n" +
            "                }\n" +
            "            ]\n" +
            "        }\n" +
            "    }")
    Page<Category> findByTitle(String title, Pageable pageable);

    @Query("{\"bool\": {\"must\": {\"match\": {\"title\": \"?0\"}}, \"filter\": {\"term\": {\"tags\": \"?1\" }}}}")
    Page<Category> findByTitleAndFilteredTagQuery(String title, String tag, Pageable pageable);
}
