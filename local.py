#!./env/bin/python
""" local.py
"""

if __name__ == '__main__':
    from flask_failsafe import failsafe
    @failsafe
    def create_app():
        from server import server
        return server

    server = create_app()
    server.run(debug=True)
