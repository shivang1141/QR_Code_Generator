document.getElementById('qr-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputUrl = document.getElementById('input-url').value;
    const qrCodeElement = document.getElementById('qr-code');

    // Clear the previous QR code
    qrCodeElement.innerHTML = '';

    // Generate the new QR code using QRCode.js
    new QRCode(qrCodeElement, {
        text: inputUrl,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    document.getElementById('qr-result').style.display = 'block';
});

document.getElementById('save-btn').addEventListener('click', () => {
    const qrCodeElement = document.getElementById('qr-code');
    const qrCodeImg = qrCodeElement.getElementsByTagName('img')[0];
    if (!qrCodeImg) {
        alert('Please generate a QR code first.');
        return;
    }
    const link = document.createElement('a');
    link.href = qrCodeImg.src;
    link.download = 'qr-code.png';
    link.click();
});
