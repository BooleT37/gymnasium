<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Вход  админку</title>
    <style>
        body {
            font: 16px Arial, sans-serif;
            text-align: center;
        }
        .form {
            display: inline-block;
        }
        .form_text, .form_error {
            margin-bottom: 5px;
            font-size: 14px;
        }
        .form_text {
            color: gray;
        }
        .form_error {
            color: orangered;
        }
    </style>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>

<body>
   <h1>Вход в админку</h1>
      <c:if test="${param.error != null}">
          <div class="form_error">
              Ошибка аутентификации
              <c:if test="${SPRING_SECURITY_LAST_EXCEPTION != null}"><br/>
                Причина: <c:out value="${SPRING_SECURITY_LAST_EXCEPTION.message}" />
              </c:if>
          </div>
      </c:if>
      <c:if test="${param.logout != null}">
          <div class="form_text">
              Вы успешно вышли из системы
          </div>
          </c:if>
   <form name='f' action="login" method='POST' class="form">
      <table>
         <tr>
            <td>Логин:</td>
            <td><input type='text' name='username' value=''></td>
         </tr>
         <tr>
            <td>Пароль:</td>
            <td><input type='password' name='password' /></td>
         </tr>
         <tr>
            <td><input name="submit" type="submit" value="Войти" /></td>
         </tr>
      </table>
  </form>
  <br/>
</body>
</html>
