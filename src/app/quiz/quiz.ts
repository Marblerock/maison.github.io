import { Component, computed, signal } from '@angular/core';
import { Maison, Question } from '../model/question.model';

@Component({
  imports: [],
  selector: 'app-quiz',
  styleUrl: './quiz.scss',
  templateUrl: './quiz.html',
})
export class Quiz {
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
    return (Object.keys(currentScores) as Maison[]).reduce((a, b) =>
      currentScores[a] > currentScores[b] ? a : b,
    );
  });

  repondre(maison: Maison) {
    this.scores.update((s) => ({ ...s, [maison]: s[maison] + 1 }));
    this.indexQuestion.update((i) => i + 1);
  }

  recommencer() {
    this.scores.set({ Gryffondor: 0, Serpentard: 0, Serdaigle: 0, Poufsouffle: 0 });
    this.indexQuestion.set(0);
  }
}
