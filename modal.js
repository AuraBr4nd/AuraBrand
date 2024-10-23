// Obtener el carrito de localStorage o inicializarlo si no existe
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para cambiar la imagen del producto
function changeImage(imageSrc) {
    document.getElementById('product-image').src = imageSrc;
}

// Función para agregar un producto al carrito
function addToCart() {
    const productName = document.getElementById('product-name').innerText;
    const productPrice = document.getElementById('product-price').innerText.replace(/Precio: \$| \d+/g, ''); // Extraer solo el precio
    const selectedSize = document.getElementById('size').value;

    const product = {
        name: productName,
        price: productPrice,
        size: selectedSize
    };

    cart.push(product); // Agregar producto al carrito
    localStorage.setItem('cart', JSON.stringify(cart)); // Guardar en localStorage
    showNotification(); // Mostrar notificación
}

// Función para mostrar la notificación de que el producto fue agregado al carrito
function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.style.display = 'none';
            notification.style.opacity = '1'; // Resetear opacidad
        }, 500);
    }, 2000);
}

// Función para abrir el modal de contacto
function openContactModal() {
    const modal = document.getElementById("modalContacto");
    modal.style.display = "block";
}

// Función para cerrar el modal de contacto
function closeContactModal() {
    const modal = document.getElementById("modalContacto");
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del contenido del modal, también se cierra
window.onclick = function(event) {
    const modal = document.getElementById("modalContacto");
    if (event.target == modal) {
        closeContactModal();
    }
}

// Función para cerrar el modal al hacer clic en el botón de cerrar
const span = document.getElementsByClassName("cerrar")[0];
if (span) {
    span.onclick = closeContactModal;
}

// Si se está en la página de detalles de producto, inicializa la información del producto
if (window.location.pathname.endsWith('detallesproducto.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('product-name').innerText = urlParams.get('name');
    document.getElementById('product-image').src = urlParams.get('image');
    document.getElementById('product-price').innerText = `Precio: $${urlParams.get('price')}`;
    document.getElementById('product-description').innerText = urlParams.get('description');
}
