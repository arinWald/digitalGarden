async function loadComponent(elementId, filePath) {
    const response = await fetch(filePath);
    const content = await response.text();

    document.getElementById(elementId).innerHTML = content;
}