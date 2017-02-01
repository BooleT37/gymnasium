package ru.levin.serializersDeserializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import ru.levin.DefaultDateTimeFormatter;
import ru.levin.entities.Graduate;

import javax.inject.Inject;
import javax.inject.Named;
import java.io.IOException;
import java.time.LocalDate;

@Named
public class GraduateSerializer extends StdSerializer<Graduate> {
    @Inject
    private DefaultDateTimeFormatter defaultDateTimeFormatter;

    public GraduateSerializer() {
        this(null);
    }

    private GraduateSerializer(Class<Graduate> t) {
        super(t);
    }

    @Override
    public void serialize(Graduate value, JsonGenerator jgen, SerializerProvider provider) throws IOException {
        if (value == null) {
            jgen.writeNull();
            return;
        }
        LocalDate birthDate = value.getBirthDate();
        String birthDateStr = birthDate == null ? null : birthDate.format(defaultDateTimeFormatter.get());
        jgen.writeStartObject();
        jgen.writeNumberField("id", value.getId());
        jgen.writeStringField("firstName", value.getFirstName());
        jgen.writeStringField("lastName", value.getLastName());
        jgen.writeStringField("patronymic", value.getPatronymic());
        jgen.writeStringField("birthDate", birthDateStr);
        jgen.writeNumberField("graduateClassId", value.getGraduateClass().getId());
        jgen.writeStringField("interests", value.getInterests());
        jgen.writeStringField("favouriteSubjects", value.getFavouriteSubjects());
        jgen.writeStringField("achievements", value.getAchievements());
        jgen.writeStringField("photoName", value.getPhotoName());
        jgen.writeStringField("vkLink", value.getVkLink());
        jgen.writeStringField("facebookLink", value.getFacebookLink());
        jgen.writeBooleanField("famous", value.isFamous());
        jgen.writeEndObject();
    }
}
