from pydantic import BaseModel
app = FastAPI()

class VocabularyItem(BaseModel):
    word : str
    options : str
    answer : str

@app.post("/vocabulary")
async def create_vocabulary(item: VocabularyItem):
    add_vocabulary(item.word, item.options, item.answer)
    return{"message": "Vocabulary added"}

@app.get("/vocabulary")
async def read_vocabulary():
    return get_vocabulary()

@app.put("/vocabulary/{vocab_id}")
async def update_vocabulary(vocab_id: int, item: VocabularyItem):
    update_vocabulary(vocab_id, item.word, item.options, item.answer)
    return{"message": "Vocabulary updated"}

@app.delete("/vocabulary/{vocab_id}")
async def delete_vocab(vocab_id: int):
    delete_vocabulary(vocab_id)
    return{"message": "Vocabulary deleted"}