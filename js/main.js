// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    const cardButton = document.getElementById('card-button');

    ctaButton.addEventListener('click', function() {
        alert('¡Gracias por hacer clic!');
    });

    cardButton.addEventListener('click', function() {
        alert('¡Gracias por hacer clic!');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.querySelector('.card-columns'); // Ajustar al nombre de la clase o id
    const loadMoreButton = document.getElementById('load-more-button'); // Ajustar al nombre de la id
    let page = 1;
    const postsPerPage = 6;
    let isLoading = false;

    async function fetchPosts() {
        try {
            const response = await fetch(`http://nicomunozlanding.mypressonline.com/wp-json/wp/v2/posts?page=${page}&per_page=${postsPerPage}&_embed`);
            const posts = await response.json();
            return posts;
        } catch (error) {
            console.error('Error fetching posts:', error);
            return [];
        }
    }

    function extractImageUrl(content) {
        const imgTag = content.match(/<img[^>]+src="([^">]+)"/);
        return imgTag ? imgTag[1] : 'path_to_default_image.jpg';
    }

    function createCard(post) {
        const card = document.createElement('div');
        card.classList.add('card');

        const imageUrl = extractImageUrl(post.content.rendered);
        const description = post.excerpt && post.excerpt.rendered ? post.excerpt.rendered : 'No description available';

        const cardContent = `
            <div class="card-content">
                <div class="card-header">
                    <img src="${imageUrl}" alt="Icon" class="card-icon">
                    <h3 class="card-title">${post.title.rendered}</h3>
                </div>
                <div class="card-description">${description}</div>
            </div>
            <button class="card-button">Details</button>
        `;

        card.innerHTML = cardContent;
        cardContainer.appendChild(card);
    }

    async function loadPosts() {
        if (isLoading) return; // Evitar solicitudes simultáneas
        isLoading = true;
        const posts = await fetchPosts();
        if (posts.length > 0) {
            posts.forEach(post => createCard(post));
            page++;
        }
        isLoading = false;
    }

    function handleScroll() {
        if (cardContainer.scrollHeight - cardContainer.scrollTop <= cardContainer.clientHeight + 100) {
            // Si estamos cerca del final del scroll
            loadPosts();
        }
    }

    // Load more posts on button click
    loadMoreButton.addEventListener('click', function() {
        loadPosts();
    });

    // Handle scroll event
    cardContainer.addEventListener('scroll', handleScroll);

    // Load initial posts
    loadPosts();
});



function updateTextBasedOnScreenSize() {
    const width = window.innerWidth;

    const crueltyFree = document.querySelector('.cruelty-free');
    const development = document.querySelector('.development');

    if (width <= 480) { // Tamaño de pantalla para móviles
        crueltyFree.textContent = 'Cruelty';
        development.textContent = 'Free';
    } else { // Para pantallas más grandes
        crueltyFree.textContent = 'Cruelty Free';
        development.textContent = 'Development';
    }
}

  

// Ejecutar la función al cargar la página
window.addEventListener('load', updateTextBasedOnScreenSize);

// Ejecutar la función cuando se redimensione la ventana
window.addEventListener('resize', updateTextBasedOnScreenSize);