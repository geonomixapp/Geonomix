// « À venir » (demande de l'auteur, 31 oct. 2026 : les dates qui comptent demain, dans la semaine, dans le mois,
// pour avoir une vision à plus long terme). Une entrée = un rendez-vous daté qui aura un effet sur l'économie,
// la géopolitique ou les marchés. Tenu à jour chaque matin par la routine (contenu/ROUTINE_ACTU.md, « À venir ») :
// on ajoute les nouvelles dates sourcées, on retire celles qui sont passées.
//   date / end (facultatif) : AAAA-MM-JJ ; theme : eco | geo | fin | mix ; region ; place : lieu affiché ;
//   title : le rendez-vous ; why : pourquoi ça compte, avec [n] ; news (facultatif) : id d'une actu liée ;
//   sources : { short, name, url } (au moins 2, sinon verify : la raison).
window.GEOCO = window.GEOCO || {};
window.GEOCO.agenda = [
  {
    id: "2026-11-01-opep-production-decembre",
    date: "2026-11-01",
    theme: "eco",
    region: "Moyen-Orient",
    place: "Réunion en ligne",
    title: "L'OPEP+ décide combien de pétrole pomper en décembre",
    why: "Les sept pays qui pilotent la production (Arabie saoudite, Russie, Irak, Koweït, Kazakhstan, Algérie, Oman) se retrouvent chaque mois ; en octobre, ils ont gardé leurs quotas inchangés pour novembre [1][2]. S'ils ouvrent ou ferment le robinet, le prix du baril, et donc celui de l'essence, bouge.",
    sources: [
      { short: "OPEP", name: "OPEP, communiqué du 4 octobre 2026", url: "https://opec.org/pr-detail/1891616-4-october-2026.html" },
      { short: "News on Air", name: "News on Air, 4 octobre 2026", url: "https://newsonair.gov.in/opec-seven-countries-decide-to-maintain-september-2026-oil-production-quotas-for-november/" }
    ]
  },
  {
    id: "2026-11-03-midterms-etats-unis",
    date: "2026-11-03",
    theme: "geo",
    region: "Amériques",
    place: "États-Unis",
    title: "Élections de mi-mandat aux États-Unis",
    why: "Les 435 sièges de la Chambre des représentants, 35 sièges du Sénat et 39 postes de gouverneur sont en jeu [1][2]. Si le Congrès change de camp, le président aura plus de mal à faire passer ses lois, ses budgets et ses droits de douane.",
    sources: [
      { short: "Khaleej Times", name: "Khaleej Times, « US midterm elections 2026: All you need to know »", url: "https://www.khaleejtimes.com/world/americas/us-midterm-elections-2026-voting-explainer" },
      { short: "Al Jazeera", name: "Al Jazeera, 26 octobre 2026", url: "https://aljazeera.com/news/2026/10/26/us-midterm-elections-2026-in-maps-and-charts" }
    ]
  },
  {
    id: "2026-11-05-banque-angleterre-taux",
    date: "2026-11-05",
    theme: "fin",
    region: "Europe",
    place: "Londres",
    title: "La Banque d'Angleterre fixe son taux",
    why: "Décision à midi, heure de Londres, avec un nouveau rapport sur la politique monétaire [1][2]. Un taux plus haut renchérit les crédits des ménages et des entreprises britanniques et fait souvent monter la livre.",
    sources: [
      { short: "Finance Calendar", name: "Finance Calendar, « Bank of England MPC Rate Decision November 2026 »", url: "https://www.financecalendar.com/event/bank-of-england-mpc-rate-decision-november-2026/" },
      { short: "Cambridge Currencies", name: "Cambridge Currencies, « Next Bank of England interest rate decision »", url: "https://cambridgecurrencies.com/next-bank-of-england-interest-rate-decision-date/" }
    ]
  },
  {
    id: "2026-11-09-cop31-antalya",
    date: "2026-11-09",
    end: "2026-11-20",
    theme: "mix",
    region: "Europe",
    place: "Antalya, Turquie",
    title: "COP31 : la conférence mondiale sur le climat s'ouvre en Turquie",
    why: "Deux semaines de négociations à Antalya, avec un sommet des chefs d'État les 11 et 12 novembre ; la Turquie accueille, l'Australie mène les négociations [1][2]. On y discute d'argent pour les pays du Sud, de sortie des énergies fossiles et de marchés du carbone.",
    sources: [
      { short: "CNULCD", name: "Convention des Nations unies sur la lutte contre la désertification, « 2026 UN Climate Change Conference COP31 »", url: "https://www.unccd.int/index.php/events/other/2026-un-climate-change-conference-cop31" },
      { short: "Wikipédia", name: "Wikipédia (anglais), « 2026 United Nations Climate Change Conference »", url: "https://en.wikipedia.org/wiki/2026_United_Nations_Climate_Change_Conference" }
    ]
  },
  {
    id: "2026-11-17-nvidia-resultats",
    date: "2026-11-17",
    theme: "fin",
    region: "Amériques",
    place: "Santa Clara, États-Unis",
    title: "Nvidia publie ses résultats",
    why: "Le fabricant des puces de l'intelligence artificielle présente le trimestre clos le 25 octobre, à 23 h heure de Paris [1][2]. Ses chiffres font souvent bouger toute la Bourse américaine, car Nvidia pèse très lourd dans les grands indices.",
    sources: [
      { short: "Nvidia", name: "Nvidia, « NVIDIA Sets Conference Call for Third-Quarter Financial Results »", url: "https://nvidianews.nvidia.com/news/nvidia-sets-conference-call-for-third-quarter-financial-results-6928873" },
      { short: "CM Elite Group", name: "CM Elite Group, « Nvidia earnings date »", url: "https://www.cmelitegroup.com/knowledge-hub/nvidia-earnings-date/" }
    ]
  },
  {
    id: "2026-11-17-budget-2027-vote",
    date: "2026-11-17",
    theme: "eco",
    region: "Europe",
    place: "Paris",
    title: "Budget 2027 : vote de l'Assemblée nationale",
    why: "Après le débat sur les recettes puis sur les dépenses, les députés doivent voter l'ensemble du budget de l'État et de la Sécurité sociale en première lecture [1] ; le texte doit être adopté avant le 31 décembre, sinon il faut une loi spéciale [1][2].",
    verify: "Date donnée par un seul site spécialisé ; le calendrier du budget a déjà été décalé une fois.",
    sources: [
      { short: "France Transactions", name: "France Transactions, « Loi de finances 2027 »", url: "https://www.francetransactions.com/loi-finances-2027" },
      { short: "Vie publique", name: "Vie publique, « Projet de loi de finances pour 2027 »", url: "https://www.vie-publique.fr/dossierlegislatif/JORFDOLE000054936498" }
    ]
  },
  {
    id: "2026-11-18-apec-shenzhen",
    date: "2026-11-18",
    end: "2026-11-19",
    theme: "geo",
    region: "Asie",
    place: "Shenzhen, Chine",
    title: "Sommet de l'APEC à Shenzhen",
    why: "Les dirigeants des 21 économies d'Asie-Pacifique, dont les États-Unis et la Chine, se retrouvent dans la ville des géants chinois de la tech [1][2]. Une rencontre entre dirigeants américain et chinois peut y relancer ou geler la guerre commerciale.",
    sources: [
      { short: "Shenzhen", name: "Gouvernement de Shenzhen, « APEC 2026 »", url: "https://www.sz.gov.cn/en_szgov/news/infocus/APEC2026/News/content/post_12977146.html" },
      { short: "CGTN", name: "CGTN, 17 octobre 2026", url: "https://news.cgtn.com/news/2026-10-17/APEC-2026-30-days-to-go-until-Shenzhen-hosts-world-leaders-1RjNBWgfQxG/p.html" }
    ]
  },
  {
    id: "2026-11-29-opep-reunion-semestrielle",
    date: "2026-11-29",
    theme: "eco",
    region: "Moyen-Orient",
    place: "Vienne",
    title: "Grande réunion de l'OPEP+ sur la production de 2027",
    why: "La réunion de fin d'année de l'OPEP+ fixe les grandes lignes de la production de l'année suivante [1]. C'est elle qui donne le ton du prix du pétrole pour l'hiver.",
    verify: "Date annoncée en août par une seule source ; pas encore confirmée par l'OPEP.",
    sources: [
      { short: "Bernama", name: "Bernama, août 2026", url: "https://www.bernama.com/en/news.php?id=2589332" }
    ]
  },
  {
    id: "2026-12-09-fed-taux",
    date: "2026-12-09",
    theme: "fin",
    region: "Amériques",
    place: "Washington",
    title: "La Fed fixe son taux, avec ses prévisions pour 2027",
    why: "Dernière réunion de l'année de la banque centrale américaine, avec ses prévisions et le « graphique à points » où chaque dirigeant indique où il voit les taux [1][2]. Le dollar, les crédits et les Bourses du monde entier en dépendent.",
    sources: [
      { short: "Fed Rate Calc", name: "Fed Rate Calc, « FOMC Meeting Schedule 2026 »", url: "https://fedratecalc.com/fomc-meeting-schedule/" },
      { short: "Eco3min", name: "Eco3min, « FOMC Meeting Calendar »", url: "https://eco3min.fr/en/fomc-meeting-calendar/" }
    ]
  },
  {
    id: "2026-12-14-g20-miami",
    date: "2026-12-14",
    end: "2026-12-15",
    theme: "geo",
    region: "Amériques",
    place: "Miami, États-Unis",
    title: "Sommet du G20 à Miami",
    why: "Les vingt plus grandes économies se retrouvent au golf de Doral, propriété du président américain [1][2]. Commerce, dettes des pays pauvres et guerre en Ukraine devraient dominer.",
    sources: [
      { short: "Wikipédia", name: "Wikipédia (anglais), « 2026 G20 Miami summit »", url: "https://en.wikipedia.org/wiki/2026_G20_Miami_summit" },
      { short: "G20 Research Group", name: "G20 Research Group, université de Toronto", url: "https://g20.utoronto.ca/summits/2026miami.html" }
    ]
  },
  {
    id: "2026-12-17-bce-taux",
    date: "2026-12-17",
    theme: "fin",
    region: "Europe",
    place: "Francfort",
    title: "La BCE fixe son taux pour la zone euro",
    why: "Dernière décision de l'année de la Banque centrale européenne, avec ses nouvelles prévisions de croissance et d'inflation [1][2]. Elle fixe le coût des crédits immobiliers et la rémunération de l'épargne dans les pays de l'euro.",
    sources: [
      { short: "Finance Calendar", name: "Finance Calendar, « ECB Rate Decision December 2026 »", url: "https://www.financecalendar.com/event/ecb-rate-decision-december-2026/" },
      { short: "Eco3min", name: "Eco3min, « ECB Meeting Calendar »", url: "https://eco3min.fr/en/ecb-meeting-calendar/" }
    ]
  }
];
