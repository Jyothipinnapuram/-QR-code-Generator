function generateQR() {
    let qrText = document.getElementById("qrText").value;
    let qrCodeDiv = document.getElementById("qrCode");
    let downloadBtn = document.getElementById("downloadBtn");

    if (qrText.trim() === "") {
        alert("Please enter text or a URL to generate QR Code.");
        return;
    }

    qrCodeDiv.innerHTML = ""; // Clear previous QR code
    let qr = new QRCode(qrCodeDiv, {
        text: qrText,
        width: 200,
        height: 200
    });

    setTimeout(() => {
        downloadBtn.style.display = "block"; // Show download button
    }, 500);
}

function downloadQR() {
    let qrImage = document.querySelector("#qrCode img");
    if (!qrImage) {
        alert("Generate a QR Code first!");
        return;
    }

    let link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "qr-code.png";
    link.click();
}
