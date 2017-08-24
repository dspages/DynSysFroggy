#!./env/bin/python
""" local.py
"""
from server import server

if __name__ == '__main__':
    server.debug = True
    server.run()
