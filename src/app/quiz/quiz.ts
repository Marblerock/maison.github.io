import { Component, computed, signal } from '@angular/core';
import { Maison, Question } from '../model/question.model';

@Component({
  imports: [],
  selector: 'app-quiz',
  styleUrl: './quiz.scss',
  templateUrl: './quiz.html',
})
export class Quiz {
  started = signal(false);

  readonly maisonDetails: Record<
    Maison,
    { label: string; couleur: string; cadeau: string; description: string }
  > = {
    Gryffondor: {
      label: 'Gryffondor',
      couleur: 'Rouge & Or',
      cadeau: 'reçoit son pin’s ou bracelet rouge et or',
      description: 'Tu as la bravoure, le courage et l’énergie de l’aventure.',
    },
    Serpentard: {
      label: 'Serpentard',
      couleur: 'Vert & Argent',
      cadeau: 'reçoit son pin’s ou bracelet vert et argent',
      description: 'Tu as le flair, la détermination et une présence qui impose le respect.',
    },
    Serdaigle: {
      label: 'Serdaigle',
      couleur: 'Bleu & Bronze',
      cadeau: 'reçoit son pin’s ou bracelet bleu et bronze',
      description: 'Tu as la curiosité, l’intelligence et le goût de la connaissance.',
    },
    Poufsouffle: {
      label: 'Poufsouffle',
      couleur: 'Jaune & Noir',
      cadeau: 'reçoit son pin’s ou bracelet jaune et noir',
      description: 'Tu as la gentillesse, la loyauté et un cœur qui rassure les autres.',
    },
  };

  // Questions personnalisées pour la soirée
  questions: Question[] = [
    {
      titre: "Pour être sur ton 31 ce soir, ton accessoire ultime c'est :",
      reponses: [
        { texte: 'Un accessoire rouge et or qui en jette', maison: 'Gryffondor' },
        { texte: 'Un bijou ou une cravate en argent/vert serpent', maison: 'Serpentard' },
        { texte: 'Un détail épuré, vintage et très classe', maison: 'Serdaigle' },
        { texte: "Quelque chose d'élégant mais surtout confortable", maison: 'Poufsouffle' },
      ],
    },
    {
      titre: 'Au bal, face au buffet des potions :',
      reponses: [
        { texte: 'Tu portes un toast et tu lances la piste de danse', maison: 'Gryffondor' },
        { texte: 'Tu repères discrètement les meilleures bouteilles', maison: 'Serpentard' },
        { texte: 'Tu analyses la composition des cocktails', maison: 'Serdaigle' },
        { texte: "Tu t'assures que tout le monde a un verre rempli", maison: 'Poufsouffle' },
      ],
    },
    // Ajoute tes autres questions ici
  ];

  indexQuestion = signal(0);
  scores = signal<Record<Maison, number>>({
    Gryffondor: 0,
    Serpentard: 0,
    Serdaigle: 0,
    Poufsouffle: 0,
  });

  estFini = computed(() => this.indexQuestion() >= this.questions.length);

  maisonGagnante = computed<Maison | null>(() => {
    if (!this.estFini()) return null;
    const currentScores = this.scores();
    const maisons = Object.keys(currentScores) as Maison[];

    return maisons.reduce<Maison>(
      (winner, current) => (currentScores[winner] >= currentScores[current] ? winner : current),
      maisons[0],
    );
  });

  repondre(maison: Maison) {
    this.scores.update((s) => ({ ...s, [maison]: s[maison] + 1 }));
    this.indexQuestion.update((i) => i + 1);
  }

  startQuiz() {
    this.started.set(true);
  }

  recommencer() {
    this.scores.set({ Gryffondor: 0, Serpentard: 0, Serdaigle: 0, Poufsouffle: 0 });
    this.indexQuestion.set(0);
    this.started.set(false);
  }
}
