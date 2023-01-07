import logging
import json

def getid(mydb,req_data):
    sql = """SELECT * FROM books where id=%s;"""
    input_data = (req_data.get('id'))
    cursor = mydb.cursor(buffered=True, dictionary=True)
    cursor.execute(sql, (input_data,))
    mydb.commit()
    results = json.dumps(cursor.fetchall())
    logging.warning(results)
    cursor.close()
    return results