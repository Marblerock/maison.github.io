import { Question } from './model/question.model';

export const QUESTIONS: Question[] = [
  {
    titre: 'En arrivant au bal ce soir :',
    reponses: [
      {
        texte: 'Tu regardes le bar/buffet et tu repers la meilleure place.',
        maison: 'Serpentard',
      },
      { texte: 'Tu te jettes au milieu du groupe le plus animé.', maison: 'Gryffondor' },
      { texte: 'Tu inspectes le décor et les détails du lieu.', maison: 'Serdaigle' },
      { texte: 'Tu fais le tour pour saluer tout le monde.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Ce qui te motive au quotidien :',
    reponses: [
      { texte: "Apprendre et analyser ce qui t'entoure.", maison: 'Serdaigle' },
      { texte: 'Réussir tes projets et marquer les esprits.', maison: 'Serpentard' },
      { texte: 'Entretenir de bonnes relations et aider.', maison: 'Poufsouffle' },
      { texte: "L'action, le risque et l'inconnu.", maison: 'Gryffondor' },
    ],
  },
  {
    titre: 'Si tu avais un pouvoir magique ultime :',
    reponses: [
      { texte: "L'invisibilité totale.", maison: 'Serpentard' },
      { texte: 'La téléportation instantanée.', maison: 'Gryffondor' },
      { texte: 'Lire dans les pensées.', maison: 'Serdaigle' },
      { texte: "Tout guérir d'un geste.", maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Face à un gros imprévu :',
    reponses: [
      { texte: 'Tu improvises un plan B en 10 secondes.', maison: 'Gryffondor' },
      { texte: 'Tu analyses la situation à tête reposée.', maison: 'Serdaigle' },
      { texte: "Tu t'y mets tout de suite pour régler le problème.", maison: 'Poufsouffle' },
      { texte: 'Tu touvres un contournement pour y arriver.', maison: 'Serpentard' },
    ],
  },
  {
    titre: 'Le compliment idéal après cette soirée :',
    reponses: [
      { texte: "« Personne ne met l'ambiance comme toi. »", maison: 'Gryffondor' },
      { texte: '« Ta conversation était passionnante. »', maison: 'Serdaigle' },
      { texte: '« Tu avais un style incroyable. »', maison: 'Serpentard' },
      { texte: '« Tu es une personne en or. »', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Quelle potion tu commandes au bar ?',
    reponses: [
      {
        texte: 'La Felix Felicis : pour enchaîner les coups de chance insolents ce soir.',
        maison: 'Gryffondor',
      },
      {
        texte: "L'Amortentia : pour répandre un parfum envoûtant auquel personne ne résiste.",
        maison: 'Serpentard',
      },
      {
        texte:
          "L'Elixir de Répartie : pour sortir la phrase parfaite et faire rire à tous les coups.",
        maison: 'Serdaigle',
      },
      {
        texte:
          "L'Elixir d'Endurance : pour garder une pêche d'enfer et danser jusqu'à l'aube sans fatigue.",
        maison: 'Poufsouffle',
      },
    ],
  },
  {
    titre: 'Ton approche du Tournoi des Trois Sorciers :',
    reponses: [
      { texte: 'Etudier le règlement pour en tirer un avantage.', maison: 'Serpentard' },
      { texte: "S'entraîner dur jusqu'à la perfection.", maison: 'Poufsouffle' },
      { texte: 'Étudier la théorie et les bêtes à fond.', maison: 'Serdaigle' },
      { texte: 'Y aller au talent et éviter de trop y penser', maison: 'Gryffondor' },
    ],
  },
  {
    titre: 'Ta plus grande crainte :',
    reponses: [
      { texte: "Rentrer dans la routine et l'ennui.", maison: 'Gryffondor' },
      { texte: 'Échouer ou manquer de reconnaissance.', maison: 'Serpentard' },
      { texte: 'Prendre des décisions sans comprendre.', maison: 'Serdaigle' },
      { texte: 'Décevoir tes proches.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Dans un débat houleux à table :',
    reponses: [
      { texte: 'Tu donnes ton avis franco, sans filtre.', maison: 'Gryffondor' },
      { texte: 'Tu restes neutre avec des arguments factuels.', maison: 'Serdaigle' },
      { texte: 'Tu cherches à apaiser les esprits.', maison: 'Poufsouffle' },
      { texte: 'Tu amènes subtilement les autres à ton idée.', maison: 'Serpentard' },
    ],
  },
  {
    titre: 'Le choix de ta tenue ce soir :',
    reponses: [
      { texte: 'Une pièce originale et unique.', maison: 'Serdaigle' },
      { texte: 'La coupe parfaite, taillée sur mesure.', maison: 'Serpentard' },
      { texte: 'Élégante, mais ultra-confortable.', maison: 'Poufsouffle' },
      { texte: "Des détails marquants qui attirent l'œil.", maison: 'Gryffondor' },
    ],
  },
  {
    titre: 'Ce qui te donne le plus de satisfaction :',
    reponses: [
      { texte: 'Mener un travail long avec rigueur.', maison: 'Poufsouffle' },
      { texte: 'Prendre la tête des opérations.', maison: 'Serpentard' },
      { texte: 'Résoudre un problème jugé impossible.', maison: 'Serdaigle' },
      { texte: "Gérer un défi critique dans l'urgence.", maison: 'Gryffondor' },
    ],
  },
  {
    titre: "Ton état d'esprit pour le bal :",
    reponses: [
      { texte: "Faire la fête jusqu'au bout de la nuit.", maison: 'Gryffondor' },
      { texte: 'Profiter de la présence de tout le monde.', maison: 'Poufsouffle' },
      { texte: 'Découvrir toutes les surprises prévues.', maison: 'Serdaigle' },
      { texte: 'Rendre cette soirée mémorable.', maison: 'Serpentard' },
    ],
  },
  {
    titre: 'Au bal, quelle musique te fait plaisir ?',
    reponses: [
      { texte: 'Une bonne chanson pop bien connue.', maison: 'Gryffondor' },
      { texte: 'Une grande envolée vocale et puissante.', maison: 'Serdaigle' },
      { texte: 'Un musique electro qui bouge', maison: 'Serpentard' },
      { texte: 'Une chanson acoustique calme.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Ton animal magique à Poudlard :',
    reponses: [
      { texte: 'Un lapin.', maison: 'Poufsouffle' },
      { texte: 'Un chat.', maison: 'Gryffondor' },
      { texte: 'Un hibou.', maison: 'Serpentard' },
      { texte: 'Un rat.', maison: 'Serdaigle' },
    ],
  },
  {
    titre: 'Ta boutique sur le Chemin de Traverse :',
    reponses: [
      { texte: 'Un salon de coiffure magique.', maison: 'Serpentard' },
      { texte: "Un magasin d'alchimie.", maison: 'Serdaigle' },
      { texte: 'Un magasin de farces et attrapes.', maison: 'Gryffondor' },
      { texte: 'Un salon de thé.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Le spectacle magique que tu préfères :',
    reponses: [
      { texte: 'Un grand show visuel avec costumes.', maison: 'Serpentard' },
      { texte: 'Un grand concert musical.', maison: 'Gryffondor' },
      { texte: 'Une démonstration de magie très technique.', maison: 'Serdaigle' },
      { texte: 'Un spectacle convivial où tout le monde chante.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Si tu devais fabriquer un cadeau magique pour Loïs & Joanne :',
    reponses: [
      { texte: 'Un album photo animé qui retrace leurs plus beaux moments.', maison: 'Serdaigle' },
      { texte: 'Un talisman de réussite pour leurs projets.', maison: 'Serpentard' },
      { texte: 'Un kit de fête infini avec de la musique pop sans fin.', maison: 'Gryffondor' },
      { texte: 'Un coffret gourmand et réconfortant fait maison.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'En cours de Potions :',
    reponses: [
      { texte: 'Tu suis la recette au milligramme près.', maison: 'Serdaigle' },
      { texte: 'Tu soignes surtout le style et la couleur.', maison: 'Serpentard' },
      { texte: "Tu testes des mélanges à l'instinct.", maison: 'Gryffondor' },
      { texte: 'Tu aides ton voisin en retard.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: "La clé d'une bonne fête :",
    reponses: [
      { texte: "Tout avoir contrôlé et préparé à l'avance.", maison: 'Serdaigle' },
      { texte: 'Une playlist qui fait chanter tout le monde.', maison: 'Gryffondor' },
      { texte: 'Une déco et une tenue qui en jettent.', maison: 'Serpentard' },
      { texte: 'Que tout le monde se sente bienvenu.', maison: 'Poufsouffle' },
    ],
  },
];
