package ru.levin;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.entities.exceptions.WrongGradeException;

import javax.inject.Inject;

@SpringBootApplication
public class GymnasiumApplication extends SpringBootServletInitializer {
    @Inject
    private TestDataFiller testDataFiller;

    public static void main(String[] args) {
        SpringApplication.run(GymnasiumApplication.class, args);
    }

    private void fillWithTestData() throws EntityAlreadyExistsException, WrongGradeException {
        testDataFiller.fill();
    }

    @Bean
	public CommandLineRunner runner() {
        return args -> this.fillWithTestData();
	}
}
