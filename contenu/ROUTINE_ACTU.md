# Mise à jour quotidienne de l'actu

Consigne suivie chaque matin pour ajouter les actus du jour dans `data/news.js`.
Elle peut être modifiée librement : la mise à jour automatique relit ce fichier à chaque fois.

## Ce qu'on cherche

- **12 à 15 actus** du jour ou de la veille, **économie et géopolitique** (elles sont liées) (demande de l'auteur, 30 oct. 2026 : « mets-en plus, des intéressantes »). Ne pas s'arrêter à 5 ou 6 : si un sujet n'a pas 2 sources sérieuses, en chercher un autre plutôt que de publier moins.
- **Les grands mouvements aussi, pas seulement les sujets de niche** (demande de l'auteur, 31 oct. 2026) : chaque jour, 3 à 4 actus « larges » qui racontent ce qui secoue un pays ou une région : manifestations et révoltes (en Europe aussi), grèves, crises politiques, gouvernements qui tombent, élections, coups d'État, tensions entre grandes puissances, chocs économiques (krach, crise de la dette, flambée des prix). Même si les grands médias en parlent, on les met, en expliquant le pourquoi (causes, enjeux économiques, ce que ça change).
- **Le côté finance** (demande de l'auteur, 31 oct. 2026 ; le rideau Finance est réservé à Geonomix+, il doit donc être bien rempli) : chaque jour **5 à 6 actus `theme: "fin"`**, en plus des 12 à 15 autres. Chacune **explique le mécanisme** (bloc `deep.explainer` « Comment ça marche » : pourquoi une OPA fait monter l'action, pourquoi les taux font baisser les obligations…) et donne **un maximum d'exemples passés** dans le champ `past` (au moins 2, idéalement 3 ou 4 : krachs, OPA, faillites, chocs pétroliers, crises de change, ce que l'action ou le marché a fait ensuite). Thèmes : les entreprises et les marchés : rachats et fusions, entrées en Bourse, résultats qui surprennent, faillites, krachs ou envolées d'une action, d'une Bourse ou d'une monnaie, fonds souverains, matières premières vues côté marchés. Toujours avec le lien à la géopolitique ou à l'économie (pourquoi ça bouge).
- **Le champ `markets` (« Côté marchés »)** sur toute actu, même éco ou géo, quand des entreprises cotées sont directement touchées. Exemple : un pays découvre un gisement de pétrole ou de gaz → quelles compagnies l'exploitent, ce qu'a fait leur action, ce que ça peut leur rapporter. Les variations de cours viennent d'une source (agence, média financier, jamais de mémoire) ; si on ne trouve pas la variation, on écrit seulement pourquoi l'entreprise est concernée, sans `move`. On explique, on ne conseille jamais d'acheter ou de vendre.
- **France et Europe aussi** (demande de l'auteur) : chaque jour **2 à 3 actus sur la France** (économie, budget, entreprises, énergie, diplomatie, faits marquants) et **2 à 3 sur le reste de l'Europe** (UE, voisins, Royaume-Uni, Balkans…), en plus du reste du monde.
- **Partout dans le monde**, pas seulement l'Occident : chaque jour au moins une actu en **Afrique**, une en **Asie**, une en **Amérique latine**, une au **Moyen-Orient** et une en **Europe ou Asie centrale**.
- **De nouveaux pays sur le globe** : au moins **4 actus sur des pays qui n'ont pas eu d'actu depuis 14 jours** (regarder les `geo` des actus existantes). On cherche « sous la surface du glacier » : ce dont les grands médias français parlent peu.
- **Le dimanche** : en plus, un « tour du monde » de 4 à 6 pays rarement traités (Asie centrale, Pacifique, Caraïbes, Afrique australe, Balkans…).
- **Le globe change d'un jour à l'autre** : on évite de remettre les mêmes pays que la veille, sauf fait nouveau important. Les points se placent sur la capitale ou le lieu précis (pas toujours Washington ou Pékin).

## Échelles d'importance : chaque lecteur voit d'abord ce qui le touche (demande de l'auteur, 31 oct. 2026)

L'appli classe les actus selon la zone du lecteur (deviné d'après son fuseau horaire) : **Europe, Amérique du Nord, Amérique latine, Asie, Océanie, Moyen-Orient, Afrique**. À date égale passent d'abord les actus de sa zone, puis celles qui la touchent, celles qui ont un effet mondial, celles des grandes puissances et des grands voisins ; le reste descend. Pour que ça marche :

- **Champ `zones`** : les zones que l'actu touche directement, en plus de l'endroit où elle se passe (ex. le Canada qui se rapproche de l'UE : `["Amérique du Nord", "Europe"]` ; un accord Chine-Brésil : `["Asie", "Amérique latine"]`).
- **Champ `impact: "monde"`** quand l'effet est mondial et direct sur nos économies : Ormuz, le prix du pétrole, la Fed, une guerre commerciale entre grandes puissances, un krach. À réserver à 2 ou 3 actus par jour au plus.
- **Assez d'actus pour chaque zone**, pour qu'un lecteur en Argentine, au Canada ou au Japon ait aussi ses actus en tête : chaque jour au moins **2 actus d'Amérique latine** (peso argentin, relations Argentine-Chili, Brésil, Mexique…), **2 d'Amérique du Nord** (États-Unis, Canada), **2 d'Asie** (Chine d'abord, Japon, Inde, Corée), 1 d'Océanie si possible, en plus de l'Europe, du Moyen-Orient et de l'Afrique.
- **Pour un lecteur européen**, l'ordre d'importance est : Europe (et France), puis Chine et Asie, États-Unis et Amérique du Nord, puis le reste, sauf effet direct sur nos économies (Ormuz, pétrole, gaz) qui remonte avec `impact: "monde"`.
- **Ne jamais rater les grandes actus** qui concernent l'Europe, l'Amérique du Nord ou la Chine, même si les grands médias en parlent beaucoup (ex. le Canada qui veut devenir membre associé de l'UE).

## À venir : les dates qui comptent (demande de l'auteur, 31 oct. 2026)

Le lecteur doit voir loin : ce qui va se passer demain, dans la semaine, dans le mois. Chaque matin, mettre à jour `data/agenda.js` :

- **Retirer** les rendez-vous passés (`check-content` les signale) et **ajouter les nouveaux** trouvés en cherchant : élections, sommets (G7, G20, UE, OTAN, BRICS, APEC, COP), réunions des banques centrales (Fed, BCE, Banque d'Angleterre, Banque du Japon, banques des pays émergents), réunions de l'OPEP+, votes de budgets et de lois, entrées en vigueur (droits de douane, sanctions, accords, nouvelles règles européennes), fins de trêve ou d'ultimatum, résultats des grandes entreprises (Nvidia, Apple, TotalEnergies, LVMH…), introductions en Bourse, publications attendues (emploi américain, inflation de la zone euro, PIB chinois) quand elles peuvent faire bouger les marchés.
- Viser **15 à 25 rendez-vous** sur les 30 prochains jours, dont **au moins 5 dans les 7 prochains jours**, mélangés entre éco, géo et finance, partout dans le monde (France et Europe compris).
- Chaque rendez-vous : `title` clair, `why` qui dit en une ou deux phrases **ce que ça peut changer** (prix, taux, emploi, rapports de force), sourcé `[n]`, 2 sources (calendrier officiel de préférence), sinon `verify`. Si une actu du jour en parle, mettre son id dans `news`.
- Traduire `title`, `why` (et `verify`) en anglais et en espagnol comme les actus (clés `agenda.<id>.…`).

Et sur chaque actu, quand une suite est connue : le champ **`next`** (« Et après ? ») : `[{ when: "5 novembre", what: "La Banque d'Angleterre décide de son taux [3]." }]`, la prochaine étape datée (vote, sommet, échéance, décision attendue). Toujours sourcé.

## Des faits marquants, pas des statistiques (le plus important après la fiabilité)

Une actu, c'est **un fait nouveau qui change quelque chose** : une décision, un accord, une rupture, une crise, une élection, un conflit, un mouvement social, un choc sur les marchés. Pas seulement « le chiffre du mois est sorti ».

- **De l'actualité, pas des anecdotes** (demande de l'auteur, 31 oct. 2026) : pas de « fun fact », de curiosité ou de record insolite pour faire joli ; les anecdotes ont leur place ailleurs dans l'appli. « Varier », c'est varier les pays, les sujets et les catégories de vraies actualités, pas ajouter du léger.

- **Deux actus « chiffres » au plus par jour** : publication d'inflation, décision de taux d'une banque centrale, prévision de croissance (FMI, Banque mondiale…). Et seulement si le chiffre est vraiment frappant (record, retournement, crise) ou qu'il touche un grand pays. « L'inflation de X passe de 5,2 % à 5,6 % » ne suffit pas.
- **Au moins 6 actus « faits »**, en variant les catégories (pas deux fois la même dans la journée si possible) :
  - **diplomatie et alliances** : accords, ruptures, sommets, visites qui changent quelque chose ;
  - **conflits et sécurité**, avec leurs effets économiques (routes, prix, sanctions) ;
  - **ressources et énergie** : mines, pétrole, gaz, eau, terres rares, nationalisations, découvertes ;
  - **routes et infrastructures** : ports, canaux, chemins de fer, câbles sous-marins, oléoducs, barrages ;
  - **technologie et industrie** : puces, IA, voitures électriques, usines, rachats géants ;
  - **société et économie** : élections à enjeu économique, migrations, manifestations, alimentation, chocs climatiques.
- **Le test avant d'ajouter une actu** : « Qu'est-ce qui a changé aujourd'hui, et pourquoi c'est important ? » Si la réponse tient en « un chiffre a un peu bougé », on cherche autre chose.
- **Le titre donne envie de lire** : il dit le fait le plus frappant, sans jargon (« La Guinée exporte son premier fer de Simandou et bouscule l'Australie » plutôt que « Guinée : hausse des exportations »).
- **Une actu sur les taux, l'inflation, les droits de douane, les détroits, les puces, les sanctions ou le dollar** : mettre l'id du cours lié dans `dossiers` (l'appli affiche en haut de l'actu un lien « Le cours pour comprendre »).

## Dossiers géopolitiques à suivre

À vérifier régulièrement, et à traiter dès qu'il y a du nouveau (avec sources) :
- **Amériques** : droits de douane États-Unis–Canada et États-Unis–Mexique, révision de l'accord commercial nord-américain (ACEUM/USMCA), accord UE-Mercosur et tensions au sein du Mercosur, migrations et cartels, canal de Panama, pétrole du Guyana.
- **Europe** : guerre en Ukraine et son économie, réarmement, énergie, Balkans, Caucase.
- **Moyen-Orient** : Ormuz et l'Iran, Gaza et la Cisjordanie, Liban, Syrie, Yémen et la mer Rouge.
- **Afrique** : Sahel, Soudan, Éthiopie-Érythrée, RD Congo, dettes et matières premières.
- **Asie** : Chine et Taïwan, mer de Chine méridionale, Inde-Pakistan, Birmanie, Corée du Nord.
- Priorité aux sujets qui ont un **impact concret** : prix (énergie, alimentation), emploi, monnaies, dettes, matières premières (pétrole, gaz, uranium, cobalt, cuivre, terres rares, nickel, or…), commerce, sanctions, conflits qui touchent l'économie.
- On évite le fait divers et la politique intérieure sans enjeu économique.

## Fiabilité (le plus important)

- Chaque fait chiffré ou rapporté est suivi de `[n]`, qui renvoie à la n-ième source de la liste `sources`.
- Sources de préférence : agences (Reuters, AFP, AP), grands médias économiques, institutions (FMI, Banque mondiale, banques centrales, instituts statistiques comme l'Insee ou Eurostat).
- **Jamais de chiffre inventé ni « de mémoire »**. Si un chiffre n'est pas trouvé dans une source, on ne l'écrit pas.
- Si les sources se contredisent, on prend la plus officielle et on reste prudent dans la formulation.
- Les liens doivent être ceux des articles réellement consultés.
- **Plusieurs sources de qualité par actu** (demande de l'auteur, 29 oct. 2026) : au moins 2 sources indépendantes et sérieuses (agences, grands journaux, institutions, médias locaux reconnus), qui confirment les faits et les chiffres principaux. Un communiqué officiel compte comme une source, mais ce qu'il annonce s'écrit comme une annonce (« selon le gouvernement… »).
- **Sinon, on le dit** : si on ne trouve qu'une source, ou une source fragile (blog, média partisan, chiffre repris d'un seul article, date imprécise), l'actu reçoit un champ `verify` avec la raison en une phrase (ex. « Une seule source (BusinessDay) : chiffres à confirmer dans les données du FMI. »). L'appli affiche alors « ⚠️ Source à vérifier » sous le titre et dans les listes. À traduire en en/es comme le reste. `check-content` signale toute actu à une seule source sans `verify`.
- Si aucune source sérieuse ne confirme un fait, on ne publie pas l'actu.
- **Ne jamais publier zéro actu** (31 oct. 2026 : la routine s'est arrêtée sans rien publier). Si les sites de presse ne s'ouvrent pas (réseau bloqué), **les résultats de la recherche web comptent comme sources** : titre, résumé, date et adresse de chaque article trouvé. Deux résultats de médias différents et sérieux qui disent la même chose suffisent ; on ne garde que les faits et chiffres présents dans ces résumés, et on met `verify` quand c'est mince (une seule source, résumé flou, date incertaine). Les sujets de la veille (J-1) sont acceptés si ceux du jour manquent.

## Format d'une actu

Copier une actu existante de `data/news.js` et remplir :

- `id` : `AAAA-MM-JJ-sujet-court`
- `date` : la date du jour (`AAAA-MM-JJ`)
- `theme` : `eco`, `geo`, `fin` (finance : entreprises, Bourse, marchés) ou `mix` (éco + géo)
- `region` : `Europe`, `Amériques`, `Moyen-Orient`, `Afrique` ou `Asie`
- `title` : titre clair, sans jargon
- `summary` : une ou deux phrases
- `geo` : `[{ name: "Nom complet", label: "Pays", coords: [longitude, latitude] }]` (le point sur le globe)
- `points` : 3 phrases « ce qui s'est passé », avec sources
- `why` : 1 à 3 paragraphes « pourquoi c'est important », la première phrase doit se lire seule
- `forMe` : « Et moi, dans tout ça ? », l'impact concret pour un lecteur français
- `figures` : 2 ou 3 chiffres clés avec `src`
- `dossiers` : les cours liés (ids de `data/content.js`)
- `sources` : `{ short, name, url }` (au moins 2)
- `markets` (facultatif, voir « Le côté finance ») : `{ text: "phrase sourcée (facultatif)", items: [{ name: "TotalEnergies", ticker: "TTE", move: "+3,1 %", why: "Opère le gisement avec 40 % des parts [2] ; l'action a gagné 3,1 % à Paris le jour de l'annonce [3]." }] }` ; une variation (`move`) doit être sourcée dans `why`
- `past` (obligatoire pour une actu `fin`, facultatif ailleurs) : `{ title: "phrase d'introduction (facultatif)", items: [{ when: "2008", what: "Le précédent, daté et chiffré [4].", lesson: "Ce qu'il a donné pour les marchés ou les investisseurs [5]." }] }` ; chaque `what` est sourcé (les chiffres historiques aussi, jamais de mémoire)
- `zones` (facultatif) : zones touchées en plus du lieu (« Europe », « Amérique du Nord », « Amérique latine », « Asie », « Océanie », « Moyen-Orient », « Afrique ») ; `impact: "monde"` (facultatif) si l'effet est mondial et direct
- `next` (facultatif) : `[{ when, what }]`, la prochaine étape datée et sourcée
- `verify` (facultatif) : la raison si la source est unique ou fragile (voir « Fiabilité »)

Les nouvelles actus se placent **en haut** du tableau. Le globe de l'accueil affiche les actus de la date la plus récente.

## Ton

- Tutoiement, phrases courtes, aucun mot technique sans explication.
- Neutre et factuel sur les sujets politiques : on explique, on ne prend pas parti.

## Rubrique Conflits (`data/conflits.js`)

- **Chaque début de mois** (du 1er au 7) : mettre à jour le baromètre avec la dernière édition de CrisisWatch (International Crisis Group) : le mois, le nombre de situations qui s'aggravent, qui s'améliorent et d'alertes, une phrase sourcée par pays, et les couleurs de la carte (`map.countries`).
- **Une fois par an**, quand les nouvelles données sortent : SIPRI ventes d'armes (mars) et dépenses militaires (avril), UCDP (juin), indice et liste à surveiller d'ACLED (décembre). Mettre à jour les chiffres, les graphiques et le tableau de bord (`latest` dans `data/indicators.js`).
- Mêmes règles de fiabilité : chaque chiffre avec sa source, rien de mémoire.

## Avant de publier

1. `node tools/check-content.mjs` doit afficher « Contenu OK ».
2. `node tools/build-lettre.mjs` fabrique la lettre du matin en PDF (`lettres/AAAA-MM-JJ.pdf`) et met à jour `data/lettres.js`. Vérifier qu'elle tient sur une page.
3. Si un chiffre de l'onglet Chiffres (`data/indicators.js`) a été publié officiellement depuis (inflation, chômage), le mettre à jour avec sa date et sa source.
4. On garde les actus des 14 derniers jours ; les plus anciennes peuvent être retirées.

## Traductions

L'appli s'affiche dans la langue du téléphone (français, anglais, espagnol, allemand, italien, portugais). Les actus sont traduites en **anglais et en espagnol** :

1. `node tools/i18n-build.mjs --missing=en > /tmp/a-traduire.json` liste les textes pas encore traduits (en général, les actus du jour).
2. Traduire chaque valeur (mêmes clés, mêmes [n], ton neutre, « you » / « tú », nombres au format de la langue) et enregistrer le résultat dans `contenu/traductions/en/contenu-AAAA-MM-JJ.json` ; idem pour `es`.
3. `node tools/i18n-build.mjs` régénère `data/i18n/*.js` (les traductions des actus retirées sont écartées automatiquement).
4. Les textes de l'interface sont dans `contenu/traductions/<langue>/ui.json` : en cas de nouveau bouton ou titre, ajouter sa traduction.

Une actu non traduite s'affiche en français : ce n'est pas bloquant, mais `check-content` le signale.

## Publier l'aperçu

Aperçu privé de l'appli : https://claude.ai/artifact/UxRba3w8oMS1KWe774hciT

1. `python3 tools/build-preview.py` prépare le dossier `.preview/`.
2. Republier ce dossier sur la même adresse (outil Artifact, `url` ci-dessus, `root` = `.preview`, page = `.preview/index.html`, et tous les autres fichiers du dossier dans `files`).
