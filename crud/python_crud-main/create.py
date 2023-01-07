import logging

def create(mydb, req_data):
    sql = """INSERT INTO books (title, author,year) VALUES (%s, %s,%s)"""
    input_data = (req_data.get('title'), req_data.get('author'),req_data.get('year'))
    cursor = mydb.cursor()
    cursor.execute(sql, input_data)
    mydb.commit()
    cursor.close()
    logging.warning("Record inserted successfully")
    return "Record inserted successfully"
