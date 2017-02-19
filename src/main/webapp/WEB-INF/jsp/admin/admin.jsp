<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8"/>
    <title>Админка</title>
</head>
<body>
    <h1>Добро пожаловать в админку!</h1>
    <ul>
        <li>
            <a href="/admin/tables/graduates">Выпускники</a>
        </li>
        <li>
            <a href="/admin/tables/graduate_classes">Классы</a>
        </li>
        <li>
            <a href="/admin/tables/teachers">Учителя</a>
        </li>
        <li>
            <a href="/admin/tables/administration">Администрация</a>
        </li>
        <li>
            <a href="/admin/tables/souvenirs">Сувениры</a>
        </li>
        <li>
            <a href="/admin/tables/history">История</a>
        </li>
        <li>
            Традиции:
            <ul>
                <li>
                    <a href="/admin/tables/literature_club">Литературные гостинные</a>
                </li>
                <li>
                    <a href="/admin/tables/sport">Спорт</a>
                </li>
                <li>
                    <a href="/admin/tables/art">Творчество</a>
                </li>
                <li>
                    <a href="/admin/tables/science">Наука</a>
                </li>
                <li>
                    <a href="/admin/tables/travel">Путешествия</a>
                </li>
            </ul>
        </li>
    </ul>
    <a href="/logout">Выйти</a>
</body>