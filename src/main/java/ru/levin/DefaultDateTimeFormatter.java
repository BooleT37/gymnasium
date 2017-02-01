package ru.levin;

import javax.inject.Named;
import java.time.format.DateTimeFormatter;

@Named
public class DefaultDateTimeFormatter {
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");

    public DateTimeFormatter get() {
        return formatter;
    }
}
