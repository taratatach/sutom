import Configuration from "./entites/configuration";
import PanelManager from "./panelManager";
import Sauvegardeur from "./sauvegardeur";

export default class ReglesPanel {
  private readonly _panelManager: PanelManager;
  private readonly _rulesBouton: HTMLElement;

  public constructor(panelManager: PanelManager) {
    this._panelManager = panelManager;
    this._rulesBouton = document.getElementById("configuration-regles-bouton") as HTMLElement;

    this._rulesBouton.addEventListener(
      "click",
      (() => {
        this.afficher();
      }).bind(this)
    );
  }

  public afficher(): void {
    let titre = "Règles";
    let contenu =
      "<ul>" +
      "<li>Chaque équipe, à tour de rôle, doit trouver le plus de mots en 2 minutes.</li>" +
      "<li>Vous avez six essais pour deviner chaque mot, entre 6 et 12 lettres.</li>" +
      "<li>" +
      "Vous ne pouvez proposer que des mots commençant par la même lettre que le mot recherché, et qui se trouvent dans notre dictionnaire.<br />" +
      "</p>" +
      '<div class="grille">' +
      "<table>" +
      "<tr>" +
      '<td class="resultat bien-place">S</td>' +
      '<td class="resultat non-trouve">A</td>' +
      '<td class="resultat non-trouve">L</td>' +
      '<td class="resultat mal-place">U</td>' +
      '<td class="resultat mal-place">T</td>' +
      "</tr>" +
      "</table>" +
      "Les lettres entourées d'un carré rouge sont bien placées,<br />" +
      "les lettres entourées d'un cercle jaune sont mal placées (mais présentes dans le mot).<br />" +
      "Les lettres qui restent sur fond bleu ne sont pas dans le mot.<br />" +
      "</div>" +
      "</li>" +
      "<li>À la fin des 2 minutes, vous pouvez tirer une boule pour tenter de réaliser un bingo et mettre fin au jeu.</li>" +
      "<li>Attention aux boules vertes ! Elles vous feront perdre un équipier.</li>" +
      "</ul>"

    this._panelManager.setContenu(titre, contenu);
    this._panelManager.setClasses(["regles-panel"]);
    this._panelManager.setCallbackFermeture(() => {
      Sauvegardeur.sauvegarderConfig({
        ...(Sauvegardeur.chargerConfig() ?? Configuration.Default),
        afficherRegles: false,
      });
    });
    this._panelManager.afficherPanel();
  }
}
