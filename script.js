document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica del Acordeón
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            // Cerrar otros abiertos
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) item.style.display = 'none';
            });

            // Toggle actual
            if (content.style.display === 'block') {
                content.style.display = 'none';
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            } else {
                content.style.display = 'block';
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            }
        });
    });

    // Notificaciones de "Venta Reciente" (Prueba Social)
    const nombres = ["Luis G.", "Mariana R.", "Pedro S.", "Ximena V.", "Jorge M."];
    
    function showPopup() {
        const name = nombres[Math.floor(Math.random() * nombres.length)];
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed; bottom: 100px; left: 20px; 
            background: white; color: black; padding: 10px 15px; 
            border-radius: 10px; font-size: 0.75rem; font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3); z-index: 1000;
            border-left: 4px solid #25D366; animation: fadeInUp 0.5s ease-out;
        `;
        popup.innerHTML = `✅ ${name} compró el recetario hace poco`;
        document.body.appendChild(popup);
        
        setTimeout(() => {
            popup.style.animation = "fadeOutDown 0.5s ease-in";
            setTimeout(() => popup.remove(), 500);
        }, 4000);
    }

    // Mostrar cada 15-20 segundos
    setTimeout(showPopup, 5000);
    setInterval(showPopup, 18000);
});

// Estilos de animación para las notificaciones
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeOutDown { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(20px); } }
`;
document.head.appendChild(style);