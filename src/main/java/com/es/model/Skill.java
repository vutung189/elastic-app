package com.es.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.elasticsearch.annotations.Field;

import static org.springframework.data.elasticsearch.annotations.FieldType.Text;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Skill {
    @Field(type = Text, analyzer = "english")
    private String name;

    private String detail;

}
