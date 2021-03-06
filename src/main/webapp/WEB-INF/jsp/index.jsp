<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8"/>
    <title>Гимназия №2</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
    <c:choose>
        <c:when test="${debug}">
            <link rel="stylesheet" href="http://localhost:8081/src/main/resources/static/built/index.css" />
            <c:if test="${animation}">
                <link rel="stylesheet" href="http://localhost:8081/src/main/resources/static/built/animation.css" />
            </c:if>
        </c:when>
        <c:otherwise>
            <link rel="stylesheet" href="built/index.css" />
            <c:if test="${animation}">
                <link rel="stylesheet" href="built/animation.css" />
            </c:if>
        </c:otherwise>
    </c:choose>
</head>
<body>
<div class="parallax_container">
    <div class="parallax parallax_0"></div>
    <div class="parallax parallax_1"></div>
</div>
<div id="content">
    <div id="wrapper">
        <header>
            <nav id="header_nav">
                <ul>
                    <li class="header_link" data-linkTo="nav_graduates_link" data-scrollTo="nav_graduates">
                        <img class="header_icon" src="images/header/graduates.png" alt="graduates" style="margin-bottom: 15px"/>
                        <div class="header_elementName" style="max-width: 125px">ВЫПУСКНИКИ</div>
                    </li>
                    <li class="header_link" data-linkTo="nav_teachers_link" data-scrollTo="nav_teachers">
                        <img class="header_icon" src="images/header/teachers.png" alt="graduates" style="margin-bottom: 25px"/>
                        <div class="header_elementName" style="max-width: 83px">УЧИТЕЛЯ</div>
                    </li>
                    <li class="header_link" data-linkTo="nav_souvenirs_link" data-scrollTo="nav_souvenirs">
                        <img class="header_icon" src="images/header/souvenirs.png" alt="graduates" style="margin-bottom: 24px"/>
                        <div class="header_elementName" style="max-width: 99px">СУВЕНИРЫ</div>
                    </li>
                    <li class="header_link" data-linkTo="nav_history_link" data-scrollTo="nav_history">
                        <img class="header_icon" src="images/header/history.png" alt="graduates" style="margin-bottom: 27px"/>
                        <div class="header_elementName" style="max-width: 85px">ИСТОРИЯ</div>
                    </li>
                    <li class="header_link" data-linkTo="nav_administration_link" data-scrollTo="nav_administration">
                        <img class="header_icon" src="images/header/administration.png" alt="graduates" style="margin-bottom: 20px"/>
                        <div class="header_elementName" style="max-width: 164px">АДМИНИСТРАЦИЯ</div>
                    </li>
                    <li class="header_link" data-linkTo="nav_traditions_link" data-scrollTo="nav_traditions">
                        <img class="header_icon" src="images/header/traditions.png" alt="graduates" style="margin-bottom: 25px"/>
                        <div class="header_elementName" style="max-width: 100px">ТРАДИЦИИ</div>
                    </li>
                </ul>
                <hr class="titleHr" id="titleHr_right"/>
            </nav>
            <div id="title">
                <div id="titleImage"></div>
                <hr class="titleHr" id="titleHr_left"/>
            </div>
        </header>
        <nav id="nav">
            <ul>
                <li id="nav_graduates"><a class="nav_element" href="#graduateClasses" id="nav_graduates_link"><div class="nav_element_image" id="nav_image_graduates"></div></a></li>
                <li id="nav_teachers"><a class="nav_element" href="#teachers" id="nav_teachers_link"><div class="nav_element_image" id="nav_image_teachers"></div></a></li>
                <li id="nav_souvenirs"><a class="nav_element" href="#souvenirs" id="nav_souvenirs_link"><div class="nav_element_image" id="nav_image_souvenirs"></div></a></li>
                <li id="nav_history" style="margin-top: 350px"><a class="nav_element" href="#history" id="nav_history_link"><div class="nav_element_image" id="nav_image_history"></div></a></li>
                <li id="nav_administration"><a class="nav_element" href="#administration" id="nav_administration_link"><div class="nav_element_image" id="nav_image_administration"></div></a></li>
                <li id="nav_traditions"><a class="nav_element" href="#traditions" id="nav_traditions_link"><div class="nav_element_image" id="nav_image_traditions"></div></a></li>
            </ul>
            <c:if test="${animation}">
                <div id="animation_container" style="background-color:rgba(255, 255, 255, 0.00); width:500px; height:500px">
                    <canvas id="canvas" width="500" height="500" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 0.00);"></canvas>
                    <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:500px; height:500px; position: absolute; left: 0px; top: 0px; display: block;">
                    </div>
                </div>
            </c:if>
        </nav>
    </div>
</div>
<div class="ReactModalPortal"></div>
<div class="innerModal"></div>

<c:choose>
    <c:when test="${debug}">
        <div id="design" style="display: none"></div>
        <button type="button" id="designSwitchButton">Вкл</button>
        <script src="http://localhost:8081/src/main/resources/static/built/index.js"></script>
        <c:if test="${animation}">
            <script src="http://localhost:8081/src/main/resources/static/built/animation.js"></script>
        </c:if>
    </c:when>
    <c:otherwise>
        <script src="built/index.js"></script>
        <c:if test="${animation}">
            <script src="built/animation.js"></script>
        </c:if>
    </c:otherwise>
</c:choose>

</body>
</html>