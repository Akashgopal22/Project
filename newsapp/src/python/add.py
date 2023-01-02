import logging
import json

def add(mydb, req_data):
    sql = """INSERT INTO newsdata (title,image,subhead,subcontent,maincontent,time,newstype,category) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)"""
    input_data = ( req_data.get('title'),req_data.get('image'),req_data.get('subhead'),req_data.get('subcontent'),req_data.get('maincontent'),req_data.get('time'),req_data.get('newstype'),req_data.get('category'))
    cursor = mydb.cursor()
    cursor.execute(sql, input_data)
    mydb.commit()
    cursor.close()
    logging.warning("Record inserted successfully")
    return "Record inserted successfully"