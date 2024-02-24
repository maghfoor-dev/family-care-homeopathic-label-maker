import SQLite from "tauri-plugin-sqlite-api";

const db = await SQLite.open("./test-database.db");

export default db;
