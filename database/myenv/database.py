import sqlite3

# Connect to SQLite database
con=sqlite3.connect("quizapp.db")

# Create a cursor
cursor=con.cursor()

# Create a vocabulary table if it does not exist
cursor.execute('''
CREATE TABLE IF NOT EXISTS vocabulary(
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               word TEXT NOT NULL,
               option TEXT, 
               answer TEXT NOT NULL
               )
''')

# Commit changes and close the connection

con.commit()
con.close()


# ```````` CRUD `````````````
# insert new vocabulary
def add_vocabulary(word, options, answer):
    con = sqlite3.connect('quizapp.db')
    cursor=con.cursor()
    cursor.execute('''
    INSERT INTO vocabulary (word, options, answer) VALUES (? ? ?)   ''', (word, options, answer))
    con.commit()
    con.close()

# retrieve vocabulary
def get_vocabulary():
    con = sqlite3.connect('quizapp.db')
    cursor = con.cursor()
    cursor.execute('SELECT * from vocabulary')
    results = cursor.fetchall()
    con.close()
    return results

# update vocabulary
def update_vocabulary(vocab_id, word, options, answer):
    con = sqlite3.connect('quizapp.db')
    cursor = con.cursor()
    cursor.execute('''
    UPDATE vocabulary SET word = ?, options = ?, answer = ? WHERE id = ?''',(word, options, answer, vocab_id))
    con.commit()
    con.close()

# delete a vocabulary
def delete_vocabulary(vocab_id):
    con = sqlite3.connect('quizapp.db')
    cursor = con.cursor()
    cursor.execute('DELETE FROM vocabulary WHERE id = ?', (vocab_id))
    con.commit()
    con.close()