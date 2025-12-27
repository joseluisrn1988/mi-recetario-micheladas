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

document.getElementById('btn-whatsapp').addEventListener('click', function(e) {
    e.preventDefault();
    
    // CONFIGURACIÓN DE TU NÚMERO
    // Reemplaza las X por tu número (52 + 10 dígitos para México)
    const telefono = "5214111973524"; 
    
    // MENSAJE PERSONALIZADO
    // Este mensaje le dice al cliente qué decir en cuanto se abra su WhatsApp
    const mensaje = encodeURIComponent(
        "¡Hola MasterLab! 🔥 Vengo de la página. Quiero el Recetario Maestro con la selección de las mejores recetas de internet por $99 MXN. ¿Cómo hago el pago?"
    );
    
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    
    // Abre WhatsApp en una pestaña nueva
    window.open(url, '_blank');
});

