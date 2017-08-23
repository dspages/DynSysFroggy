""" app/__init__.py
"""
from flask import Flask

server = Flask(__name__)
server.config.from_pyfile('config.py')

from server import views
from server import api
