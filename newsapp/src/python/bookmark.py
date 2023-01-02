import logging
def bookmark(mydb, req_data):
    sql = """"UPDATE `sample` SET `bookmark`=[%s] WHERE id=%s"""
    input_data = ( req_data.get('bookmark'),req_data.get('bookmark'))
    cursor = mydb.cursor()
    cursor.execute(sql, input_data)
    mydb.commit()
    cursor.close()
    logging.warning("Record inserted successfully")
    return "Record inserted successfully"