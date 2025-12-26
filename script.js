document.getElementById('btn-whatsapp').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Configura aquí tu número real de WhatsApp Business (sin el signo +)
    const telefono = "5214111973524"; // Ejemplo: 521 + 10 dígitos de México
    
    const mensaje = encodeURIComponent(
        "¡Hola MasterLab! 🔥 Vengo de la página y quiero aprovechar la oferta del Recetario Maestro de $99 MXN. ¿Cómo puedo realizar el pago?"
    );
    
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    
    window.open(url, '_blank');
});

