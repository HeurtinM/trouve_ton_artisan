-- phpMyAdmin SQL Dump
-- version 5.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

SET NAMES utf8mb4;

-- CATEGORIES

INSERT INTO categorie (nom) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');


-- SPECIALITES


INSERT INTO specialite (nom, categorie_id) VALUES
('Boucher', 1),
('Boulanger', 1),
('Chocolatier', 1),
('Traiteur', 1),

('Chauffagiste', 2),
('Electricien', 2),
('Menuisier', 2),
('Plombier', 2),

('Bijoutier', 3),
('Couturier', 3),
('Ferronier', 3),

('Coiffeur', 4),
('Fleuriste', 4),
('Toiletteur', 4),
('Webdesign', 4);


-- ARTISANS


INSERT INTO artisan
(nom, note, ville, a_propos, image, site_web, email, top, specialite_id)
VALUES
('Boucherie Dumont', 4.5, 'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, NULL, 'boucherie.dumond@gmail.com', 0, 1),

('Au pain chaud', 4.8, 'Montélimar',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, NULL, 'aupainchaud@hotmail.com', 1, 2),

('Chocolaterie Labbé', 4.9, 'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, 'https://chocolaterie-labbe.fr', 'chocolaterie-labbe@gmail.com', 1, 3),

('Traiteur Truchon', 4.1, 'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, 'https://truchon-traiteur.fr', 'contact@truchon-traiteur.fr', 0, 4),

('Orville Salmons', 5.0, 'Evian',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, NULL, 'o-salmons@live.com', 1, 5),

('Mont Blanc Eléctricité', 4.5, 'Chamonix',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, 'https://mont-blanc-electricite.com', 'contact@mont-blanc-electricite.com', 0, 6),

('Boutot & fils', 4.7, 'Bourg-en-Bresse',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, 'https://boutot-menuiserie.com', 'boutot-menuiserie@gmail.com', 0, 7),

('Vallis Bellemare', 4.0, 'Vienne',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, 'https://plomberie-bellemare.com', 'v.bellemare@gmail.com', 0, 8),

('Claude Quinn', 4.2, 'Aix-les-Bains',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, NULL, 'claude.quinn@gmail.com', 0, 9),

('Amitee Lécuyer', 4.5, 'Annecy',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, 'https://lecuyer-couture.com', 'a.amitee@hotmail.com', 0, 10),

('Ernest Carignan', 5.0, 'Le Puy-en-Velay',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, NULL, 'e-carigan@hotmail.com', 0, 11),

('Royden Charbonneau', 3.8, 'Saint-Priest',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, NULL, 'r.charbonneau@gmail.com', 0, 12),

('Leala Dennis', 3.8, 'Chambéry',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, 'https://coiffure-leala-chambery.fr', 'l.dennos@hotmail.fr', 0, 12),

('C\'est sup\'hair', 4.1, 'Romans-sur-Isère',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, 'https://sup-hair.fr', 'sup-hair@gmail.com', 0, 12),

('Le monde des fleurs', 4.6, 'Annonay',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, 'https://le-monde-des-fleurs-annonay.fr', 'contact@le-monde-des-fleurs-annonay.fr', 0, 13),

('Valérie Laderoute', 4.5, 'Valence',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, NULL, 'v-laredoute@gmail.com', 0, 14),

('CM Graphisme', 4.4, 'Valence',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
NULL, 'https://cm-graphisme.com', 'contact@cm-graphisme.com', 0, 15);

COMMIT;
