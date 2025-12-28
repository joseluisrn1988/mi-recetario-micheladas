document.getElementById('btn-whatsapp').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Tu número configurado: 4111989469
    const telefono = "524111989469"; 
    
    // Mensaje ultra directo para cerrar la venta
    const mensaje = encodeURIComponent(
        "¡Hola MasterLab! 🔥 Vengo de la página oficial. Quiero el Recetario Maestro de 31 páginas con el Top 5 de ventas por $99 MXN. ¿Me pasas los datos para depositar?"
    );
    
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    window.open(url, '_blank');
});
