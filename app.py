from flask import Flask, render_template
from re import template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index2.html')

@app.route('/<nome>')
def inserir_nome (nome):
    return render_template('index2.html', nome_pessoa = nome)

