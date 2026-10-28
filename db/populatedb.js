const { Client } = require("pg");

// populate db with categories, perk, and gum tables with some data
const SQL = `
    CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(50)
        );

    INSERT INTO categories (name)
    VALUES
        ('Perk-a-Colas'),
        ('Gobblegums');


    CREATE TABLE IF NOT EXISTS perks_a_colas (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        category_id INTEGER NOT NULL DEFAULT 1 REFERENCES categories(id),
        name VARCHAR(50) UNIQUE NOT NULL,
        cost INTEGER NOT NULL CHECK (cost > 0),
        color VARCHAR(50) NOT NULL,
        quantity INT NOT NULL CHECK (quantity >= 0),
        icon_url VARCHAR(255),
        flavor_text TEXT,
        jingle_url VARCHAR(255)
        );

    CREATE TABLE IF NOT EXISTS gobblegums (
         id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
         category_id INTEGER NOT NULL DEFAULT 2 REFERENCES categories(id),
         name VARCHAR(50) UNIQUE NOT NULL,
         rarity VARCHAR(50) NOT NULL,
         color VARCHAR(50) NOT NULL,
         quantity INT NOT NULL CHECK (quantity >= 0),
         icon_url VARCHAR(50)
    );

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://postgres:admin@localhost:5432/perks_and_gums",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
