import json
import logging

def login(mydb,req_data):
    sql = """SELECT username,email,id,bookmark FROM sample WHERE email=%s and password=%s"""
    input_data = (req_data.get("email"), req_data.get("password"))
    cursor = mydb.cursor(buffered =True, dictionary=True)
    cursor.execute(sql, input_data)
    mydb.commit()
    results = json.dumps(cursor.fetchall())
    cursor.close()
    logging.warning(results)
    return results