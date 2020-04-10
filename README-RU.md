# URL shortener website

Этот проект - веб-интерфейс к [URL shortener API](https://github.com/NChechulin/url-shortener-api), написанный на Python3 + Flask с использованием Bootstrap

## Развертка

### Клонирование репозитория

Сначала нужно склонировать репозиторий:

```
git clone https://github.com/NChechulin/url-shortener-api
cd url-shortener-api
```

### Зависимости и необходимые компоненты

У вас должен быть установлен Flask:

```
pip install -r requirements.txt
```

### Запуск

После того, как вы это сделали, обратитесь к официальной [документации](https://flask.palletsprojects.com/en/1.1.x/tutorial/deploy/), чтобы развернуть приложение на проде.
Если вы хотите запустить отладочную версию, выполните команду:

```
flask run --port 8000
```

Удостоверьтесь, что порт установлен на 8000
