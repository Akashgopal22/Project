import logging

def delete(mydb, req_data):
    sql = """DELETE from books WHERE id = %s"""
    input_data = (req_data.get('id'))
    cursor = mydb.cursor()
    cursor.execute(sql, (input_data,))
    mydb.commit()
    cursor.close()
    logging.warning("Record deleted successfully")
    return "Record deleted successfully"