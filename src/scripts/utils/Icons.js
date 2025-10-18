export default class Icons {
  static load(path) {
    const basePath = window.location.origin;
    path = path || `${basePath}/assets/icons.svg`;

    fetch(path)
      .then((res) => {
        if (res.ok) {
          return res.text();
        } else {
          throw new Error("Le fichier icons.svg est introuvable.");
        }
      })
      .then((data) => {
        const svg = document.createElement("div");
        svg.style.display = "none";
        svg.innerHTML = data;
        document.body.appendChild(svg);
      })
      .catch((error) => {
        console.error(`Erreur de chargement des icônes : ${error.message}`);
      });
  }
}
