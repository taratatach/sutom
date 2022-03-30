import Dictionnaire from "../dictionnaire";
import InstanceConfiguration from "../instanceConfiguration";
import SauvegardePartie from "./sauvegardePartie";

export default class PartieEnCours {
  static genererIdPartie(): string {
    if (window.location.hash !== "" && window.location.hash !== "#") {
      let hashPart = atob(window.location.hash.substring(1)).split("/");
      for (let infoPos in hashPart) {
        let info = hashPart[infoPos];
        if (!info.includes("=")) continue;
        let infoPart = info.split("=");
        let infoKey = infoPart[0];

        if (infoKey !== "p") continue;

        return infoPart[1];
      }
    }

    return InstanceConfiguration.idPartieParDefaut;
  }

  static restaurerSauvegarde(sauvegarde: SauvegardePartie): PartieEnCours | null {
    if (sauvegarde.idPartie) {
      const partie = new PartieEnCours()
      partie.idPartie = sauvegarde.idPartie;
      partie.propositions = sauvegarde.propositions;
      partie.datePartie = new Date(sauvegarde.datePartie);
      partie.dateFinPartie = sauvegarde.dateFinPartie ? new Date(sauvegarde.dateFinPartie) : undefined;
      partie.motsPrecedents = sauvegarde.motsPrecedents;
      partie.motATrouver = sauvegarde.motATrouver;

      return partie;
    }
    return null
  }

  public motsPrecedents: Array<string>;
  public motATrouver: string | undefined;
  public propositions: Array<string>;
  public datePartie: Date;
  public dateFinPartie: Date | undefined;
  public idPartie: string;

  public constructor() {
    this.idPartie = PartieEnCours.genererIdPartie();
    this.motsPrecedents = [];
    this.propositions = [];
    this.datePartie = new Date();
  }

  public choisirMot(): void {
    this.motATrouver = Dictionnaire.getMot(this.motsPrecedents);
  }

  public duree(): number {
    if (this.dateFinPartie) {
      return this.dateFinPartie.getTime() - this.datePartie.getTime();
    } else {
      return new Date().getTime() - this.datePartie.getTime();
    }
  }

  public genererSauvegarde(): SauvegardePartie {
    return {
      propositions: this.propositions,
      datePartie: this.datePartie,
      dateFinPartie: this.dateFinPartie,
      idPartie: this.idPartie,
      motsPrecedents: this.motsPrecedents,
      motATrouver: this.motATrouver
    };
  }
}
