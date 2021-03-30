package de.kathahuth.gymast.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "categories")
public class Category {

    @Id
    private String id;
    private String name;

    @JsonProperty ("childrenNames")
    private List<String> categoryNames;

}
