import * as SQLite from 'expo-sqlite'

function connection(){
  const db_connection = SQLite.openDatabase("db.db")
  return db_connection
}

export const db = connection()