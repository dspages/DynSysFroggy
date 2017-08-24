""" server/views.py
"""
from flask import render_template

from server import server

@server.route('/')
def index():
    return render_template('index.html')
