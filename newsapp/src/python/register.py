import logging
import json

def  register (mydb,req_data):
    sql = """INSERT INTO sample (username,email,password) VALUES (%s, %s,%s)"""
    input_data = (req_data.get('username'), req_data.get('email'),req_data.get('password'))
    cursor = mydb.cursor()
    cursor.execute(sql, input_data)
    mydb.commit()
    cursor.close()
    logging.warning("Record inserted successfully")
    return "Record inserted successfully"