import { Question } from './model/question.model';

export const QUESTIONS: Question[] = [
  {
    titre: 'En arrivant au bal ce soir :',
    reponses: [
      { texte: 'Tu filtres qui est là depuis le bar avec un verre.', maison: 'Serpentard' },
      { texte: 'Tu te jettes au milieu du groupe le plus animé.', maison: 'Gryffondor' },
      { texte: 'Tu inspectes le décor et les détails du lieu.', maison: 'Serdaigle' },
      { texte: 'Tu fais le tour pour saluer tout le monde.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Une bourse de Gallions traîne par terre :',
    reponses: [
      { texte: 'Tu la déposes au buffet pour son propriétaire.', maison: 'Poufsouffle' },
      { texte: 'Tu demandes à voix haute à qui elle est.', maison: 'Gryffondor' },
      { texte: 'Tu la fouilles pour trouver un indice.', maison: 'Serdaigle' },
      { texte: 'Tu la gardes si personne ne réclame.', maison: 'Serpentard' },
    ],
  },
  {
    titre: 'Ce qui te drive au quotidien :',
    reponses: [
      { texte: "Apprendre et analyser ce qui t'entoure.", maison: 'Serdaigle' },
      { texte: 'Réussir tes projets et marquer les esprits.', maison: 'Serpentard' },
      { texte: 'Entretenir de bonnes relations et aider.', maison: 'Poufsouffle' },
      { texte: "L'action, le risque et l'inconnu.", maison: 'Gryffondor' },
    ],
  },
  {
    titre: 'Un pouvoir magique ultime :',
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
      { texte: 'Tu contournes les règles pour y arriver.', maison: 'Serpentard' },
    ],
  },
  {
    titre: 'Le compliment idéal après la soirée :',
    reponses: [
      { texte: "« Personne ne met l'ambiance comme toi. »", maison: 'Gryffondor' },
      { texte: '« Ta conversation était passionnante. »', maison: 'Serdaigle' },
      { texte: '« Tu avais un style incroyable. »', maison: 'Serpentard' },
      { texte: '« Tu es une personne en or. »', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Quelle potion tu testes au bar ?',
    reponses: [
      { texte: 'Dorée : booste la confiance en soi.', maison: 'Gryffondor' },
      { texte: 'Argentée : rend ultra-perceptif.', maison: 'Serdaigle' },
      { texte: 'Violette : rend terriblement persuasif.', maison: 'Serpentard' },
      { texte: 'Ambrée : procure un bien-être total.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Ton approche du Tournoi des Trois Sorciers :',
    reponses: [
      { texte: 'Exploiter les failles du règlement.', maison: 'Serpentard' },
      { texte: "S'entraîner dur jusqu'à la perfection.", maison: 'Poufsouffle' },
      { texte: 'Étudier la théorie et les bêtes à fond.', maison: 'Serdaigle' },
      { texte: "Fonder la victoire sur l'audace le jour J.", maison: 'Gryffondor' },
    ],
  },
  {
    titre: 'Ton accessoire magique de bal :',
    reponses: [
      { texte: 'Une montre qui remonte le temps de 5 min.', maison: 'Serdaigle' },
      { texte: 'Une bague qui protège des mauvaises intentions.', maison: 'Serpentard' },
      { texte: 'Une tenue qui ne se salit ni se froisse jamais.', maison: 'Poufsouffle' },
      { texte: 'Une broche qui brille quand tu prends la parole.', maison: 'Gryffondor' },
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
    titre: 'Un portrait refuse de te laisser passer :',
    reponses: [
      { texte: 'Tu le flattes ou trouves son point faible.', maison: 'Serpentard' },
      { texte: 'Tu cherches le mot de passe exact.', maison: 'Serdaigle' },
      { texte: "Tu insistes avec fermeté jusqu'à ce qu'il cède.", maison: 'Gryffondor' },
      { texte: "Tu lui demandes poliment de l'aide.", maison: 'Poufsouffle' },
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
    titre: 'Au bal, quelle musique te fait danser ?',
    reponses: [
      { texte: 'Une bonne chanson pop bien connue.', maison: 'Gryffondor' },
      { texte: 'Une grande envolée vocale et puissante.', maison: 'Serdaigle' },
      { texte: 'Un grand numéro de cabaret / spectacle.', maison: 'Serpentard' },
      { texte: 'Une chanson acoustique calme.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Ton animal magique à Poudlard :',
    reponses: [
      { texte: 'Un boursouflet super câlin.', maison: 'Poufsouffle' },
      { texte: "Un lapin d'Éclipse rapide et joueur.", maison: 'Gryffondor' },
      { texte: 'Un grand hibou très classe.', maison: 'Serpentard' },
      { texte: 'Un boursouf curieux et observateur.', maison: 'Serdaigle' },
    ],
  },
  {
    titre: 'Ta boutique sur le Chemin de Traverse :',
    reponses: [
      { texte: 'Un salon de coiffure / beauté magique.', maison: 'Serpentard' },
      { texte: "Un labo d'élixirs ultra-précis.", maison: 'Serdaigle' },
      { texte: 'Un magasin de farces et attrapes.', maison: 'Gryffondor' },
      { texte: 'Un salon de thé super chaleureux.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Le spectacle magique que tu préfères :',
    reponses: [
      { texte: 'Un grand show visuel avec costumes.', maison: 'Serpentard' },
      { texte: 'Un grand concert dynamique.', maison: 'Gryffondor' },
      { texte: 'Une démonstration de magie très technique.', maison: 'Serdaigle' },
      { texte: 'Un spectacle convivial où tout le monde chante.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Ton sort du quotidien :',
    reponses: [
      { texte: 'Glamouris : changer de coiffure/style en un instant.', maison: 'Serpentard' },
      { texte: 'Controllis : vérifier la qualité parfaite de tout.', maison: 'Serdaigle' },
      { texte: 'Accio : tout faire venir à toi sans bouger.', maison: 'Gryffondor' },
      { texte: 'Reparo : réparer facilement les objets cassés.', maison: 'Poufsouffle' },
    ],
  },
  {
    titre: 'Si tu lances ton entreprise magique :',
    reponses: [
      { texte: 'Être ta propre patronne et réussir.', maison: 'Serpentard' },
      { texte: 'Offrir une qualité zéro défaut.', maison: 'Serdaigle' },
      { texte: "Mettre de l'ambiance et du mouvement.", maison: 'Gryffondor' },
      { texte: 'Aider les gens et faire du bien.', maison: 'Poufsouffle' },
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
