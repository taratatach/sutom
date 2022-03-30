import Configuration from "./entites/configuration";
import PartieEnCours from "./entites/partieEnCours";
import SauvegardePartie from "./entites/sauvegardePartie";
import SauvegardeStats from "./entites/sauvegardeStats";

export default class Sauvegardeur {
  private static readonly _cleStats = "statistiques";
  private static readonly _clePartieEnCours = "partieEnCours";
  private static readonly _cleConfiguration = "configuration";

  public static sauvegarderStats(stats: SauvegardeStats): void {
    localStorage.setItem(this._cleStats, JSON.stringify(stats));
  }

  public static chargerSauvegardeStats(): SauvegardeStats | undefined {
    let dataStats = localStorage.getItem(this._cleStats);
    if (!dataStats) return;

    let stats = JSON.parse(dataStats) as SauvegardeStats;
    return stats;
  }

  public static sauvegarderPartieEnCours(partieEnCours: PartieEnCours): void {
    const sauvegarde: SauvegardePartie = partieEnCours.genererSauvegarde()
    localStorage.setItem(this._clePartieEnCours, JSON.stringify(sauvegarde));
  }

  public static chargerSauvegardePartieEnCours(): PartieEnCours | null {
    let dataPartieEnCours = localStorage.getItem(this._clePartieEnCours);
    if (!dataPartieEnCours) return null;

    const sauvegarde = JSON.parse(dataPartieEnCours) as SauvegardePartie;
    return PartieEnCours.restaurerSauvegarde(sauvegarde);
  }

  public static sauvegarderConfig(config: Configuration): void {
    localStorage.setItem(this._cleConfiguration, JSON.stringify(config));
  }

  public static chargerConfig(): Configuration | null {
    let dataConfig = localStorage.getItem(this._cleConfiguration);
    if (!dataConfig) return null;

    let config = JSON.parse(dataConfig) as Configuration;
    return config;
  }
}
