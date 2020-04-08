from flask import Flask, render_template, redirect
import requests
import json


app = Flask(__name__)
API_BASE_URL = 'http://127.0.0.1:5000/api/'


@app.route('/')
def index_handler():
    return render_template('index.html')


@app.route('/<code>')
def code_handler(code):
    url = API_BASE_URL + 'get_url?code=' + code
    response = json.loads(requests.get(url).text)

    if response['success']:
        return redirect(response['url'])

    return '<h1>This link does not exist</h1>'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
