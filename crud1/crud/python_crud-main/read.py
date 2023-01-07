import logging
import json

def read(mydb):
    sql = """select * from books order by id desc"""
    cursor = mydb.cursor(dictionary = True)
    cursor.execute(sql)
    results = json.dumps(cursor.fetchall())
    cursor.close()
    logging.warning(results)
    return results