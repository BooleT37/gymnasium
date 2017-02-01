package ru.levin;

import ru.levin.dao.AdministrationEmployeeDao;
import ru.levin.dao.GraduateClassDao;
import ru.levin.dao.GraduateDao;
import ru.levin.dao.TeacherDao;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.entities.AdministrationEmployee;
import ru.levin.entities.Graduate;
import ru.levin.entities.GraduateClass;
import ru.levin.entities.Teacher;
import ru.levin.entities.enums.AdministrationPosition;
import ru.levin.entities.exceptions.WrongGradeException;

import javax.inject.Inject;
import javax.inject.Named;
import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;
import java.util.Collections;

@Named
public class TestDataFiller {
    @Inject private GraduateDao graduateDao;
    @Inject private GraduateClassDao graduateClassDao;
    @Inject private TeacherDao teacherDao;
    @Inject private AdministrationEmployeeDao administrationEmployeeDao;

    private void fillGraduatesAndClasses() throws WrongGradeException, EntityAlreadyExistsException {
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
        Arrays.asList("sas", "sad");
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

    private void fillTeachers() throws WrongGradeException, EntityAlreadyExistsException {
        if (!teacherDao.isEmpty())
            teacherDao.deleteAll();

        teacherDao.add(new Teacher("Варвара", "Калашникова", "Геласьевна", LocalDate.of(1951, 2, 9), Arrays.asList("Математика", "Информатика"), 2003, 2013, false));
        teacherDao.add(new Teacher("Антонина", "Жданова", "Авксентьевна", LocalDate.of(1952, 3, 22), Collections.singletonList("Математика"), 2005, 2015, true));
        teacherDao.add(new Teacher("Авдей", "Горбунов", "Демьянович", LocalDate.of(1957, 4, 21), null, null, 2017, false));
        teacherDao.add(new Teacher("Надежда", "Родионова", "Вадимовна", LocalDate.of(1958, 11, 20), null, null, null, false));
        teacherDao.add(new Teacher("Полина", "Семёнова", "Станиславовна", null, null, 2010, null, true));
        teacherDao.add(new Teacher("Макар", "Анисимов", "Станиславович", null, null, 2003, 2003, false));
        teacherDao.add(new Teacher("Октябрина", "Фомичёва", "Агафоновна", null, null, 2004, 2006, true));
        teacherDao.add(new Teacher("Серапион", "Веселов", "Юрьевич", LocalDate.of(1983, 9, 10), null, null, null, false));
        teacherDao.add(new Teacher("Вадим", "Горбачёв", "Александрович", LocalDate.of(1987, 6, 26), null, 2008, null, false));
        teacherDao.add(new Teacher("Альвиан", "Красильников", "Мэлсович", LocalDate.of(1987, 10, 22), null, 2004, 2004, false));
        teacherDao.add(new Teacher("Галина", "Гусева", "Руслановна", LocalDate.of(1956, 4, 12), null, null, 2014, false));
        teacherDao.add(new Teacher("Донат", "Рыбаков", "Улебович", LocalDate.of(1959, 7, 26), null, 2009, null, false));
        teacherDao.add(new Teacher("Галина", "Селезнёва", "Геннадьевна", null, Collections.singletonList("Физкультура"), null, 2010, false));
        teacherDao.add(new Teacher("Валентин", "Русаков", "Макарович", null, Collections.singletonList("Русский язык"), 2011, 2011, false));
        teacherDao.add(new Teacher("Геласий", "Гусев", "Яковович", null, Collections.singletonList("Литература"), 2009, 2011, false));
        teacherDao.add(new Teacher("Степан", "Путин", "Пётрович", LocalDate.of(1972, 5, 19), Collections.singletonList("ОБЖ"), null, 2010, true));
        teacherDao.add(new Teacher("Онисим", "Никонов", "Альвианович", LocalDate.of(1973, 9, 7), Collections.singletonList("Русский язык"), 2009, 2013, false));
        teacherDao.add(new Teacher("Екатерина", "Бобылёва", "Якуновна", LocalDate.of(1977, 10, 4), null, 2011, 2017, false));
        teacherDao.add(new Teacher("Максим", "Одинцов", "Иринеевич", LocalDate.of(1981, 2, 21), null, 2006, 2013, false));
        teacherDao.add(new Teacher("Григорий", "Буров", "Павлович", null, null, 208, 208, false));
        teacherDao.add(new Teacher("Максим", "Горбачёв", "Арсеньевич", null, Collections.singletonList("Математика"), null, 2008, false));
        teacherDao.add(new Teacher("Любовь", "Гаврилова", "Созоновна", null, Collections.singletonList("Математика"), null, 2015, false));
        teacherDao.add(new Teacher("Леонид", "Антонов", "Юрьевич", LocalDate.of(1968, 6, 2), Collections.singletonList("Математика"), 2004, 2013, false));
        teacherDao.add(new Teacher("Евсей", "Калашников", "Игоревич", LocalDate.of(1974, 7, 11), Collections.singletonList("Математика"), 2015, null, true));
        teacherDao.add(new Teacher("Николай", "Белоусов", "Аристархович", LocalDate.of(1981, 3, 31), Collections.singletonList("Математика"), 2005, 2010, false));
        teacherDao.add(new Teacher("Мэлс", "Николаев", "Агафонович", null, null, 2008, 2008, false));
        teacherDao.add(new Teacher("Даниил", "Иванов", "Федосеевич", null, null, 2006, 2010, false));
        teacherDao.add(new Teacher("Валентин", "Тарасов", "Александрович", LocalDate.of(1984, 6, 3), Collections.singletonList("Математика"), 2010, 2015, false));
        teacherDao.add(new Teacher("Фаина", "Фёдорова", "Станиславовна", null, Collections.singletonList("Математика"), 2008, null, false));
        teacherDao.add(new Teacher("Октябрина", "Ефремова", "Игнатьевна", LocalDate.of(1986, 6, 19), null, 2013, 2014, false));
    }

    private void fillAdministration() throws EntityAlreadyExistsException {
        if (!administrationEmployeeDao.isEmpty())
            administrationEmployeeDao.deleteAll();

        administrationEmployeeDao.add(new AdministrationEmployee("Демьян", "Козлов", "Пантелеймонович", LocalDate.of(1964, 2, 23), 2004, 2006, AdministrationPosition.DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Анжела", "Васильева", "Протасьевна", LocalDate.of(1973, 8, 29), 2003, 2013, AdministrationPosition.DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Надежда", "Алексеева", "Владиславовна", LocalDate.of(1974, 3, 25), 2010, 2011, AdministrationPosition.DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Фаина", "Киселёва", "Богдановна", LocalDate.of(1978, 4, 10), 2005, 2011, AdministrationPosition.DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Лидия", "Дроздова", "Данииловна", LocalDate.of(1999, 3, 30), 2003, 2008, AdministrationPosition.DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Евсей", "Кошелев", "Васильевич", LocalDate.of(1967, 11, 24), 2009, 2009, AdministrationPosition.DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Фаина", "Киселёва", "Павловна", LocalDate.of(1975, 4, 9), 2011, 2015, AdministrationPosition.DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Фёдор", "Гордеев", "Мэлорович", LocalDate.of(1990, 3, 4), 2003, 2005, AdministrationPosition.DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Виктор", "Мельников", "Артёмович", LocalDate.of(1993, 7, 14), 2003, 2005, AdministrationPosition.DEPUTY_DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Ульяна", "Аксёнова", "Дмитрьевна", LocalDate.of(1995, 2, 11), 2004, 2008, AdministrationPosition.DEPUTY_DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Альберт", "Бобылёв", "Протасьевич", LocalDate.of(1950, 8, 9), 2016, null, AdministrationPosition.DEPUTY_DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Варвара", "Соколова", "Фёдоровна", LocalDate.of(1954, 4, 3), 2013, null, AdministrationPosition.DEPUTY_DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Парфений", "Доронин", "Эдуардович", LocalDate.of(1965, 4, 6), 2015, 2016, AdministrationPosition.DEPUTY_DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Иванна", "Воронова", "Александровна", LocalDate.of(1973, 6, 14), 2013, 2015, AdministrationPosition.DEPUTY_DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Владислав", "Мухин", "Даниилович", LocalDate.of(1981, 10, 5), 2010, null, AdministrationPosition.DEPUTY_DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Игнатий", "Колесников", "Егорович", LocalDate.of(1953, 9, 30), 2009, 2012, AdministrationPosition.DEPUTY_DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Оксана", "Медведьева", "Антониновна", LocalDate.of(1968, 2, 6), 2008, 2010, AdministrationPosition.DEPUTY_DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Лаврентий", "Фролов", "Егорович", LocalDate.of(1985, 10, 3), 2004, 2004, AdministrationPosition.DEPUTY_DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Яков", "Емельянов", "Георгьевич", LocalDate.of(1989, 1, 17), 2004, 2012, AdministrationPosition.DEPUTY_DIRECTOR));
        administrationEmployeeDao.add(new AdministrationEmployee("Анжела", "Щербакова", "Эдуардовна", LocalDate.of(1990, 3, 20), 2004, 2014, AdministrationPosition.DEPUTY_DIRECTOR));
    }

    public void fill() throws WrongGradeException, EntityAlreadyExistsException {
        fillGraduatesAndClasses();
        fillTeachers();
        fillAdministration();
    }
}
