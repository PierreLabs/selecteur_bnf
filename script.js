// Données issues de Selecteur.xlsx
const validCombinationsData = `BIB	data.bnf.fr	RDF	XML	UTF-8	RDF/XML/UTF-8	Lots	API	Dumps de data
AUT	data.bnf.fr	RDF	XML	UTF-8	RDF/XML/UTF-8	Lots	API	Dumps de data
BIB	Gallica	Dublin core	XML	UTF-8	Dublin core/XML/UTF-8	Lots	API	Dumps de Gallica
BIB	Catalogue général	Public	CSV	UTF-8	Public/CSV/UTF-8	Sélection	API	Export CSV
BIB	Catalogue général	Intermarc	CSV	UTF-8	Intermarc/CSV/UTF-8	Sélection	API	Export CSV
AUT	Catalogue général	Intermarc	CSV	UTF-8	Intermarc/CSV/UTF-8	Sélection	API	Export CSV
BIB	Catalogue général	Unimarc	CSV	UTF-8	Unimarc/CSV/UTF-8	Sélection	API	Export CSV
AUT	Catalogue général	Unimarc	CSV	UTF-8	Unimarc/CSV/UTF-8	Sélection	API	Export CSV
BIB	Catalogue général	Dublin core	XML	UTF-8	Dublin core/XML/UTF-8	Sélection	Intégrée	OAI-CAT
BIB	Gallica	Dublin core	XML	UTF-8	Dublin core/XML/UTF-8	Sélection	Intégrée	OAI-NUM
BIB	Gallica	Dublin core	XML	UTF-8	Dublin core/XML/UTF-8	Lots	Intégrée	OAI-NUM
BIB	Catalogue général	Intermarc	ISO2709	UTF-8	Intermarc/ISO2709/UTF-8	Lots	API	Produits catalogue
AUT	Catalogue général	Intermarc	ISO2709	UTF-8	Intermarc/ISO2709/UTF-8	Lots	API	Produits catalogue
BIB	Catalogue général	Unimarc	ISO2709	UTF-8	Unimarc/ISO2709/UTF-8	Lots	API	Produits catalogue
AUT	Catalogue général	Unimarc	ISO2709	UTF-8	Unimarc/ISO2709/UTF-8	Lots	API	Produits catalogue
BIB	Catalogue général	Intermarc	ISO2709	ISO5426	Intermarc/ISO2709/ISO5426	Lots	API	Produits catalogue
AUT	Catalogue général	Intermarc	ISO2709	ISO5426	Intermarc/ISO2709/ISO5426	Lots	API	Produits catalogue
BIB	Catalogue général	Unimarc	ISO2709	ISO5426	Unimarc/ISO2709/ISO5426	Lots	API	Produits catalogue
AUT	Catalogue général	Unimarc	ISO2709	ISO5426	Unimarc/ISO2709/ISO5426	Lots	API	Produits catalogue
BIB	data.bnf.fr	RDF	CSV	UTF-8	RDF/CSV/UTF-8	Sélection	Intégrée	SPARQL
AUT	data.bnf.fr	RDF	CSV	UTF-8	RDF/CSV/UTF-8	Sélection	Intégrée	SPARQL
BIB	data.bnf.fr	RDF	CSV	UTF-8	RDF/CSV/UTF-8	Sélection	API	SPARQL
AUT	data.bnf.fr	RDF	CSV	UTF-8	RDF/CSV/UTF-8	Sélection	API	SPARQL
BIB	data.bnf.fr	RDF	XML	UTF-8	RDF/XML/UTF-8	Sélection	Intégrée	SPARQL
AUT	data.bnf.fr	RDF	XML	UTF-8	RDF/XML/UTF-8	Sélection	Intégrée	SPARQL
BIB	data.bnf.fr	RDF	XML	UTF-8	RDF/XML/UTF-8	Sélection	API	SPARQL
AUT	data.bnf.fr	RDF	XML	UTF-8	RDF/XML/UTF-8	Sélection	API	SPARQL
BIB	data.bnf.fr	RDF	JSON	UTF-8	RDF/JSON/UTF-8	Sélection	Intégrée	SPARQL
AUT	data.bnf.fr	RDF	JSON	UTF-8	RDF/JSON/UTF-8	Sélection	Intégrée	SPARQL
BIB	data.bnf.fr	RDF	JSON	UTF-8	RDF/JSON/UTF-8	Sélection	API	SPARQL
AUT	data.bnf.fr	RDF	JSON	UTF-8	RDF/JSON/UTF-8	Sélection	API	SPARQL
BIB	data.bnf.fr	RDF	NT	UTF-8	RDF/NT/UTF-8	Sélection	Intégrée	SPARQL
AUT	data.bnf.fr	RDF	NT	UTF-8	RDF/NT/UTF-8	Sélection	Intégrée	SPARQL
BIB	data.bnf.fr	RDF	NT	UTF-8	RDF/NT/UTF-8	Sélection	API	SPARQL
AUT	data.bnf.fr	RDF	NT	UTF-8	RDF/NT/UTF-8	Sélection	API	SPARQL
BIB	data.bnf.fr	RDF	N3	UTF-8	RDF/N3/UTF-8	Sélection	Intégrée	SPARQL
AUT	data.bnf.fr	RDF	N3	UTF-8	RDF/N3/UTF-8	Sélection	Intégrée	SPARQL
BIB	data.bnf.fr	RDF	N3	UTF-8	RDF/N3/UTF-8	Sélection	API	SPARQL
AUT	data.bnf.fr	RDF	N3	UTF-8	RDF/N3/UTF-8	Sélection	API	SPARQL
BIB	Catalogue général	Intermarc	XML	UTF-8	Intermarc/XML/UTF-8	Sélection	Intégrée	SRU Catalogue
AUT	Catalogue général	Intermarc	XML	UTF-8	Intermarc/XML/UTF-8	Sélection	Intégrée	SRU Catalogue
BIB	Catalogue général	Unimarc	XML	UTF-8	Unimarc/XML/UTF-8	Sélection	Intégrée	SRU Catalogue
AUT	Catalogue général	Unimarc	XML	UTF-8	Unimarc/XML/UTF-8	Sélection	Intégrée	SRU Catalogue
BIB	Catalogue général	Dublin core	XML	UTF-8	Dublin core/XML/UTF-8	Sélection	Intégrée	SRU Catalogue
BIB	Catalogue général	Intermarc	XML	UTF-8	Intermarc/XML/UTF-8	Sélection	API	SRU Catalogue
AUT	Catalogue général	Intermarc	XML	UTF-8	Intermarc/XML/UTF-8	Sélection	API	SRU Catalogue
BIB	Catalogue général	Unimarc	XML	UTF-8	Unimarc/XML/UTF-8	Sélection	API	SRU Catalogue
AUT	Catalogue général	Unimarc	XML	UTF-8	Unimarc/XML/UTF-8	Sélection	API	SRU Catalogue
BIB	Catalogue général	Dublin core	XML	UTF-8	Dublin core/XML/UTF-8	Sélection	API	SRU Catalogue
BIB	Gallica	Dublin core	XML	UTF-8	Dublin core/XML/UTF-8	Sélection	Intégrée	SRU Gallica
BIB	Catalogue général	Intermarc	ISO2709	UTF-8	Intermarc/ISO2709/UTF-8	Sélection	API	Transfert de notices
AUT	Catalogue général	Intermarc	ISO2709	UTF-8	Intermarc/ISO2709/UTF-8	Sélection	API	Transfert de notices
BIB	Catalogue général	Unimarc	ISO2709	UTF-8	Unimarc/ISO2709/UTF-8	Sélection	API	Transfert de notices
AUT	Catalogue général	Unimarc	ISO2709	UTF-8	Unimarc/ISO2709/UTF-8	Sélection	API	Transfert de notices
BIB	Catalogue général	Intermarc	ISO2709	ISO5426	Intermarc/ISO2709/ISO5426	Sélection	API	Transfert de notices
AUT	Catalogue général	Intermarc	ISO2709	ISO5426	Intermarc/ISO2709/ISO5426	Sélection	API	Transfert de notices
BIB	Catalogue général	Unimarc	ISO2709	ISO5426	Unimarc/ISO2709/ISO5426	Sélection	API	Transfert de notices
AUT	Catalogue général	Unimarc	ISO2709	ISO5426	Unimarc/ISO2709/ISO5426	Sélection	API	Transfert de notices
BIB	Catalogue général	Intermarc	ISO2709	UTF-8	Intermarc/ISO2709/UTF-8	Sélection	Intégrée	Z39.50
AUT	Catalogue général	Intermarc	ISO2709	UTF-8	Intermarc/ISO2709/UTF-8	Sélection	Intégrée	Z39.50
BIB	Catalogue général	Unimarc	ISO2709	UTF-8	Unimarc/ISO2709/UTF-8	Sélection	Intégrée	Z39.50
AUT	Catalogue général	Unimarc	ISO2709	UTF-8	Unimarc/ISO2709/UTF-8	Sélection	Intégrée	Z39.50
BIB	Catalogue général	Intermarc	ISO2709	ISO5426	Intermarc/ISO2709/ISO5426	Sélection	Intégrée	Z39.50
AUT	Catalogue général	Intermarc	ISO2709	ISO5426	Intermarc/ISO2709/ISO5426	Sélection	Intégrée	Z39.50
BIB	Catalogue général	Unimarc	ISO2709	ISO5426	Unimarc/ISO2709/ISO5426	Sélection	Intégrée	Z39.50
AUT	Catalogue général	Unimarc	ISO2709	ISO5426	Unimarc/ISO2709/ISO5426	Sélection	Intégrée	Z39.50`;

// Parser les données
const validCombinations = validCombinationsData
  .trim()
  .split("\n")
  .map((line) => {
    const parts = line.split("\t");
    return [
      parts[0], // Type de notice
      parts[1], // Source
      parts[2], // Description
      parts[3], // Échange
      parts[4], // Encodage
      parts[5], // Format complet
      parts[6], // Sélection
      parts[7], // Récupération
      parts[8]?.replace(/\r/g, ""), // nettoyage des \r
    ];
  });

console.log("Combinaisons valides chargées:", validCombinations.length);

// État de la sélection
let selectedItems = {
  notice: [],
  source: [],
  description: [],
  exchange: [],
  encoding: [],
  selection: [],
  recovery: [],
  service: [],
};

// Fonction d'initialisation
document.addEventListener("DOMContentLoaded", function () {
  // Ajout des gestionnaires d'événements aux éléments
  document.querySelectorAll(".format-item").forEach((item) => {
    item.addEventListener("click", handleItemClick);
  });

  document.querySelectorAll(".service-button").forEach((button) => {
    button.addEventListener("click", handleServiceClick);
  });

  document
    .getElementById("resetButton")
    .addEventListener("click", resetSelection);
});

// Options valides pour une catégorie donnée
function getValidOptions(category) {
  // Indice de la catégorie dans validCombinations
  const categoryIndices = {
    notice: 0,
    source: 1,
    description: 2,
    exchange: 3,
    encoding: 4,
    selection: 6,
    recovery: 7,
    service: 8,
  };

  // Combinaisons valides basées sur la sélection actuelle
  const validIndices = getValidCombinationIndices();

  // Toutes les options valides pour cette catégorie
  return [
    ...new Set(
      validIndices.map(
        (index) => validCombinations[index][categoryIndices[category]]
      )
    ),
  ];
}

// Indices des combinaisons valides basées sur la sélection actuelle
function getValidCombinationIndices() {
  // Si aucune sélection, toutes les combinaisons sont valides
  if (Object.values(selectedItems).every((arr) => arr.length === 0)) {
    return Array.from(Array(validCombinations.length).keys());
  }

  // Filtrage des combinaisons qui correspondent à la sélection actuelle
  return validCombinations
    .map((combo, index) => {
      // Pour chaque catégorie avec une sélection, vérifier la compatibilité
      for (const [category, selectedValues] of Object.entries(selectedItems)) {
        if (selectedValues.length === 0) continue;

        const categoryIndex = {
          notice: 0,
          source: 1,
          description: 2,
          exchange: 3,
          encoding: 4,
          selection: 6,
          recovery: 7,
          service: 8,
        }[category];

        // Si la valeur de la combinaison n'est pas dans la sélection, ce n'est pas valide
        if (!selectedValues.includes(combo[categoryIndex])) {
          return null;
        }
      }
      return index;
    })
    .filter((index) => index !== null);
}

// Mise à jour de la sidebar
function updateSidebar() {
  const content = document.getElementById("sidebarContent");

  // Vérifier si une sélection est active
  const hasSelection = Object.values(selectedItems).some(
    (arr) => arr.length > 0
  );

  if (!hasSelection) {
    content.innerHTML = "";
    return;
  }

  // Catégories et libellés
  const categories = {
    notice: "Type",
    source: "Source",
    description: "Description",
    exchange: "Échange",
    encoding: "Encodage",
    selection: "Sélection",
    recovery: "Récupération",
    service: "Service",
  };

  // Construire les tags de sélection
  let tagsHTML = '<div class="selection-tags">';
  for (const [category, items] of Object.entries(selectedItems)) {
    if (items.length === 0) continue;

    for (const item of items) {
      tagsHTML += `<div class="selection-tag">${categories[category]}: ${item}</div>`;
    }
  }
  tagsHTML += "</div>";

  // Obtenir les combinaisons valides basées sur la sélection actuelle
  const validIndices = getValidCombinationIndices();

  // Des détails sur la (les) sélection(s)
  let detailsHTML = "";

  if (validIndices.length > 0) {
    const details = [];

    // Détails sur le type de notice
    if (selectedItems.notice.includes("BIB")) {
      details.push(
        "Les <strong>notices bibliographiques</strong> décrivent les documents (livres, articles, manuscrits, documents numériques...) conservés ou signalés par la BnF."
      );
    }

    if (selectedItems.notice.includes("AUT")) {
      details.push(
        "Les <strong>notices d'autorité</strong> décrivent les entités (personnes, collectivités, lieux, sujets...) et permettent de normaliser et lier les informations bibliographiques."
      );
    }

    // Détails sur la source
    if (selectedItems.source.includes("data.bnf.fr")) {
      details.push(
        "Les données de <strong>data.bnf.fr</strong> constituent le pivot documentaire de la BnF, rassemblant les données de qualité pour un accès fédéré par auteurs, œuvres, thèmes, lieux et dates, disponibles en format RDF avec plusieurs options d'export."
      );
    }

    if (selectedItems.source.includes("Gallica")) {
      details.push(
        "La bibliothèque numérique <strong>Gallica</strong> contient les collections numérisées ou nativement numériques de la BnF, avec métadonnées en Dublin Core XML UTF-8."
      );
    }

    if (selectedItems.source.includes("Catalogue général")) {
      details.push(
        "Le <strong>Catalogue général BnF</strong> reflète la production éditoriale française et décrit des documents conservés sur tous les sites de la BnF, offrant une grande variété de formats."
      );
    }

    // Détails sur les modes de sélection
    if (selectedItems.selection.includes("Lots")) {
      details.push(
        "Les <strong>lots</strong> sont des jeux de données pré-constitués 🎁, permettant de récupérer des ensembles cohérents de notices selon des critères prédéfinis."
      );
    }

    if (selectedItems.selection.includes("Sélection")) {
      details.push(
        "La <strong>sélection personnalisée</strong> 🛒 permet de constituer des ensembles de notices selon vos critères spécifiques via des requêtes ou des paniers."
      );
    }

    // Détails sur les modes de récupération
    if (selectedItems.recovery.includes("API")) {
      details.push(
        "La récupération <strong>API</strong> 🏠 correspond à une récupération intégrée à votre propre système via une API pour un usage automatisé."
      );
    }

    if (selectedItems.recovery.includes("Intégrée")) {
      details.push(
        "La récupération depuis la <strong>BNF</strong> utilise une interface utilisateur fournie par la BnF."
      );
    }

    // Détails sur les formats de description
    if (selectedItems.description.includes("RDF")) {
      details.push(
        "<strong>RDF</strong> de data.bnf.fr utilise un modèle de données orienté entités qui converge avec LRM et RDA-FR, disponible en multiples formats d'échange, enrichi de liens vers des jeux de données extérieurs."
      );
    }

    if (selectedItems.description.includes("Intermarc")) {
      details.push(
        "<strong>Intermarc</strong> est le format MARC utilisé à la BnF, disponible en XML UTF-8, CSV UTF-8, et ISO2709 (UTF-8 ou ISO5426)."
      );
    }

    if (selectedItems.description.includes("Unimarc")) {
      details.push(
        "<strong>Unimarc</strong> est le format d'échange international MARC des bibliothèques, disponible en XML UTF-8, CSV UTF-8, et ISO2709 (UTF-8 ou ISO5426)."
      );
    }

    if (selectedItems.description.includes("Dublin core")) {
      details.push(
        "<strong>Dublin Core</strong> est un format descriptif simple et générique comprenant 15 éléments, disponible uniquement en XML avec encodage UTF-8."
      );
    }

    if (selectedItems.description.includes("Public")) {
      details.push(
        "Le format <strong>public</strong> est accessible depuis le catalogue général, disponible en CSV UTF-8."
      );
    }

    // Détails sur les formats d'échange
    if (selectedItems.exchange.includes("ISO2709")) {
      details.push(
        "Le format <strong>ISO 2709</strong> est le format d'échange binaire standard pour MARC, utilisé avec Intermarc et Unimarc, supportant les encodages UTF-8 et ISO5426."
      );
    }

    if (selectedItems.exchange.includes("XML")) {
      details.push(
        "Le format <strong>XML</strong> permet une structuration claire des données, utilisé pour RDF, Intermarc, Unimarc et Dublin Core, toujours avec encodage UTF-8."
      );
    }

    if (selectedItems.exchange.includes("CSV")) {
      details.push(
        "Le format <strong>CSV</strong> facilite l'exploitation en tableur, disponible pour RDF, Intermarc, Unimarc et le format Public, toujours avec encodage UTF-8."
      );
    }

    if (selectedItems.exchange.includes("JSON")) {
      details.push(
        "Le format <strong>JSON</strong> est optimisé pour les applications web modernes, spécifiquement disponible pour les données RDF de data.bnf.fr."
      );
    }

    if (selectedItems.exchange.includes("NT")) {
      details.push(
        "Le format <strong>N-Triplets</strong> est une sérialisation RDF linéaire simple, disponible pour les données de data.bnf.fr en encodage UTF-8."
      );
    }

    if (selectedItems.exchange.includes("N3")) {
      details.push(
        "Le format <strong>Notation 3</strong> est une sérialisation RDF compacte et lisible, disponible pour les données de data.bnf.fr en encodage UTF-8."
      );
    }

    // Détails sur l'encodage
    if (selectedItems.encoding.includes("UTF-8")) {
      details.push(
        "L'encodage <strong>UTF-8</strong> (Unicode) est le standard moderne recommandé, supporté par tous les formats et services actuels."
      );
    }

    if (selectedItems.encoding.includes("ISO5426")) {
      details.push(
        "L'encodage <strong>ISO 5426</strong> est l'ancien standard des catalogues bibliographiques, utilisé uniquement avec le format ISO2709 pour les données MARC historiques."
      );
    }

    // Détails sur les services
    if (selectedItems.service.includes("SPARQL")) {
      details.push(
        "<strong>SPARQL</strong> endpoint permet d'interroger les données enrichies de la BnF selon un modèle orienté entités, avec récupération sous différentes sérialisations (RDF/XML, RDF/NT, RDF/N3, JSON)."
      );
    }

    if (selectedItems.service.includes("OAI-CAT")) {
      details.push(
        "<strong>OAI-CAT</strong> est l'entrepôt OAI-PMH contenant l'ensemble des notices bibliographiques du catalogue général BnF en Dublin Core XML UTF-8."
      );
    }

    if (selectedItems.service.includes("OAI-NUM")) {
      details.push(
        "<strong>OAI-NUM</strong> est l'entrepôt OAI-PMH contenant les notices des documents numérisés accessibles dans Gallica, en Dublin Core XML UTF-8."
      );
    }

    if (selectedItems.service.includes("SRU Catalogue")) {
      details.push(
        "<strong>SRU Catalogue</strong> permet des requêtes HTTP avec critères sur le catalogue général BnF et récupération des notices en XML (Intermarc, Unimarc ou Dublin Core)."
      );
    }

    if (selectedItems.service.includes("SRU Gallica")) {
      details.push(
        "<strong>SRU Gallica</strong> permet d'interroger via requêtes HTTP les notices des documents numérisés et de récupérer les notices en Dublin Core XML UTF-8."
      );
    }

    if (selectedItems.service.includes("Z39.50")) {
      details.push(
        "<strong>Z39.50</strong> est le protocole traditionnel permettant de récupérer selon des critères toutes les notices bibliographiques et d'autorité validées du catalogue général."
      );
    }

    if (selectedItems.service.includes("Export CSV")) {
      details.push(
        "<strong>Export CSV</strong> permet d'exporter par formulaire simple les données de notices bibliographiques et d'autorité au format Unimarc ou Intermarc, sans authentification."
      );
    }

    if (selectedItems.service.includes("Dumps de data")) {
      details.push(
        "<strong>Dumps de data</strong> : fichiers contenant les données BnF selon un modèle orienté entités, enrichies de liens extérieurs, en RDF/XML UTF-8."
      );
    }

    if (selectedItems.service.includes("Dumps de Gallica")) {
      details.push(
        "<strong>Dumps de Gallica</strong> : fichiers contenant les notices des documents numérisés de Gallica en Dublin Core XML UTF-8."
      );
    }

    if (selectedItems.service.includes("Produits catalogue")) {
      details.push(
        "<strong>Produits catalogue</strong> : fichiers de métadonnées descriptives (notices bibliographiques et d'autorité) établis selon des critères de complétude et de qualité, au format ISO2709."
      );
    }

    if (selectedItems.service.includes("Transfert de notices")) {
      details.push(
        "<strong>Transfert de notices</strong> permet de constituer des paniers de notices bibliographiques et d'autorité depuis l'interface du catalogue général BnF."
      );
    }

    if (details.length > 0) {
      detailsHTML = `
                    <div class="detail-box">
                        <ul>
                            ${details.map((exp) => `<li>${exp}</li>`).join("")}
                        </ul>
                    </div>
                `;
    }
  } else {
    // Au cas où aucune combinaison n'est valide
    detailsHTML = `
                <div class="detail-box" style="border-left-color: #dc3545; background-color: rgba(220, 53, 69, 0.1);">
                    <h4 style="color: #dc3545;">❌ Aucune combinaison valide</h4>
                    <p style="margin: 5px 0 0 0;">Cette sélection ne correspond à aucune combinaison supportée par la BnF.</p>
                    <p style="margin: 5px 0 0 0;"><em>Conseil : essayez de réinitialiser ou modifier la sélection pour voir les options compatibles.</em></p>
                </div>
            `;
  }

  content.innerHTML = `
            ${tagsHTML}
            ${detailsHTML}
        `;
}

// Gestion du clic sur un élément de format
function handleItemClick(event) {
  const item = event.currentTarget;
  const category = item.getAttribute("data-category");
  const id = item.getAttribute("data-id");

  // Empêcher de cliquer sur un élément désactivé
  if (item.classList.contains("disabled")) {
    return;
  }

  const isActive = item.classList.contains("active");

  if (isActive) {
    // Désélectionner
    item.classList.remove("active");
    selectedItems[category] = selectedItems[category].filter((i) => i !== id);
  } else {
    // Sélectionner
    item.classList.add("active");
    selectedItems[category].push(id);
  }

  // Mise à jour de l'interface
  updateInterface();
  console.log("Selection updated:", selectedItems); // Debug
}

// Gestion du clic sur un bouton de service
function handleServiceClick(event) {
  const button = event.currentTarget;
  const service = button.getAttribute("data-service");

  // Empêcher de cliquer sur un bouton désactivé
  if (button.classList.contains("disabled")) {
    return;
  }

  const isActive = button.classList.contains("active");

  if (isActive) {
    // Désélectionner
    button.classList.remove("active");
    selectedItems.service = selectedItems.service.filter((s) => s !== service);
  } else {
    // Sélectionner
    button.classList.add("active");
    selectedItems.service.push(service);
  }

  // Mise à jour de l'interface
  updateInterface();
}

// Mise à jour de l'interface en fonction de la sélection
function updateInterface() {
  // Vérifier si une sélection est active
  const hasSelection = Object.values(selectedItems).some(
    (arr) => arr.length > 0
  );

  // Mise à jour de la sidebar
  const sidebar = document.getElementById("selectionSidebar");

  if (hasSelection) {
    sidebar.classList.add("active");
  } else {
    sidebar.classList.remove("active");
  }

  if (!hasSelection) {
    // Si aucune sélection, tout activer
    document.querySelectorAll(".format-item, .service-button").forEach((el) => {
      el.classList.remove("active");
      el.classList.remove("disabled");
    });

    return;
  }

  // Mise à jour de tous les éléments de format
  document.querySelectorAll(".format-item").forEach((item) => {
    const category = item.getAttribute("data-category");
    const id = item.getAttribute("data-id");

    // Les options valides pour cette catégorie
    const validOptions = getValidOptions(category);

    // Conserver l'état actif si sélectionné
    const isSelected = selectedItems[category].includes(id);

    if (isSelected) {
      item.classList.add("active");
      item.classList.remove("disabled");
    } else {
      item.classList.remove("active");

      // Désactiver si non valide
      if (validOptions.includes(id)) {
        item.classList.remove("disabled");
      } else {
        item.classList.add("disabled");
      }
    }
  });

  // Mise à jour des boutons de service
  document.querySelectorAll(".service-button").forEach((button) => {
    const service = button.getAttribute("data-service");

    // Les services valides
    const validServices = getValidOptions("service");

    // On conserve l'état actif si sélectionné
    const isSelected = selectedItems.service.includes(service);

    if (isSelected) {
      button.classList.add("active");
      button.classList.remove("disabled");
    } else {
      button.classList.remove("active");

      // Désactiver si non valide
      if (validServices.includes(service)) {
        button.classList.remove("disabled");
      } else {
        button.classList.add("disabled");
      }
    }
  });

  // Mise à jour de la sidebar
  updateSidebar();
}

// Réinitialisation de la sélection
function resetSelection() {
  // Réinitialisation de l'objet de sélection
  for (const category in selectedItems) {
    selectedItems[category] = [];
  }

  // Réinitialisation de l'interface
  document.querySelectorAll(".format-item, .service-button").forEach((el) => {
    el.classList.remove("active");
    el.classList.remove("disabled");
  });

  // Masquer la sidebar
  document.getElementById("selectionSidebar").classList.remove("active");
}
