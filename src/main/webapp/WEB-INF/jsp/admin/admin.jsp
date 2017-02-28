<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8"/>
    <title>Админка</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .nav {
            display: inline-block;
        }
        .nav_item {
            display: inline-block;
            height: 50px;
            line-height: 50px;
            border: solid 1px gray;
            border-radius: 5px;
            color: black;
            padding: 0 15px;
            box-shadow: 3px 3px 11px grey;
            margin: 10px;
            background: whitesmoke;
            font-size: 20px;
        }
        .nav_item:hover {
            background: #fbfbfb;
        }
        .links {
            text-align: left;
        }
        .link {
            color: navy;
            margin-top: 10px;
            display: inline-block;
        }
        .link:hover {
            color: #1717a9;
        }
    </style>
</head>
<body>
    <h1>Добро пожаловать в админку!</h1>
    <div class="nav">
        <div>
            <a href="/admin/tables/graduates"><div class="nav_item">Выпускники</div></a>
            <a href="/admin/tables/classes"><div class="nav_item">Классы</div></a>
            <a href="/admin/tables/teachers"><div class="nav_item">Учителя</div></a>
            <a href="/admin/tables/administration"><div class="nav_item">Администрация</div></a>
            <a href="/admin/tables/souvenirs"><div class="nav_item">Сувениры</div></a>
            <a href="/admin/tables/history"><div class="nav_item">История</div></a>
        </div>
        <div>
            <a href="/admin/tables/literature_club"><div class="nav_item">Литературные гостинные</div></a>
            <a href="/admin/tables/sport"><div class="nav_item">Спорт</div></a>
            <a href="/admin/tables/art"><div class="nav_item">Творчество</div></a>
            <a href="/admin/tables/science"><div class="nav_item">Наука</div></a>
            <a href="/admin/tables/travel"><div class="nav_item">Путешествия</div></a>
        </div>
        <div>
            <a href="/admin/settings"><div class="nav_item">Настройки</div></a>
        </div>
        <div class="links">
            <a href="/logout" class="link">↩ Выйти</a><br/>
            <a href="/" class="link">← Вернуться на главную</a>
        </div>
    </div>
</body>