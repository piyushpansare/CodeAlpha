let currentImageIndex = 0;
const images = [
    'images 1.jpeg',
    'image 2.jpeg',
    'image 3.jpeg',
    'image 4.jpeg',
    'image 5.jpeg',
    'image 6.jpeg',
    'image 7.jpeg',
];

function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');

    // Find the index of the clicked image
    currentImageIndex = images.indexOf(imageSrc);
    
    modalImage.src = imageSrc;
    caption.innerHTML = `Image ${currentImageIndex + 1}`;
    modal.style.display = 'flex';
}

function closeModal(event) {
    // Prevent event bubbling to allow closing on span click
    if (event) {
        event.stopPropagation();
    }
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;

    // Wrap around if out of bounds
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    
    modalImage.src = images[currentImageIndex];
    caption.innerHTML = `image ${currentImageIndex + 1}`;
}
