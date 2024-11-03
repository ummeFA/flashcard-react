import sqlite3

# Connect to SQLite database and create the vocabulary table if it doesn't exist
con = sqlite3.connect("quizapp.db")
cursor = con.cursor()

# Correct table schema with `option` column included
cursor.execute('''
CREATE TABLE IF NOT EXISTS vocabulary(
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               word TEXT NOT NULL,
               option TEXT,  -- Make sure this column name matches with the rest of the script
               answer TEXT NOT NULL
               )
''')

# Insert a new vocabulary item
def add_vocabulary(word, options, answer):
    con = sqlite3.connect('quizapp.db')
    cursor = con.cursor()
    cursor.execute('''
    INSERT INTO vocabulary (word, option, answer) VALUES (?, ?, ?)
    ''', (word, options, answer))
    con.commit()
    con.close()

# Retrieve all vocabulary items
def get_vocabulary():
    con = sqlite3.connect('quizapp.db')
    cursor = con.cursor()
    cursor.execute('SELECT * FROM vocabulary')
    results = cursor.fetchall()
    con.close()
    return [{"id": item[0], "word": item[1], "option": item[2], "answer": item[3]} for item in results]

# Update a vocabulary item
def update_vocabulary(vocab_id, word, options, answer):
    con = sqlite3.connect('quizapp.db')
    cursor = con.cursor()
    cursor.execute('''
    UPDATE vocabulary SET word = ?, option = ?, answer = ? WHERE id = ?
    ''', (word, options, answer, vocab_id))
    con.commit()
    con.close()

# Delete a vocabulary item
def delete_vocabulary(vocab_id):
    con = sqlite3.connect('quizapp.db')
    cursor = con.cursor()
    cursor.execute('DELETE FROM vocabulary WHERE id = ?', (vocab_id,))
    con.commit()
    con.close()

