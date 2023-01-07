import logging
import json

def group(mydb):
    sql = """SELECT DISTINCT author, COUNT(title) as count FROM books group by author"""
    cursor = mydb.cursor(dictionary = True)
    cursor.execute(sql)
    results = json.dumps(cursor.fetchall())
    cursor.close()
    logging.warning(results)
    return results