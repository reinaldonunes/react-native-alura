import { db } from './SQLite'

export function createTable(){
  db.transaction((transaction) => {
    transaction.executeSql("CREATE TABLE IF NOT EXISTS " + 
      "Notas " +
      "(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, category TEXT, description TEXT);")
  })
}

export async function addNote(note){
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("INSERT INTO Notas (title, category, description) VALUES (?,?,?);", [note.title, note.category, note.description], () => {
        resolve("Nota adicionada com sucesso!")
      })
    })
  })
}

export async function showNotes(){
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("SELECT * FROM Notas;", [], (transaction, result) => {
        resolve(result.rows._array)
      })
    })
  })
}

export async function updateNote(note){
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("UPDATE Notas SET title = ?, category = ?, description = ? WHERE id = ?;", [note.title, note.category, note.description, note.id], () => {
        resolve("Nota atualizada com sucesso!")
      })
    })
  })
}

export async function removeNote(note){
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("DELETE FROM Notas WHERE id = ?;", [note.id], () => {
        resolve("Nota removida com sucesso!")
      })
    })
  })
}

export async function filterByCategory(category) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("SELECT * FROM Notas WHERE category = ?;", [category], (transaction, result) => {
        resolve(result.rows._array)
      })
    })
  })
}