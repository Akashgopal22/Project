from http.server import HTTPServer, BaseHTTPRequestHandler
import mysql.connector
from add import add
from get import get
from login import login
from register import register
from bookmark import bookmark
import logging
import json

logging.basicConfig(format = '%(asctime)s | %(filename)s: %(message)s', level = logging.NOTSET)
def db_connect():
    return mysql.connector.connect(host = "localhost", user = "root", password = "", database = "akash")

class GetHandler(BaseHTTPRequestHandler):
    def do_GET(self):

        if self.path == '/get':
            try:
                if db_connect().is_connected():
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    # call read function from read file
                    self.wfile.write(bytes(get(db_connect()), "utf-8"))

            except mysql.connector.Error as error:

                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
                
    def do_POST(self):

            if self.path == '/add':
                try:
                    if db_connect().is_connected():
                        content_length = int(self.headers.get("Content-Length"))
                        body = self.rfile.read(content_length)
                        req_data = json.loads(body)
                        self.send_response(200)
                        self.end_headers()
                        # call create function from create file
                        self.wfile.write(bytes(add(db_connect(), req_data), "utf-8"))

                except mysql.connector.Error as error:
                    self.send_response(200)
                    self.end_headers()
                    self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
            elif self.path =='/register':

                try:
                    if db_connect().is_connected():
                        content_length = int(self.headers.get("Content-Length"))
                        body = self.rfile.read(content_length)
                        req_data = json.loads(body)
                        self.send_response(200)
                        self.end_headers()
                        # call create function from create file
                        self.wfile.write(bytes(register(db_connect(), req_data), "utf-8"))

                except mysql.connector.Error as error:
                    self.send_response(200)
                    self.end_headers()
                    self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
        
            elif self.path=='/login':
                try:
                    if db_connect().is_connected():
                        content_length = int(self.headers.get("Content-Length"))
                        body = self.rfile.read(content_length)
                        req_data = json.loads(body)
                        self.send_response(200)
                        self.send_header('Access-Control-Allow-Origin', '*')
                        self.end_headers()
                        # call create function from create file
                        self.wfile.write(bytes(login(db_connect(), req_data), "utf-8"))
                except mysql.connector.Error as error:
                    self.send_response(200)
                    self.end_headers()
                    self.wfile.write(bytes("DB doesn't connected:", "utf-8"))
            elif self.path=='/bookmark':
                try:
                    if db_connect().is_connected():
                        content_length = int(self.headers.get("Content-Length"))
                        body = self.rfile.read(content_length)
                        req_data = json.loads(body)
                        self.send_response(200)
                        self.send_header('Access-Control-Allow-Origin', '*')
                        self.end_headers()
                        # call create function from create file
                        self.wfile.write(bytes(bookmark(db_connect(), req_data), "utf-8"))
                except mysql.connector.Error as error:
                    self.send_response(200)
                    self.end_headers()
                    self.wfile.write(bytes("DB doesn't connected:", "utf-8"))
def main():
    httpd = HTTPServer(('localhost',39000), GetHandler)
    print("Web server has been started")
    httpd.serve_forever()


if __name__ == "__main__":
    main()