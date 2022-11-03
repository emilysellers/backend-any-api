-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS trees;

CREATE TABLE pnw_trees (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    botanical_name VARCHAR NOT NULL,
    max_height_feet INT NOT NULL,
    is_evergreen BOOLEAN NOT NULL
    );

INSERT INTO pnw_trees (name, botanical_name, max_height_feet, is_evergreen)
VALUES
('Red Alder', 'Alnus rubra', 50, FALSE),
('Bigleaf Maple', 'Acer macrophyllum', 80, FALSE),
('Pacific Dogwood', 'Cornus nuttallii', 66, FALSE),
('Willamette Valley Penderosa Pine', 'Pinus ponderosa', 150, TRUE),
('Vine Maple', 'Acer circinatum', 25, FALSE),
('Western Redcedar', 'Thuja plicata', 150, TRUE),
('Pacific Madrone', 'Arbutus menziesii', 125, TRUE);



