const tiltImage = document.getElementById('tiltImage');

tiltImage.addEventListener('mousemove', (e) => {
    const boundingBox = tiltImage.getBoundingClientRect();
    const mouseX = e.clientX - boundingBox.left;
    const mouseY = e.clientY - boundingBox.top;

    const percentX = mouseX / boundingBox.width - 0.5;
    const percentY = mouseY / boundingBox.height - 0.5;

    const tiltAmount = 20; // Ajuste a intensidade da inclinação conforme necessário

    const tiltX = percentY * tiltAmount;
    const tiltY = -percentX * tiltAmount;

    tiltImage.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
});

tiltImage.addEventListener('mouseleave', () => {
    tiltImage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});
