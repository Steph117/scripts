console.log("Test");

  // Création de l'élément div parent
  var parentDiv = document.createElement("div");
  parentDiv.classList.add("switch_chat");

  // Création de l'élément label avec les éléments enfants
  var labelElement = document.createElement("label");
  labelElement.classList.add("switch");
  var inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  var spanElement = document.createElement("span");
  spanElement.classList.add("slider", "round");

  labelElement.appendChild(inputElement);
  labelElement.appendChild(spanElement);

  // Création de l'élément de texte "Live chat"
  var textElement = document.createElement("div");
  textElement.classList.add("live_chat");
  textElement.textContent = "Live chat";

  // Sélection de l'élément parent
  var parentElement = document.querySelector(".hl_header--controls");

  // Ajout du div parent comme premier enfant de l'élément parent
  parentElement.insertBefore(parentDiv, parentElement.firstChild);

  // Ajout de l'élément label et de l'élément de texte au div parent
  parentDiv.appendChild(textElement);
  parentDiv.appendChild(labelElement);
    // Créer un nouvel élément
  var newElement1 = document.createElement("span");
  newElement1.style.marginRight = '15px';
  newElement1.style.position = 'absolute';
  newElement1.style.left = '0';
  newElement1.style.bottom = '-25px';
  newElement1.style.marginLeft = '-25px';

  // Ajouter le code SVG à l'élément
  var svgCode1 = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 182 182">' +
    '<path fill="#fff" fill-opacity=".2" d="M90.5 0C40.499 0 0 40.499 0 90.5S40.499 181 90.5 181 181 140.501 181 90.5 140.501 0 90.5 0Zm0 22.625c7.466 0 14.48 2.036 21.268 4.299-4.752 4.525-10.182 8.597-9.277 12.67.905 4.072 15.611 2.941 15.611 11.312 0 6.109-9.502 7.919-2.941 14.933 7.919 7.918-14.48 22.172-14.932 32.58-.679 18.778 19.005 21.946 34.616 21.946 9.503 0 11.991 4.525 11.313 9.955-12.218 17.421-33.033 28.281-55.884 28.281-8.598 0-16.517-2.036-23.983-4.977 4.978-9.955-6.335-29.639-16.968-35.974-5.204-5.204-16.29-3.168-22.625-5.656-2.037-6.109-4.073-12.218-4.3-19.005.68-1.132 1.81-2.037 3.62-2.037 4.3 0 10.182 8.598 13.35 7.693 4.072-.905-16.743-29.639-7.014-35.295 4.525-2.715 13.575 8.824 10.633-3.62-2.715-11.539 8.145-6.335 14.933-9.276 5.883-2.489 10.181-9.276 2.941-13.349-1.357-.679-2.941-2.262-4.977-4.299 10.181-6.108 21.946-9.955 34.616-9.955v-.226Zm52.264 24.661c4.072 4.978 7.24 10.408 9.955 16.29v.679c-.905 1.584-2.489 2.489-4.978 4.978-6.335 6.334-7.24-4.752-9.955-7.014-2.941-2.715-13.575.452-14.932-2.941-1.584-4.073 11.312-9.503 19.91-11.992Z"/>' +
  '</svg>';

  newElement1.innerHTML = svgCode1;

  // Sélectionner l'élément parent
  var parentElement1 = document.querySelector(".hl_dashboard--matters-added h3");

  // Vérifier si l'élément parent existe
  if (parentElement1) {
    // Ajouter le nouvel élément en tant que premier enfant
    parentElement1.insertBefore(newElement1, parentElement1.firstChild);
  }

      // Créer un nouvel élément
  var newElement2 = document.createElement("span");
  newElement2.style.marginRight = '15px';
  newElement2.style.position = 'absolute';
  newElement2.style.left = '0';
  newElement2.style.bottom = '-25px';
  newElement2.style.marginLeft = '-25px';

  // Ajouter le code SVG à l'élément
  var svgCode2 = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 182 182">' +
    '<path fill="#fff" fill-opacity=".2" d="M90.88 0C40.896 0 0 40.896 0 90.88c0 49.984 40.896 90.88 90.88 90.88 49.984 0 90.88-40.896 90.88-90.88C181.76 40.896 140.864 0 90.88 0Zm0 22.72c37.715 0 68.16 30.445 68.16 68.16 0 37.715-30.445 68.16-68.16 68.16-37.715 0-68.16-30.445-68.16-68.16 0-37.715 30.445-68.16 68.16-68.16Zm0 22.72c-6.362 0-11.36 4.998-11.36 11.36 0 6.362 4.998 11.36 11.36 11.36 6.362 0 11.36-4.998 11.36-11.36 0-6.362-4.998-11.36-11.36-11.36ZM53.165 68.16a11.36 11.36 0 0 0-4.317 19.085l20.675 20.675c-.454 1.818-1.363 3.635-1.363 5.68 0 12.496 10.224 22.72 22.72 22.72 12.496 0 22.72-10.224 22.72-22.72 0-12.496-10.224-22.72-22.72-22.72-2.045 0-3.862.909-5.68 1.363L64.525 71.568a11.359 11.359 0 0 0-9.997-3.635c-.454-.028-.91-.028-1.363 0v.227Zm71.795 0c-6.362 0-11.36 4.998-11.36 11.36 0 6.362 4.998 11.36 11.36 11.36 6.362 0 11.36-4.998 11.36-11.36 0-6.362-4.998-11.36-11.36-11.36Z"/>' +
  '</svg>';

  newElement2.innerHTML = svgCode2;

  // Sélectionner l'élément parent
  var parentElement2 = document.querySelector(".hl_dashboard--pipeline-value h3");

  // Vérifier si l'élément parent existe
  if (parentElement2) {
    // Ajouter le nouvel élément en tant que premier enfant
    parentElement2.insertBefore(newElement2, parentElement2.firstChild);
  }

    // Créer un nouvel élément
    var newElement3 = document.createElement("span");
  newElement3.style.marginRight = '15px';
  newElement3.style.position = 'absolute';
  newElement3.style.left = '0';
  newElement3.style.bottom = '-25px';
  newElement3.style.marginLeft = '-25px';

  // Ajouter le code SVG à l'élément
  var svgCode3 = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 182 182">' +
    '<path fill="#fff" fill-opacity=".2" d="M79.52 0C57.482 0 37.715 9.088 23.402 23.402L90.88 90.88V.682C87.245.227 83.382 0 79.52 0Zm34.08 24.083v77.475l-61.798 61.799c13.859 11.36 31.126 18.403 50.438 18.403 43.85 0 79.52-35.67 79.52-79.52 0-39.987-29.763-72.477-68.16-78.157ZM20.675 53.846C7.952 66.116 0 83.156 0 102.24c0 21.811 10.451 40.669 26.355 53.165l48.394-48.394-54.074-53.165Z"/>' +
  '</svg>';

  newElement3.innerHTML = svgCode3;

  // Sélectionner l'élément parent
  var parentElement3 = document.querySelector(".hl_dashboard--conversion-rate h3");

  // Vérifier si l'élément parent existe
  if (parentElement3) {
    // Ajouter le nouvel élément en tant que premier enfant
    parentElement3.insertBefore(newElement3, parentElement3.firstChild);
  }​
  var element = document.getElementById("hl_header--help-icon");
    if (element) {
      element.removeAttribute("style");
    }