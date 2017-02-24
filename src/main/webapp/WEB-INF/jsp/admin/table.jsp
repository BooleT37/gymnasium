<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8"/>
    <title>Админка - ${title}</title>
    <c:choose>
        <c:when test="${debug}">
            <link rel="stylesheet" href="http://localhost:8081/src/main/resources/static/built/tablePage.css" />
        </c:when>
        <c:otherwise>
            <link rel="stylesheet" href="/built/tablePage.css" />
        </c:otherwise>
    </c:choose>
</head>
<body>
    <div id="react-root"></div>
    <script>
        window.clientModel = ${clientModelJson}
    </script>
    <c:choose>
        <c:when test="${debug}">
            <script src="http://localhost:8081/src/main/resources/static/built/tablePage.js"></script>
        </c:when>
        <c:otherwise>
            <script src="/built/tablePage.js"></script>
        </c:otherwise>
    </c:choose>

</body>