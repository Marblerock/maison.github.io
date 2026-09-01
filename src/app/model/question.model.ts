export type Maison = 'Gryffondor' | 'Serpentard' | 'Serdaigle' | 'Poufsouffle';

export interface Reponse {
  texte: string;
  maison: Maison;
}

export interface Question {
  titre: string;
  reponses: Reponse[];
}
