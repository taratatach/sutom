import PanelManager from "./panelManager";

export default class FinDuJeuPanel {
  private readonly _panelManager: PanelManager;
  private readonly _cleAnnonce = "annonce";

  public constructor(panelManager: PanelManager) {
    this._panelManager = panelManager;
  }

  public afficherSiNecessaire(): void {
    const dejaAffiche = localStorage.getItem(this._cleAnnonce);
    if (dejaAffiche && JSON.parse(dejaAffiche)) {
      return;
    } else {
      localStorage.setItem(this._cleAnnonce, JSON.stringify(true));
    }
  }

  private afficher(): void {
    let titre = "Bonne partie de COZYTUS à toutes et à tous !";
    let contenu =
      "<p>" +
      "Suite à une demande de la part de France Télévisions de ne plus utiliser le mot « SUTOM », j'ai décidé de fermer le jeu.<br />" +
      "Le dernier mot sera vendredi 25 mars.<br />" +
      "Merci à toutes les personnes qui ont joué.<br />" +
      'Vous pouvez retrouver plus d\'informations concernant cette fermeture sur <a target="_blank" href="https://twitter.com/Jonamaths/status/1506899535947345921">mon compte twitter, et le thread associé</a>.<br />' +
      "<br />" +
      "Jonathan" +
      "</p>";

    this._panelManager.setContenu(titre, contenu);
    this._panelManager.setClasses(["regles-panel"]);
    this._panelManager.afficherPanel();
  }
}
