// Función para generar el enlace cuando se hace clic en el botón
document.getElementById('generate-btn').addEventListener('click', function() {
    const phoneInput = document.getElementById('phone').value.trim();
    const messageInput = document.getElementById('message').value.trim();
    const resultContainer = document.getElementById('result-container');
    const resultLink = document.getElementById('result-link');

    // Limpiar el número para asegurarnos de que solo hay números (quita espacios o símbolos raros)
    const cleanPhone = phoneInput.replace(/\D/g, '');

    if (!cleanPhone) {
        alert('Por favor, introduce un número de WhatsApp válido.');
        return;
    }

    // Construir la URL base
    let whatsappUrl = `https://wa.me/${cleanPhone}`;
    
    // Si el usuario ha escrito un mensaje, lo codificamos y lo añadimos a la URL
    if (messageInput) {
        const encodedMessage = encodeURIComponent(messageInput);
        whatsappUrl += `?text=${encodedMessage}`;
    }

    // Mostrar la caja de resultado con el enlace
    resultLink.value = whatsappUrl;
    resultContainer.style.display = 'block';
});

// Función para el botón de "Copiar Enlace"
document.getElementById('copy-btn').addEventListener('click', function() {
    const resultLink = document.getElementById('result-link');
    
    // Seleccionar el texto y copiarlo al portapapeles
    resultLink.select();
    resultLink.setSelectionRange(0, 99999); // Necesario para móviles
    
    navigator.clipboard.writeText(resultLink.value).then(() => {
        const copyBtn = document.getElementById('copy-btn');
        const originalText = copyBtn.innerText;
        
        // Cambiar el botón temporalmente para dar feedback visual
        copyBtn.innerText = '¡Copiado!';
        copyBtn.style.backgroundColor = '#25D366';
        
        // Volver a la normalidad después de 2 segundos
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = '#333';
        }, 2000);
    });
});