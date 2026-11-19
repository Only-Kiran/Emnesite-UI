// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
// SVG hotspots

const krop = document.getElementById("krop");
const sind = document.getElementById("sind");
const velvaere = document.getElementById("velvaere");

const fitnessHotspot = document.querySelector(".hotspot-fitness");
const meditationHotspot = document.querySelector(".hotspot-meditation");
const wellnessHotspot = document.querySelector(".hotspot-wellness");

if (fitnessHotspot) {
  fitnessHotspot.addEventListener("click", () => {
    krop.open = !krop.open;
  });
}

if (meditationHotspot) {
  meditationHotspot.addEventListener("click", () => {
    sind.open = !sind.open;
  });
}

if (wellnessHotspot) {
  wellnessHotspot.addEventListener("click", () => {
    velvære.open = !velvære.open;
  });
}
// Kun tal i telefonnummer i formular

const phoneInput = document.getElementById("phone");

if (phoneInput) {
  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
  });
}

const radioKnapper = document.querySelectorAll('input[name="kilde"]');
const andetTekst = document.getElementById("andetTekst");

//formular side
radioKnapper.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "Andet" && radio.checked) {
      andetTekst.style.display = "block";
    } else if (radio.checked) {
      andetTekst.style.display = "none";
      andetTekst.value = "";
    }
  });
});
const formular = document.querySelector(".form-placeholder");

if (formular) {
  formular.addEventListener("submit", () => {
    localStorage.setItem("navn", document.getElementById("fullname").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("telefon", document.getElementById("phone").value);
    const interesser = [];

    // Gemmer interesser

    document
      .querySelectorAll('input[name="interesse"]:checked')
      .forEach((checkbox) => {
        interesser.push(checkbox.parentElement.textContent.trim());
      });
    localStorage.setItem("interesser", JSON.stringify(interesser));

    // Gemmer oplevelse
    const oplevelse = document.querySelector('input[name="oplevelse"]:checked');
    if (oplevelse) {
      localStorage.setItem(
        "oplevelse",
        oplevelse.parentElement.textContent.trim(),
      );
    }

    //Gemmer kilde
    const kilde = document.querySelector('input[name="kilde"]:checked');

    if (kilde) {
      if (kilde.value === "Andet") {
        localStorage.setItem(
          "kilde",
          document.getElementById("andetTekst").value,
        );
      } else {
        localStorage.setItem("kilde", kilde.parentElement.textContent.trim());
      }
    }
  });
}

// Opsamlingsside
// Henter data fra localStorage
const navn = localStorage.getItem("navn");
const email = localStorage.getItem("email");
const telefon = localStorage.getItem("telefon");

// Viser data på siden
document.getElementById("opsamling-navn").textContent = navn;
document.getElementById("opsamling-email").textContent = email;
document.getElementById("opsamling-telefon").textContent = telefon;

// Henter interesser
const gemteInteresser = JSON.parse(localStorage.getItem("interesser")) || [];
const interesseListe = document.getElementById("opsamling-interesser");
gemteInteresser.forEach((interesse) => {
  const li = document.createElement("li");
  li.textContent = interesse;
  interesseListe.appendChild(li);
});

// Henter oplevelse
const gemtOplevelse = localStorage.getItem("oplevelse");

document.getElementById("opsamling-oplevelse").textContent = gemtOplevelse;

// Henter kilde
const gemtKilde = localStorage.getItem("kilde");

document.getElementById("opsamling-kilde").textContent = gemtKilde;
