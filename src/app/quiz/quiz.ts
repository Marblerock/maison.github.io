import { Component, computed, signal } from '@angular/core';
import { Maison, Question } from '../model/question.model';
import { QUESTIONS } from '../questions';

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
      cadeau: 'reçoit ton bracelet rouge',
      description: 'Tu as la bravoure, le courage et l’énergie de l’aventure.',
    },
    Serpentard: {
      label: 'Serpentard',
      couleur: 'Vert & Argent',
      cadeau: 'reçoit ton bracelet vert',
      description: 'Tu as le flair, la détermination et une présence qui impose le respect.',
    },
    Serdaigle: {
      label: 'Serdaigle',
      couleur: 'Bleu & Bronze',
      cadeau: 'reçoit ton bracelet bleu ',
      description: 'Tu as la curiosité, l’intelligence et le goût de la connaissance.',
    },
    Poufsouffle: {
      label: 'Poufsouffle',
      couleur: 'Jaune & Noir',
      cadeau: 'reçoit ton bracelet jaune',
      description: 'Tu as la gentillesse, la loyauté et un cœur qui rassure les autres.',
    },
  };

  questions: Question[] = [];

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
    const maxScore = Math.max(...maisons.map((maison) => currentScores[maison]));
    const gagnantes = maisons.filter((maison) => currentScores[maison] === maxScore);

    if (gagnantes.length > 1) {
      return gagnantes[Math.floor(Math.random() * gagnantes.length)];
    }

    return maisons.reduce<Maison>(
      (winner, current) => (currentScores[winner] >= currentScores[current] ? winner : current),
      maisons[0],
    );
  });

  initialiserQuiz(): void {
    const maisons: Maison[] = ['Gryffondor', 'Serpentard', 'Serdaigle', 'Poufsouffle'];
    const compteurs: Record<Maison, number> = {
      Gryffondor: 0,
      Serpentard: 0,
      Serdaigle: 0,
      Poufsouffle: 0,
    };

    const questionsMelangees = this.melangerTableau(
      QUESTIONS.map((question) => ({
        ...question,
        reponses: this.melangerTableau(question.reponses),
      })),
    );

    this.questions = questionsMelangees.map((question) => {
      const maisonExclue = this.choisirMaisonExclue(compteurs, maisons);
      const reponsesSelectionnees = this.melangerTableau(
        question.reponses.filter((reponse) => reponse.maison !== maisonExclue),
      ).slice(0, 3);

      for (const reponse of reponsesSelectionnees) {
        compteurs[reponse.maison] += 1;
      }

      return {
        titre: question.titre,
        reponses: reponsesSelectionnees,
      };
    });

    this.scores.set({ Gryffondor: 0, Serpentard: 0, Serdaigle: 0, Poufsouffle: 0 });
    this.indexQuestion.set(0);
    this.started.set(false);
  }

  private choisirMaisonExclue(compteurs: Record<Maison, number>, maisons: Maison[]): Maison {
    const maxCompte = Math.max(...maisons.map((maison) => compteurs[maison]));
    const maisonsMax = maisons.filter((maison) => compteurs[maison] === maxCompte);
    return maisonsMax[Math.floor(Math.random() * maisonsMax.length)];
  }

  private melangerTableau<T>(items: T[]): T[] {
    const copie = [...items];

    for (let index = copie.length - 1; index > 0; index--) {
      const indexAleatoire = Math.floor(Math.random() * (index + 1));
      [copie[index], copie[indexAleatoire]] = [copie[indexAleatoire], copie[index]];
    }

    return copie;
  }

  repondre(maison: Maison) {
    this.scores.update((s) => ({ ...s, [maison]: s[maison] + 1 }));
    this.indexQuestion.update((i) => i + 1);
  }

  startQuiz() {
    this.started.set(true);
  }

  recommencer() {
    this.initialiserQuiz();
  }

  constructor() {
    this.initialiserQuiz();
  }
}
