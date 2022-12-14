# --- Jour 4 : Nettoyage du camp ---

## Ressource

https://adventofcode.com/2022/day/4

## Enoncé

L'espace doit être dégagé avant que les dernières fournitures puissent être déchargées des navires, et plusieurs elfes ont donc été chargés de nettoyer des sections du camp. Chaque section a un numéro d'identification unique et chaque elfe se voit attribuer une plage d'ID de section.

Cependant, alors que certains des elfes comparent leurs affectations de section les unes avec les autres, ils ont remarqué que de nombreuses affectations se chevauchent . Pour essayer de trouver rapidement les chevauchements et de réduire les efforts dupliqués, les Elfes se mettent par paires et dressent une grande liste des affectations de section pour chaque paire (votre entrée de puzzle).

Par exemple, considérez la liste suivante de paires d'affectation de section :

2-4,6-8

2-3,4-5

5-7,7-9

2-8,3-7

6-6,4-6

2-6,4-8

Pour les premières paires, cette liste signifie :

Au sein de la première paire d'elfes, le premier elfe s'est vu attribuer des sections 2-4(sections 2, 3, et 4), tandis que le second elfe s'est vu attribuer des sections 6-8(sections 6, 7, 8).
Les Elfes de la deuxième paire se sont chacun vu attribuer deux sections.
Les Elfes de la troisième paire ont chacun reçu trois sections : l'une a les sections 5, 6, et 7, tandis que l'autre a également 7, plus 8et 9.
Cet exemple de liste utilise des ID de section à un chiffre pour faciliter le dessin ; votre liste réelle peut contenir des nombres plus grands. Visuellement, ces paires d'affectations de section ressemblent à ceci :

.234.....  2-4

.....678.  6-8

.23......  2-3

...45....  4-5

....567..  5-7

......789  7-9

.2345678.  2-8

..34567..  3-7

.....6...  6-6

...456...  4-6

.23456...  2-6

...45678.  4-8

Certaines paires ont remarqué que l'une de leurs missions contient entièrement l'autre. Par exemple, 2-8contient entièrement 3-7, et 6-6est entièrement contenu par 4-6. Dans les paires où une tâche contient entièrement l'autre, un elfe de la paire nettoierait exclusivement les sections que son partenaire nettoiera déjà, donc celles-ci semblent être celles qui ont le plus besoin d'être reconsidérées. Dans cet exemple, il existe de 2telles paires.

## --- Première partie ---

Dans combien de paires d'affectations une plage contient-elle entièrement l'autre ?

## --- Deuxième partie ---

Il semble qu'il y ait encore pas mal de travaux en double prévus. Au lieu de cela, les Elfes aimeraient connaître le nombre de paires qui se chevauchent .

Dans l'exemple ci-dessus, les deux premières paires ( 2-4,6-8et 2-3,4-5) ne se chevauchent pas, tandis que les quatre paires restantes ( 5-7,7-9, 2-8,3-7, 6-6,4-6et 2-6,4-8) se chevauchent :

5-7,7-9se chevauchent dans une même section, 7.

2-8,3-7chevauche toutes les sections 3à travers 7.

6-6,4-6se chevauchent dans une même section, 6.

2-6,4-8se chevauchent dans les sections 4, 5et 6.

Ainsi, dans cet exemple, le nombre de paires d'affectations qui se chevauchent est 4.

Dans combien de paires d'affectations les plages se chevauchent-elles ?