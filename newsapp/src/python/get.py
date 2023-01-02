import logging
import json

def get(mydb):
    sql = """select * from newsdata"""
    cursor = mydb.cursor(dictionary = True)
    cursor.execute(sql)
    results = json.dumps(cursor.fetchall())
    cursor.close()
    logging.warning(results)
    return results