package ru.levin;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import ru.levin.dao.GraduateClassDao;
import ru.levin.dao.GraduateDao;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.entities.Graduate;
import ru.levin.entities.GraduateClass;
import ru.levin.entities.exceptions.WrongGradeException;

import javax.inject.Inject;
import java.time.LocalDate;
import java.time.Month;

@SpringBootApplication
public class GymnasiumApplication extends SpringBootServletInitializer {
    @Inject
    private GraduateDao graduateDao;
    @Inject
    private GraduateClassDao graduateClassDao;

    public static void main(String[] args) {
        SpringApplication.run(GymnasiumApplication.class, args);
    }

    private void fillWithTestData() throws WrongGradeException, EntityAlreadyExistsException {
        if (!graduateDao.isEmpty())
            graduateDao.deleteAll();

        if (!graduateClassDao.isEmpty())
            graduateClassDao.deleteAll();

        GraduateClass graduateClass1 = new GraduateClass(1999, 9, "А");
        GraduateClass graduateClass2 = new GraduateClass(1999, 9, "Б");
        GraduateClass graduateClass3 = new GraduateClass(2001, 11, "А");
        GraduateClass graduateClass4 = new GraduateClass(2002, 11, "А");
        GraduateClass graduateClass5 = new GraduateClass(1999, 11, "А");
        GraduateClass graduateClass6 = new GraduateClass(1999, 11, "Б");
        graduateClassDao.add(graduateClass1);
        graduateClassDao.add(graduateClass2);
        graduateClassDao.add(graduateClass3);
        graduateClassDao.add(graduateClass4);
        graduateClassDao.add(graduateClass5);
        graduateClassDao.add(graduateClass6);

        graduateDao.add(new Graduate(
                "Дональд",
                "Трамп",
                "Фредович",
                LocalDate.of(1946, Month.JUNE, 14),
                graduateClass1,
                "Футбол, бейсбол, ораторское исскуство",
                "Экономика, Математика, Психология",
                "Строительство отелей и казино, организация конкурсов красоты «Мисс Вселенная», выборы в Президенты США",
                "Trump.png",
                "https://vk.com/boolet",
                "https://www.facebook.com/DonaldTrump",
                true
        ));
        graduateDao.add(new Graduate("Мэлс", "Крюков", "Филатович", graduateClass1));
        graduateDao.add(new Graduate("Ким", "Шарапов", "Яковович", graduateClass1));
        graduateDao.add(new Graduate("Надежда", "Кудрявцева", "Брониславовна", graduateClass1));
        graduateDao.add(new Graduate("Созон", "Герасимов", "Антонович", graduateClass1));
        graduateDao.add(new Graduate("Мстислав", "Зуев", "Онисимович", graduateClass1));
        graduateDao.add(new Graduate("Никита", "Кузнецов", "Созонович", graduateClass1));
        graduateDao.add(new Graduate("Анжела", "Ершова", "Пётровна", graduateClass1));
        graduateDao.add(new Graduate("Антонин", "Белозёров", "Вячеславович", graduateClass1));
        graduateDao.add(new Graduate("Лариса", "Князева", "Леонидовна", graduateClass1));
        graduateDao.add(new Graduate("Фрол", "Муравьёв", "Агафонович", graduateClass1));
        graduateDao.add(new Graduate("Даниил", "Кабанов", "Тихонович", graduateClass1));
        graduateDao.add(new Graduate("Антон", "Шилов", "Лукьянович", graduateClass1));
        graduateDao.add(new Graduate("Глеб", "Потапов", "Федосеевич", graduateClass1));
        graduateDao.add(new Graduate("Вадим", "Носов", "Витальевич", graduateClass1));
        graduateDao.add(new Graduate("Георгий", "Лыткин", "Глебович", graduateClass1));
        graduateDao.add(new Graduate("Ярослав", "Колесников", "Викторович", graduateClass1));
        graduateDao.add(new Graduate("Матвей", "Андреев", "Анатольевич", graduateClass1));
        graduateDao.add(new Graduate("Филат", "Кудрявцев", "Валерьянович", graduateClass1));
        graduateDao.add(new Graduate("Фаина", "Быкова", "Максимовна", graduateClass1));
        graduateDao.add(new Graduate("Глеб", "Попов", "Христофорович", graduateClass1));
        graduateDao.add(new Graduate("Мэлс", "Петухов", "Кимович", graduateClass1));
        graduateDao.add(new Graduate("Полина", "Григорьева", "Всеволодовна", graduateClass1));
        graduateDao.add(new Graduate("Василий", "Сергеев", "Никитевич", graduateClass1));
        graduateDao.add(new Graduate("Никита", "Артемьев", "Русланович", graduateClass2));
        graduateDao.add(new Graduate("Марфа", "Одинцова", "Макаровна", graduateClass2));
        graduateDao.add(new Graduate("Наина", "Логинова", "Донатовна", graduateClass2));
        graduateDao.add(new Graduate("Антонин", "Горбунов", "Игоревич", graduateClass2));
        graduateDao.add(new Graduate("Ульяна", "Медведева", "Павловна", graduateClass2));
        graduateDao.add(new Graduate("Марина", "Панфилова", "Викторовна", graduateClass2));
        graduateDao.add(new Graduate("Христофор", "Киселёв", "Валентинович", graduateClass3));
        graduateDao.add(new Graduate("Всеволод", "Сорокин", "Улебович", graduateClass3));
        graduateDao.add(new Graduate("Елизавета", "Морозова", "Глебовна", graduateClass3));
        graduateDao.add(new Graduate("Марина", "Шишкина", "Викторовна", graduateClass3));
        graduateDao.add(new Graduate("Игорь", "Юдин", "Павлович", graduateClass3));
        graduateDao.add(new Graduate("Агафон", "Жданов", "Станиславович", graduateClass3));
        graduateDao.add(new Graduate("Нонна", "Денисова", "Аристарховна", graduateClass3));
        graduateDao.add(new Graduate("Созон", "Путин", "Денисович", graduateClass4));
        graduateDao.add(new Graduate("Пелагея", "Быкова", "Христофоровна", graduateClass4));
        graduateDao.add(new Graduate("Вадим", "Кондратьев", "Геннадьевич", graduateClass4));
        graduateDao.add(new Graduate("Ангелина", "Медведьева", "Лукьяновна", graduateClass4));
        graduateDao.add(new Graduate("Жанна", "Максимова", "Куприяновна", graduateClass4));
        graduateDao.add(new Graduate("Пелагея", "Суворова", "Борисовна", graduateClass4));
        graduateDao.add(new Graduate("Таисия", "Александрова", "Германовна", graduateClass4));
        graduateDao.add(new Graduate("Алина", "Молчанова", "Альбертовна", graduateClass5));
        graduateDao.add(new Graduate("Владлен", "Кононов", "Кимович", graduateClass5));
        graduateDao.add(new Graduate("Эдуард", "Моисеев", "Степанович", graduateClass5));
        graduateDao.add(new Graduate("Христофор", "Зиновьев", "Пётрович", graduateClass5));
        graduateDao.add(new Graduate("Ульяна", "Романова", "Андреевна", graduateClass5));
        graduateDao.add(new Graduate("Светлана", "Комарова", "Матвеевна", graduateClass5));
        graduateDao.add(new Graduate("Регина", "Быкова", "Николаевна", graduateClass5));
        graduateDao.add(new Graduate("Геннадий", "Зайцев", "Федосеевич", graduateClass6));
        graduateDao.add(new Graduate("Валентина", "Евдокимова", "Варламовна", graduateClass6));
        graduateDao.add(new Graduate("Юлия", "Корнилова", "Максимовна", graduateClass6));
        graduateDao.add(new Graduate("Екатерина", "Захарова", "Михаиловна", graduateClass6));
        graduateDao.add(new Graduate("Степан", "Сидоров", "Владимирович", graduateClass6));
        graduateDao.add(new Graduate("Артём", "Вишняков", "Варламович", graduateClass6));
        graduateDao.add(new Graduate("Маргарита", "Кулагина", "Вадимовна", graduateClass6));
        graduateDao.add(new Graduate("Иван", "Елькин", "Андреевич", graduateClass6));
        graduateDao.add(new Graduate("Валентин", "Назаров", "Яковович", graduateClass6));
        graduateDao.add(new Graduate("Венера", "Герасимова", "Георгьевна", graduateClass6));
    }

    @Bean
	public CommandLineRunner runner() {
        return args -> this.fillWithTestData();
	}
}
