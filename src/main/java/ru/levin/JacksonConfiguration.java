package ru.levin;

import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import ru.levin.entities.Graduate;
import ru.levin.serializersDeserializers.GraduateDeserializer;
import ru.levin.serializersDeserializers.GraduateSerializer;
import ru.levin.serializersDeserializers.LocalDateDeserializer;
import ru.levin.serializersDeserializers.LocalDateSerializer;

import javax.inject.Inject;
import java.time.LocalDate;

@SpringBootConfiguration
public class JacksonConfiguration {
    @Inject private LocalDateDeserializer localDateDeserializer;
    @Inject private LocalDateSerializer localDateSerializer;
    @Inject private GraduateDeserializer graduateDeserializer;
    @Inject private GraduateSerializer graduateSerializer;

    @Bean
    public Jackson2ObjectMapperBuilderCustomizer configure() {
        return jackson2ObjectMapperBuilder -> {
            jackson2ObjectMapperBuilder.deserializerByType(LocalDate.class, localDateDeserializer);
            jackson2ObjectMapperBuilder.serializerByType(LocalDate.class, localDateSerializer);

            jackson2ObjectMapperBuilder.deserializerByType(Graduate.class, graduateDeserializer);
            jackson2ObjectMapperBuilder.serializerByType(Graduate.class, graduateSerializer);
        };
    }
}
