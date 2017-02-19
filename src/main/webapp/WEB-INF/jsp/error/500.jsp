<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>

<html>
    <head>
        <title>Twitter - ошибка 500</title>
    </head>
    <body>
        <h2>Упс! Что-то пошло не так.</h2>
        Произошла внутренняя ошибка сервера.
        Если эта ошибка повторится - обратитесь в администрацию.<br/>
        Ошибка '${error}'<br/>
        Статус ${status}<br/>
        Исключение: ${exception}<br/>
        Сообщение: ${message}<br/><br/>
        Вы можете <a href ="/">вернуться на домашнюю страницу</a>
    </body>
</html>