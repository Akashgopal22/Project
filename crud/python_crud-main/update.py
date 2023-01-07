import logging

def update(mydb, req_data):
    sql = """UPDATE books SET title = %s,author = %s,year = %s WHERE id = %s"""
    input_data = (req_data.get('title'),req_data.get('author'), req_data.get('year'),req_data.get('id'))
    cursor = mydb.cursor()
    cursor.execute(sql, input_data)
    mydb.commit()
    cursor.close()
    logging.warning("Record updated successfully")
    return "Record updated successfully"