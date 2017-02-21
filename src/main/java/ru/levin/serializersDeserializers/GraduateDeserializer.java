package ru.levin.serializersDeserializers;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import ru.levin.DefaultDateTimeFormatter;
import ru.levin.dao.GraduateClassDao;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Graduate;
import ru.levin.entities.GraduateClass;

import javax.inject.Inject;
import javax.inject.Named;
import java.io.IOException;
import java.time.LocalDate;

@Named
public class GraduateDeserializer  extends StdDeserializer<Graduate> {
    @Inject
    private DefaultDateTimeFormatter defaultDateTimeFormatter;

    @Inject
    private GraduateClassDao graduateClassDao;

    public GraduateDeserializer() {
        super(Graduate.class);
    }

    @Override
    public Graduate deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        ObjectCodec oc = p.getCodec();
        JsonNode node = oc.readTree(p);
        GraduateClass graduateClass;
        Long id = node.get("graduateClassId").asLong();
        try {
            graduateClass = graduateClassDao.getById(id);
        } catch (EntityNotFoundException e) {
            throw new IOException(String.format("Cannot find graduate class with id %d", id));
        }
        String birthDateText = node.get("birthDate").asText();
        LocalDate date = birthDateText.isEmpty() ? null : LocalDate.parse(node.get("birthDate").asText(), defaultDateTimeFormatter.get());
        if (node.has("id"))
            return new Graduate(
                node.get("id").asLong(),
                node.get("firstName").asText(),
                node.get("lastName").asText(),
                node.get("patronymic").asText(),
                date,
                graduateClass,
                node.get("interests").asText(),
                node.get("favouriteSubjects").asText(),
                node.get("achievements").asText(),
                node.get("photoName").asText(),
                node.get("vkLink").asText(),
                node.get("facebookLink").asText(),
                node.get("famous").asBoolean()
            );
        else {
            return new Graduate(
                node.get("firstName").asText(),
                node.get("lastName").asText(),
                node.get("patronymic").asText(),
                date,
                graduateClass,
                node.get("interests").asText(),
                node.get("favouriteSubjects").asText(),
                node.get("achievements").asText(),
                node.get("photoName").asText(),
                node.get("vkLink").asText(),
                node.get("facebookLink").asText(),
                node.get("famous").asBoolean()
            );
        }
    }
}
