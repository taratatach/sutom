export default class SauvegardePartie {
  propositions: Array<string> = [];
  datePartie: Date = new Date();
  dateFinPartie?: Date;
  motsPrecedents: Array<string> = [];
  motATrouver?: string;
  idPartie?: string;
}
