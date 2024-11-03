from pydantic import BaseModel
from fastapi import FastAPI
import sqlite3
app = FastAPI()

class VocabularyItem(BaseModel):
    word : str
    options : str
    answer : str

# Databae setup to create table if it doesnot exist
def create_table():
    con = sqlite3.connect("quizapp.db")
    cursor = con.cursor
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS vocabulary(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    word TEXT NOT NULL,
    option TEXT,
    answer TEXT NOT NULL
    )
    ''')
    con.commit()
    con.close()

create_table()

# Create new vocabulary
@app.post("/vocabulary")
async def create_vocabulary(item: VocabularyItem):
    con = sqlite3.connect("quizapp.db")
    cursor = con.cursor()
    cursor.execute('''
    INSERT INTO vocabulary (word, option,answer) VALUES (?,?,?)
''',(item.word, item.options, item.answer ))
    con.commit()
    con.close()
    return{"message:" : "New Vocabulary Added"}
    
# Retrive all vocabulary
@app.get("/vocabulary")
async def read_vocabulary():
    con = sqlite3.connect("quizapp.db")
    cursor = con.cursor()
    cursor.execute("SELECT * FROM vocabulary")
    items = cursor.fetchall()
    con.close()
    return[{"id": item[0], "word": item[1], "option": item[2], "answer": item[3]} for item in items]

# Update a vocabulary
@app.put("/vocabulary/{vocab_id}")
async def update_vocabulary(vocab_id: int, item: VocabularyItem):
    update_vocabulary(vocab_id, item.word, item.options, item.answer)
    return{"message": "Vocabulary updated"}

@app.delete("/vocabulary/{vocab_id}")
async def delete_vocab(vocab_id: int):
    delete_vocabulary(vocab_id)
    return{"message": "Vocabulary deleted"}