package ru.levin.serializersDeserializers;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import ru.levin.DefaultDateTimeFormatter;

import javax.inject.Inject;
import javax.inject.Named;
import java.io.IOException;
import java.time.LocalDate;

@Named
public class LocalDateDeserializer extends StdDeserializer<LocalDate> {
    @Inject
    private DefaultDateTimeFormatter defaultDateTimeFormatter;

    public LocalDateDeserializer() {
        super(LocalDate.class);
    }

    @Override
    public LocalDate deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        ObjectCodec oc = p.getCodec();
        JsonNode node = oc.readTree(p);
        String date = node.asText();
        return (date == null || date.isEmpty()) ? null : LocalDate.parse(node.asText(), defaultDateTimeFormatter.get());
    }
}
