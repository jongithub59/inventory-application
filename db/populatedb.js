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


    CREATE TABLE IF NOT EXISTS perk_a_colas (
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

    INSERT INTO perk_a_colas (name, cost, color, quantity)
    VALUES
        ('Quick Revive', 1500, 'Blue', 3),
        ('Juggernog', 2500, 'Red', 6),
        ('Speed Cola', 3000, 'Green', 5),
        ('Double Tap', 2000, 'Yellow', 4);


    CREATE TABLE IF NOT EXISTS gobblegums (
         id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
         category_id INTEGER NOT NULL DEFAULT 2 REFERENCES categories(id),
         name VARCHAR(50) UNIQUE NOT NULL,
         rarity VARCHAR(50) NOT NULL,
         color VARCHAR(50) NOT NULL,
         quantity INT NOT NULL CHECK (quantity >= 0),
         icon_url VARCHAR(50)
    );

    INSERT INTO gobblegums (name, rarity, color, quantity)
    VALUES
        ('Anywhere But Here!', 'Normal', 'Purple', 78),
        ('Alchemical Antithesis', 'Normal', 'Purple', 60),
        ('Phoenix Up', 'Mega', 'Purple', 27),
        ('Aftertaste', 'Mega', 'Blue', 55),
        ('Pop Shocks', 'Mega', 'Yellow', 48),
        ('Cache Back', 'Rare Mega', 'Purple', 15),
        ('Soda Fountain', 'Rare Mega', 'Yellow', 18),
        ('Temporal Gift', 'Rare Mega', 'Blue', 37),
        ('Perkaholic', 'Ultra Mega', 'Yellow', 6),
        ('Shopping Free', 'Ultra Mega', 'Green', 4),
        ('Profit Sharing', 'Ultra Mega', 'Green', 3),
        ('Near Death Experience', 'Ultra Mega', 'Blue', 5);
        
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
