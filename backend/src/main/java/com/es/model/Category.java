package com.es.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.Mapping;
import org.springframework.data.elasticsearch.annotations.Setting;

import java.util.List;

import static org.springframework.data.elasticsearch.annotations.FieldType.*;

@Data
@NoArgsConstructor
@Document(indexName = "categories")
@Setting(settingPath = "/settings/category-setting.json")
@Mapping(mappingPath = "/mappings/category-mapping.json")
public class Category {
    private String id;

    private String group;

    @Field(type = Text, fielddata = true, analyzer = "ngram_analyzer")
    private String title;

    @Field(type = Nested, includeInParent = true)
    private List<Skill> skills;

    @Field(type = Text, fielddata = true)
    private String description;

    @Field(type = Keyword)
    private String[] tags;



}
