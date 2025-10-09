import ComponentFactory from "./ComponentFactory.js"; // Importe un module qui initialise tes composants
import Icons from "./utils/Icons.js"; // Importe un module pour charger les icônes du site

class Main {
  constructor() {
    this.init(); // Lance la fonction init() dès qu'une instance de la classe est créée
  }

  init() {
    document.documentElement.classList.add("has-js"); // Ajoute la classe "has-js" à <html> pour signaler que JS est actif

    Icons.load(); // Charge les icônes du site
    new ComponentFactory(); // Initialise les composants dynamiques
  }
}

new Main(); // Crée une nouvelle instance de la classe Main → le script démarre automatiquement
