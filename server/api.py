""" app/api.py
"""
import scipy

from server import server

@server.route('/api/evaluate', methods=['POST'])
def evaluate():
    return 'eval LOL'
