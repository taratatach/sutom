import ListeMotsProposables from './mots/listeMotsProposables'

export default class Dictionnaire {
  public constructor() {}

  public static getMot(motsAIgnorer: Array<string>): string {
    const dictionnaire = ListeMotsProposables.Dictionnaire;
    const nbMots = dictionnaire.length;

    let mot;
    do {
      mot = dictionnaire[Math.floor(Math.random() * nbMots)];
    } while (motsAIgnorer.includes(mot));

    return mot;
  }

  public static estMotValide(mot: string, premiereLettre: string, longueur: number): boolean {
    return ListeMotsProposables.Dictionnaire.includes(this.nettoyerMot(mot))
  }

  public static nettoyerMot(mot: string): string {
    return mot
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();
  }
}
