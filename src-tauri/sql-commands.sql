CREATE TABLE medicine_list (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    potency TEXT,
    quantity TEXT,
    sticker_name TEXT,
    sku_number TEXT,
    category TEXT,
    stored_location TEXT,
    CONSTRAINT id_length CHECK(length(id) = 6)
);

CREATE TABLE medicine_queue_list (
    queue_id INTEGER PRIMARY KEY AUTOINCREMENT,
    medicine_id INTEGER,
    FOREIGN KEY (medicine_id) REFERENCES medicine_list(id)
);