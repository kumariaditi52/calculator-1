function calculateSizes() {
    const doorHeight = parseFloat(document.getElementById('doorHeight').value);
    const doorWidth = parseFloat(document.getElementById('doorWidth').value);
    const stileWidth = parseFloat(document.getElementById('stileWidth').value);
    const railWidth = parseFloat(document.getElementById('railWidth').value);
    const interlockDepth = parseFloat(document.getElementById('interlockDepth').value);
    const panelFloat = parseFloat(document.getElementById('panelFloat').value);

    // Calculation logic
    const stileLength = doorHeight - (2 * railWidth);
    const railLength = doorWidth - (2 * stileWidth);
    const panelHeight = doorHeight - (2 * railWidth) + (2 * interlockDepth) + (2 * panelFloat);
    const panelWidth = doorWidth - (2 * stileWidth) + (2 * interlockDepth) + (2 * panelFloat);

    // Display results
    document.getElementById('stileLength').innerText = stileLength;
    document.getElementById('railLength').innerText = railLength;
    document.getElementById('panelHeight').innerText = panelHeight;
    document.getElementById('panelWidth').innerText = panelWidth;

    document.getElementById('results').style.display = 'block';
}

function clearResults() {
    document.getElementById('stileLength').innerText = '';
    document.getElementById('railLength').innerText = '';
    document.getElementById('panelHeight').innerText = '';
    document.getElementById('panelWidth').innerText = '';

    document.getElementById('results').style.display = 'none';
}
