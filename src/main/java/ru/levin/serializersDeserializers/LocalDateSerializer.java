package ru.levin.serializersDeserializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import ru.levin.DefaultDateTimeFormatter;

import javax.inject.Inject;
import javax.inject.Named;
import java.io.IOException;
import java.time.LocalDate;

@Named
public class LocalDateSerializer extends StdSerializer<LocalDate> {
    @Inject
    private DefaultDateTimeFormatter defaultDateTimeFormatter;

    public LocalDateSerializer() {
        this(null);
    }

    private LocalDateSerializer(Class<LocalDate> t) {
        super(t);
    }

    @Override
    public void serialize(LocalDate value, JsonGenerator jgen, SerializerProvider provider) throws IOException {
        if (value == null)
            jgen.writeString("");
        else
            jgen.writeString(value.format(defaultDateTimeFormatter.get()));
    }
}
