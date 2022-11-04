-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS pnw_trees;

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

DROP TABLE IF EXISTS pnw_animals;

CREATE TABLE pnw_animals (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    diet VARCHAR NOT NULL,
    habitat VARCHAR NOT NULL
);

INSERT INTO pnw_animals (name, diet, habitat) VALUES
('American Black Bear', 'plants, fruits, nuts, insects and honey, as well as salmon, small mammals and carrion', 'forested areas in riparian, mixed conifer, lodgepole pine, aspen, white oak and mixed conifer-hardwood forest types'),
('Anna''s Hummingbird', 'nectar and insects', 'yards, parks, residential streets, riverside woods and coastal scrub'),
('Coyote', 'small mammals, birds, insects, fruit and carrion', 'ranges from grasslands to dense forests, and from remote wilderness to highly urbanized areas'),
('Hoary Bat', 'flying insects such as flies, moths, mosquitoes, beetles and dragonflies', 'brushy areas along forest edges of middle-aged to older stands where nesting and roosting sites are available'),
('Roosevelt Elk', 'various grasses that are plentiful during typical years, as well as eating foliage from shrubs, trees and bushes including trailing blackberry, huckleberry, salal, vine maple, salmonberry, Douglas-fir, western hemlock and western redcedar', 'riparian, mixed conifer and white oak forest types, and in parklands, grasslands and agricultural areas');
