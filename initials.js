const dbName = "zevents";
const dbversion = "1.0";
const dbDescription = "Add events in the calendar";
const dbSize = 2 * 1024 * 1024; // 2MB Size
let db = openDatabase(dbName, dbversion, dbDescription, dbSize);

// To create tables when no tables in the database
db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY,title,date,desc)"
  );
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS stars (id INTEGER PRIMARY KEY ,event_id)"
  );
});
