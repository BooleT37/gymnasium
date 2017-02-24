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
    private DataFiller dataFiller;

    public static void main(String[] args) {
        SpringApplication.run(GymnasiumApplication.class, args);
    }

    private void fillData() throws EntityAlreadyExistsException, WrongGradeException {
        String debugEnv = System.getenv().get("FILL_WITH_TEST_DATA");
        Boolean fillWithTestData = debugEnv != null && debugEnv.equals("TRUE");
        if (fillWithTestData)
            dataFiller.fillTestData();
        dataFiller.addHeadAdmin();
    }

    @Bean
	public CommandLineRunner runner() {
        return args -> this.fillData();
	}
}
