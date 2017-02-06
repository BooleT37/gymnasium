<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8"/>
    <title>Гимназия №2</title>
    <c:choose>
        <c:when test="${debug}">
            <link rel="stylesheet" href="http://localhost:8081/src/main/resources/static/built/bundle.css" />
        </c:when>
        <c:otherwise>
            <link rel="stylesheet" href="built/bundle.css" />
        </c:otherwise>
    </c:choose>
</head>
<body>
<div id="content">
    <div id="wrapper">
        <header>
            <div id="title">
                <span id="titleText">ГИМНАЗИЯ №2</span>
                <hr class="titleHr" id="titleHr_left"/>
            </div>
            <nav id="header_nav">
                <ul>
                    <li class="header_link" data-linkTo="nav_graduates" style="margin-right: 62px;">
                        <img class="header_icon" src="images/header/graduates.png" alt="graduates" style="margin: 0 0 15px 39px;"/>
                        <div class="header_elementName">ВЫПУСКНИКИ</div>
                    </li>
                    <li class="header_link" data-linkTo="nav_teachers" style="margin-right: 44px;">
                        <img class="header_icon" src="images/header/teachers.png" alt="graduates" style="margin: 0px 0 25px 4px;"/>
                        <div class="header_elementName">УЧИТЕЛЯ</div>
                    </li>
                    <li class="header_link" data-linkTo="nav_administration" style="margin-right: 35px;">
                        <img class="header_icon" src="images/header/administration.png" alt="graduates" style="margin: 0 0 20px 57px;"/>
                        <div class="header_elementName">АДМИНИСТРАЦИЯ</div>
                    </li>
                    <li class="header_link" data-linkTo="nav_history" style="margin-right: 46px;">
                        <img class="header_icon" src="images/header/history.png" alt="graduates" style="margin: 0 0 27px 6px;"/>
                        <div class="header_elementName">ИСТОРИЯ</div>
                    </li>
                    <li class="header_link" data-linkTo="nav_souvenirs" style="margin-right: 33px;">
                        <img class="header_icon" src="images/header/souvenirs.png" alt="graduates" style="margin: 0 0 24px 14px;"/>
                        <div class="header_elementName">СУВЕНИРЫ</div>
                    </li>
                    <li class="header_link" data-linkTo="nav_traditions">
                        <img class="header_icon" src="images/header/traditions.png" alt="graduates" style="margin: 0 0 25px 26px;"/>
                        <div class="header_elementName">ТРАДИЦИИ</div>
                    </li>
                </ul>
            </nav>
            <hr class="titleHr" id="titleHr_right"/>
        </header>
        <nav id="nav">
            <ul>
                <li><a class="nav_element" href="#graduateClasses" id="nav_graduates"><div class="nav_element_image" id="nav_image_graduates"></div></a></li>
                <li><a class="nav_element" href="#teachers" id="nav_teachers"><div class="nav_element_image" id="nav_image_teachers"></div></a></li>
                <li><a class="nav_element" href="#souvenirs" id="nav_souvenirs"><div class="nav_element_image" id="nav_image_souvenirs"></div></a></li>
                <li><a class="nav_element" href="#history" id="nav_history"><div class="nav_element_image" id="nav_image_history"></div></a></li>
                <li><a class="nav_element" href="#administration" id="nav_administration"><div class="nav_element_image" id="nav_image_administration"></div></a></li>
                <li><a class="nav_element" href="#traditions" id="nav_traditions"><div class="nav_element_image" id="nav_image_traditions"></div></a></li>
            </ul>
        </nav>
    </div>
</div>
<div class="ReactModalPortal"></div>
<div class="innerModal"></div>

<c:choose>
    <c:when test="${debug}">
        <div id="design" style="display: none"></div>
        <button type="button" id="designSwitchButton">Вкл</button>
        <script src="http://localhost:8081/src/main/resources/static/built/bundle.js"></script>
    </c:when>
    <c:otherwise>
        <script src="/built/bundle.js"></script>
    </c:otherwise>
</c:choose>

</body>
</html>