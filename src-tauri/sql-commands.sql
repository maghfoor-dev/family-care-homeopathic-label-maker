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
