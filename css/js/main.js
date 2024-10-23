// Mostrar la ventana modal con los detalles del producto
function showProductDetails(title, image, price, description) {
    // Actualiza los contenidos del modal con los detalles del producto
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-description').innerText = description;

    // Ocultar las demás secciones de la página
    document.getElementById('productos').style.display = 'none';

    // Mostrar la ventana modal con los detalles
    document.getElementById('product-modal').style.display = 'block';
}

// Ocultar el modal y mostrar los productos
function hideProductModal() {
    // Oculta la ventana modal
    document.getElementById('product-modal').style.display = 'none';

    // Vuelve a mostrar la sección de productos
    document.getElementById('productos').style.display = 'block';
}

// Función para agregar productos al carrito
function addToCart(title, image, price) {
    // Verifica si el producto ya está en el carrito
    const existingProduct = cartItems.find(item => item.title === title);

    if (existingProduct) {
        existingProduct.quantity++; // Aumenta la cantidad si ya existe
    } else {
        cartItems.push({
            title: title,
            image: image,
            price: price,
            quantity: 1 // Inicializar cantidad en 1
        });
    }

    // Guardar el carrito en localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Mostrar la notificación de éxito
    showNotification("¡Producto agregado con éxito!");

    // Actualiza la visualización del carrito
    updateCartDisplay();
}

// Función para mostrar la notificación
function showNotification(message) {
    const notification = document.getElementById('notification'); // Obtén el elemento de notificación
    notification.innerText = message; // Establecer el texto del mensaje
    notification.classList.add('show'); // Agregar la clase 'show' para mostrar la notificación

    // Ocultar la notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show'); // Remover la clase 'show'
    }, 3000); // 3000 ms = 3 segundos
}
