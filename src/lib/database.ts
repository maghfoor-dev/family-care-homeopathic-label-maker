import SQLite from "tauri-plugin-sqlite-api";

const db = SQLite.open("./test-database.db");

export default db;
