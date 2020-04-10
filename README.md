## Links

- :ru: [Версия на русском языке](README-RU.md)
- [Repository with API](https://github.com/NChechulin/url-shortener-api)

# URL shortener website

This project is a web interface to [URL shortener API](https://github.com/NChechulin/url-shortener-api) built with Python3 + Flask and Bootstrap

## Deploy

### Cloning the repo

Firstly, you have to clone the repo:

```
git clone https://github.com/NChechulin/url-shortener-website
cd url-shortener-api
```

### Requirements

You have to install Flask:

```
pip install -r requirements.txt
```

### Running

After you did this, you can follow official [documentation](https://flask.palletsprojects.com/en/1.1.x/tutorial/deploy/) to deply the app to production.
If you want to run debug version, run:

```
flask run --port 8000
```

Ensure that port is set to 8000.
