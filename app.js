window.addEventListener("load", () => {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      preloader.classList.add("hidden");
    }, 1000); // 1 segundo
  });

document.addEventListener("mousemove", (e) => {
    const image = document.getElementById("rotating-image");
  
    // Obtén las dimensiones de la ventana y calcula la posición del ratón
    const { innerWidth: width, innerHeight: height } = window;
    const x = e.clientX - width / 2; // Posición X relativa al centro
    const y = e.clientY - height / 2; // Posición Y relativa al centro
  
    // Calcula el ángulo de rotación en base a la posición del ratón
    const rotationX = (y / height) * 50; // Rotación en el eje X
    const rotationY = (x / width) * -50; // Rotación en el eje Y (invertida)
  
    // Aplica la transformación a la imagen
    image.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  });