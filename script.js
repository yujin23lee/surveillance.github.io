document.addEventListener('click', function (e) {
  // Create a new div for the ripple
  const ripple = document.createElement('div');
  ripple.className = 'ripple';

  // Position the ripple at the mouse click location
  const x = e.clientX;
  const y = e.clientY;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  // Append the ripple div to the body
  document.body.appendChild(ripple);

  // Redirect to gallery.html after the animation ends
  setTimeout(() => {
    // You can adjust this if you want the redirection to happen faster/slower
    window.location.href = 'gallery.html';
  }, 1000);  // The same duration as the ripple animation
});


const eye = document.querySelector('.eye');
    const pupil = document.querySelector('.pupil');

    document.addEventListener('mousemove', (event) => {
      const eyeRect = eye.getBoundingClientRect();

      // Get the center of the eye
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      // Calculate relative mouse position within the eye bounds
      const mouseX = event.clientX - eyeCenterX;
      const mouseY = event.clientY - eyeCenterY;

      // Calculate maximum movement range for the pupil
      const maxHorizontalDistance = (eyeRect.width / 2) - (pupil.offsetWidth / 2);
      const maxVerticalDistance = (eyeRect.height / 2) - (pupil.offsetHeight / 2);

      // Constrain the pupil within the oval shape
      const ratio = Math.sqrt((mouseX ** 2) / (maxHorizontalDistance ** 2) + (mouseY ** 2) / (maxVerticalDistance ** 2));
      const constrainedX = ratio > 1 ? mouseX / ratio : mouseX;
      const constrainedY = ratio > 1 ? mouseY / ratio : mouseY;

      // Update the pupil's position
      pupil.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;
    });

    const eye2 = document.querySelector('.eye2');
    const pupil2 = document.querySelector('.pupil2');

    document.addEventListener('mousemove', (event) => {
      const eyeRect = eye2.getBoundingClientRect();

      // Get the center of the eye
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      // Calculate relative mouse position within the eye bounds
      const mouseX = event.clientX - eyeCenterX;
      const mouseY = event.clientY - eyeCenterY;

      // Calculate maximum movement range for the pupil
      const maxHorizontalDistance = (eyeRect.width / 2) - (pupil2.offsetWidth / 2);
      const maxVerticalDistance = (eyeRect.height / 2) - (pupil2.offsetHeight / 2);

      // Constrain the pupil within the oval shape
      const ratio = Math.sqrt((mouseX ** 2) / (maxHorizontalDistance ** 2) + (mouseY ** 2) / (maxVerticalDistance ** 2));
      const constrainedX = ratio > 1 ? mouseX / ratio : mouseX;
      const constrainedY = ratio > 1 ? mouseY / ratio : mouseY;

      // Update the pupil's position
      pupil2.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;
    });

    const grid = document.querySelector(".marilyn-grid");
  const images = [
    "img.png", "img.png", "img.png",
    "img.png", "img.png", "img.png",
    "img.png", "img.png", "img.png"
  ];

  // Fill the screen dynamically
  const totalImages = Math.ceil(window.innerWidth / (window.innerHeight * 0.3)) * 
                      Math.ceil(window.innerHeight / (window.innerHeight * 0.3));

  for (let i = 0; i < totalImages; i++) {
    const img = document.createElement("img");
    img.src = images[i % images.length]; // Cycle through images
    grid.appendChild(img);
  }

  const eye3 = document.querySelector('.eye3');
  const pupil3 = document.querySelector('.pupil3');
  const eye4 = document.querySelector('.eye4');
  const pupil4 = document.querySelector('.pupil4');

  const eye5 = document.querySelector('.eye5');
  const pupil5 = document.querySelector('.pupil5');
  const eye6 = document.querySelector('.eye6');
  const pupil6 = document.querySelector('.pupil6');

  const eye7 = document.querySelector('.eye7');
  const pupil7 = document.querySelector('.pupil7');
  const eye8 = document.querySelector('.eye8');
  const pupil8 = document.querySelector('.pupil8');

  const eye9 = document.querySelector('.eye9');
  const pupil9 = document.querySelector('.pupil9');
  const eye10 = document.querySelector('.eye10');
  const pupil10 = document.querySelector('.pupil10');

  const eye11 = document.querySelector('.eye11');
  const pupil11 = document.querySelector('.pupil11');
  const eye12 = document.querySelector('.eye12');
  const pupil12 = document.querySelector('.pupil12');

  const eye13 = document.querySelector('.eye13');
  const pupil13 = document.querySelector('.pupil13');
  const eye14 = document.querySelector('.eye14');
  const pupil14 = document.querySelector('.pupil14');

  const eye15 = document.querySelector('.eye15');
  const pupil15 = document.querySelector('.pupil15');
  const eye16 = document.querySelector('.eye16');
  const pupil16 = document.querySelector('.pupil16');

  const eye17 = document.querySelector('.eye17');
  const pupil17 = document.querySelector('.pupil17');
  const eye18 = document.querySelector('.eye18');
  const pupil18 = document.querySelector('.pupil18');

  const eye19 = document.querySelector('.eye19');
  const pupil19 = document.querySelector('.pupil19');
  const eye20 = document.querySelector('.eye20');
  const pupil20 = document.querySelector('.pupil20');

  const eye21 = document.querySelector('.eye21');
  const pupil21 = document.querySelector('.pupil21');
  const eye22 = document.querySelector('.eye22');
  const pupil22 = document.querySelector('.pupil22');

  const eye23 = document.querySelector('.eye23');
  const pupil23 = document.querySelector('.pupil23');
  const eye24 = document.querySelector('.eye24');
  const pupil24 = document.querySelector('.pupil24');

  const eye25 = document.querySelector('.eye25');
  const pupil25 = document.querySelector('.pupil25');
  const eye26 = document.querySelector('.eye26');
  const pupil26 = document.querySelector('.pupil26');

  const eye27 = document.querySelector('.eye27');
  const pupil27 = document.querySelector('.pupil27');
  const eye28 = document.querySelector('.eye28');
  const pupil28 = document.querySelector('.pupil28');

  const eye29 = document.querySelector('.eye29');
  const pupil29 = document.querySelector('.pupil29');
  const eye30 = document.querySelector('.eye30');
  const pupil30 = document.querySelector('.pupil30');

  const eye31 = document.querySelector('.eye31');
  const pupil31 = document.querySelector('.pupil31');
  const eye32 = document.querySelector('.eye32');
  const pupil32 = document.querySelector('.pupil32');

  const eye33 = document.querySelector('.eye33');
  const pupil33 = document.querySelector('.pupil33');
  const eye34 = document.querySelector('.eye34');
  const pupil34 = document.querySelector('.pupil34');

  const eye35 = document.querySelector('.eye35');
  const pupil35 = document.querySelector('.pupil35');
  const eye36 = document.querySelector('.eye36');
  const pupil36 = document.querySelector('.pupil36');

  document.addEventListener('mousemove', (event) => {
    const eyeRect3 = eye3.getBoundingClientRect();
    const eyeRect4 = eye4.getBoundingClientRect();

    const eyeRect5 = eye5.getBoundingClientRect();
    const eyeRect6 = eye6.getBoundingClientRect();

    const eyeRect7 = eye7.getBoundingClientRect();
    const eyeRect8 = eye8.getBoundingClientRect();

    const eyeRect9 = eye9.getBoundingClientRect();
    const eyeRect10 = eye10.getBoundingClientRect();

    const eyeRect11 = eye11.getBoundingClientRect();
    const eyeRect12 = eye12.getBoundingClientRect();

    const eyeRect13 = eye13.getBoundingClientRect();
    const eyeRect14 = eye14.getBoundingClientRect();

    const eyeRect15 = eye15.getBoundingClientRect();
    const eyeRect16 = eye16.getBoundingClientRect();

    const eyeRect17 = eye17.getBoundingClientRect();
    const eyeRect18 = eye18.getBoundingClientRect();

    const eyeRect19 = eye19.getBoundingClientRect();
    const eyeRect20 = eye20.getBoundingClientRect();

    const eyeRect21 = eye21.getBoundingClientRect();
    const eyeRect22 = eye22.getBoundingClientRect();

    const eyeRect23 = eye23.getBoundingClientRect();
    const eyeRect24 = eye24.getBoundingClientRect();

    const eyeRect25 = eye25.getBoundingClientRect();
    const eyeRect26 = eye26.getBoundingClientRect();

    const eyeRect27 = eye27.getBoundingClientRect();
    const eyeRect28 = eye28.getBoundingClientRect();

    const eyeRect29 = eye29.getBoundingClientRect();
    const eyeRect30 = eye30.getBoundingClientRect();

    const eyeRect31 = eye31.getBoundingClientRect();
    const eyeRect32 = eye32.getBoundingClientRect();

    const eyeRect33 = eye33.getBoundingClientRect();
    const eyeRect34 = eye34.getBoundingClientRect();

    const eyeRect35 = eye35.getBoundingClientRect();
    const eyeRect36 = eye36.getBoundingClientRect();

    // Get the center of the eye
    const eye3CenterX = eyeRect3.left + eyeRect3.width / 2;
    const eye3CenterY = eyeRect3.top + eyeRect3.height / 2;
    const eye4CenterX = eyeRect4.left + eyeRect4.width / 2;
    const eye4CenterY = eyeRect4.top + eyeRect4.height / 2;

    const eye5CenterX = eyeRect5.left + eyeRect5.width / 2;
    const eye5CenterY = eyeRect5.top + eyeRect5.height / 2;
    const eye6CenterX = eyeRect6.left + eyeRect6.width / 2;
    const eye6CenterY = eyeRect6.top + eyeRect6.height / 2;

    const eye7CenterX = eyeRect7.left + eyeRect7.width / 2;
    const eye7CenterY = eyeRect7.top + eyeRect7.height / 2;
    const eye8CenterX = eyeRect8.left + eyeRect8.width / 2;
    const eye8CenterY = eyeRect8.top + eyeRect8.height / 2;

    const eye9CenterX = eyeRect9.left + eyeRect9.width / 2;
    const eye9CenterY = eyeRect9.top + eyeRect9.height / 2;
    const eye10CenterX = eyeRect10.left + eyeRect10.width / 2;
    const eye10CenterY = eyeRect10.top + eyeRect10.height / 2;

    const eye11CenterX = eyeRect11.left + eyeRect11.width / 2;
    const eye11CenterY = eyeRect11.top + eyeRect11.height / 2;
    const eye12CenterX = eyeRect12.left + eyeRect12.width / 2;
    const eye12CenterY = eyeRect12.top + eyeRect12.height / 2;

    const eye13CenterX = eyeRect13.left + eyeRect13.width / 2;
    const eye13CenterY = eyeRect13.top + eyeRect13.height / 2;
    const eye14CenterX = eyeRect14.left + eyeRect14.width / 2;
    const eye14CenterY = eyeRect14.top + eyeRect14.height / 2;

    const eye15CenterX = eyeRect15.left + eyeRect15.width / 2;
    const eye15CenterY = eyeRect15.top + eyeRect15.height / 2;
    const eye16CenterX = eyeRect16.left + eyeRect16.width / 2;
    const eye16CenterY = eyeRect16.top + eyeRect16.height / 2;

    const eye17CenterX = eyeRect17.left + eyeRect17.width / 2;
    const eye17CenterY = eyeRect17.top + eyeRect17.height / 2;
    const eye18CenterX = eyeRect18.left + eyeRect18.width / 2;
    const eye18CenterY = eyeRect18.top + eyeRect18.height / 2;

    const eye19CenterX = eyeRect19.left + eyeRect19.width / 2;
    const eye19CenterY = eyeRect19.top + eyeRect19.height / 2;
    const eye20CenterX = eyeRect20.left + eyeRect20.width / 2;
    const eye20CenterY = eyeRect20.top + eyeRect20.height / 2;

    const eye21CenterX = eyeRect21.left + eyeRect21.width / 2;
    const eye21CenterY = eyeRect21.top + eyeRect21.height / 2;
    const eye22CenterX = eyeRect22.left + eyeRect22.width / 2;
    const eye22CenterY = eyeRect22.top + eyeRect22.height / 2;

    const eye23CenterX = eyeRect23.left + eyeRect23.width / 2;
    const eye23CenterY = eyeRect23.top + eyeRect23.height / 2;
    const eye24CenterX = eyeRect24.left + eyeRect24.width / 2;
    const eye24CenterY = eyeRect24.top + eyeRect24.height / 2;

    const eye25CenterX = eyeRect25.left + eyeRect25.width / 2;
    const eye25CenterY = eyeRect25.top + eyeRect25.height / 2;
    const eye26CenterX = eyeRect26.left + eyeRect26.width / 2;
    const eye26CenterY = eyeRect26.top + eyeRect26.height / 2;

    const eye27CenterX = eyeRect27.left + eyeRect27.width / 2;
    const eye27CenterY = eyeRect27.top + eyeRect27.height / 2;
    const eye28CenterX = eyeRect28.left + eyeRect28.width / 2;
    const eye28CenterY = eyeRect28.top + eyeRect28.height / 2;

    const eye29CenterX = eyeRect29.left + eyeRect29.width / 2;
    const eye29CenterY = eyeRect29.top + eyeRect29.height / 2;
    const eye30CenterX = eyeRect30.left + eyeRect30.width / 2;
    const eye30CenterY = eyeRect30.top + eyeRect30.height / 2;

    const eye31CenterX = eyeRect31.left + eyeRect31.width / 2;
    const eye31CenterY = eyeRect31.top + eyeRect31.height / 2;
    const eye32CenterX = eyeRect32.left + eyeRect32.width / 2;
    const eye32CenterY = eyeRect32.top + eyeRect32.height / 2;

    const eye33CenterX = eyeRect33.left + eyeRect33.width / 2;
    const eye33CenterY = eyeRect33.top + eyeRect33.height / 2;
    const eye34CenterX = eyeRect34.left + eyeRect34.width / 2;
    const eye34CenterY = eyeRect34.top + eyeRect34.height / 2;

    const eye35CenterX = eyeRect35.left + eyeRect35.width / 2;
    const eye35CenterY = eyeRect35.top + eyeRect35.height / 2;
    const eye36CenterX = eyeRect36.left + eyeRect36.width / 2;
    const eye36CenterY = eyeRect36.top + eyeRect36.height / 2;

    // Calculate relative mouse position within the eye bounds
    const mouseX3 = event.clientX - eye3CenterX;
    const mouseY3 = event.clientY - eye3CenterY;
    const mouseX4 = event.clientX - eye4CenterX;
    const mouseY4 = event.clientY - eye4CenterY;

    const mouseX5 = event.clientX - eye5CenterX;
    const mouseY5 = event.clientY - eye5CenterY;
    const mouseX6 = event.clientX - eye6CenterX;
    const mouseY6 = event.clientY - eye6CenterY;

    const mouseX7 = event.clientX - eye7CenterX;
    const mouseY7 = event.clientY - eye7CenterY;
    const mouseX8 = event.clientX - eye8CenterX;
    const mouseY8 = event.clientY - eye8CenterY;

    const mouseX9 = event.clientX - eye9CenterX;
    const mouseY9 = event.clientY - eye9CenterY;
    const mouseX10 = event.clientX - eye10CenterX;
    const mouseY10 = event.clientY - eye10CenterY;

    const mouseX11 = event.clientX - eye11CenterX;
    const mouseY11 = event.clientY - eye11CenterY;
    const mouseX12 = event.clientX - eye12CenterX;
    const mouseY12 = event.clientY - eye12CenterY;

    const mouseX13 = event.clientX - eye13CenterX;
    const mouseY13 = event.clientY - eye13CenterY;
    const mouseX14 = event.clientX - eye14CenterX;
    const mouseY14 = event.clientY - eye14CenterY;

    const mouseX15 = event.clientX - eye15CenterX;
    const mouseY15 = event.clientY - eye15CenterY;
    const mouseX16 = event.clientX - eye16CenterX;
    const mouseY16 = event.clientY - eye16CenterY;

    const mouseX17 = event.clientX - eye17CenterX;
    const mouseY17 = event.clientY - eye17CenterY;
    const mouseX18 = event.clientX - eye18CenterX;
    const mouseY18 = event.clientY - eye18CenterY;

    const mouseX19 = event.clientX - eye19CenterX;
    const mouseY19 = event.clientY - eye19CenterY;
    const mouseX20 = event.clientX - eye20CenterX;
    const mouseY20 = event.clientY - eye20CenterY;

    const mouseX21 = event.clientX - eye21CenterX;
    const mouseY21 = event.clientY - eye21CenterY;
    const mouseX22 = event.clientX - eye22CenterX;
    const mouseY22 = event.clientY - eye22CenterY;

    const mouseX23 = event.clientX - eye23CenterX;
    const mouseY23 = event.clientY - eye23CenterY;
    const mouseX24 = event.clientX - eye24CenterX;
    const mouseY24 = event.clientY - eye24CenterY;

    const mouseX25 = event.clientX - eye25CenterX;
    const mouseY25 = event.clientY - eye25CenterY;
    const mouseX26 = event.clientX - eye26CenterX;
    const mouseY26 = event.clientY - eye26CenterY;

    const mouseX27 = event.clientX - eye27CenterX;
    const mouseY27 = event.clientY - eye27CenterY;
    const mouseX28 = event.clientX - eye28CenterX;
    const mouseY28 = event.clientY - eye28CenterY;

    const mouseX29 = event.clientX - eye29CenterX;
    const mouseY29 = event.clientY - eye29CenterY;
    const mouseX30 = event.clientX - eye30CenterX;
    const mouseY30 = event.clientY - eye30CenterY;

    const mouseX31 = event.clientX - eye31CenterX;
    const mouseY31 = event.clientY - eye31CenterY;
    const mouseX32 = event.clientX - eye32CenterX;
    const mouseY32 = event.clientY - eye32CenterY;

    const mouseX33 = event.clientX - eye33CenterX;
    const mouseY33 = event.clientY - eye33CenterY;
    const mouseX34 = event.clientX - eye34CenterX;
    const mouseY34 = event.clientY - eye34CenterY;

    const mouseX35 = event.clientX - eye35CenterX;
    const mouseY35 = event.clientY - eye35CenterY;
    const mouseX36 = event.clientX - eye36CenterX;
    const mouseY36 = event.clientY - eye36CenterY;

    // Calculate maximum movement range for the pupil
    const maxHorizontalDistance3 = (eyeRect3.width / 2) - (pupil3.offsetWidth / 2);
    const maxVerticalDistance3 = (eyeRect3.height / 2) - (pupil3.offsetHeight / 2);
    const maxHorizontalDistance4 = (eyeRect4.width / 2) - (pupil4.offsetWidth / 2);
    const maxVerticalDistance4 = (eyeRect4.height / 2) - (pupil4.offsetHeight / 2);

    const maxHorizontalDistance5 = (eyeRect5.width / 2) - (pupil5.offsetWidth / 2);
    const maxVerticalDistance5 = (eyeRect5.height / 2) - (pupil5.offsetHeight / 2);
    const maxHorizontalDistance6 = (eyeRect6.width / 2) - (pupil6.offsetWidth / 2);
    const maxVerticalDistance6 = (eyeRect6.height / 2) - (pupil6.offsetHeight / 2);

    const maxHorizontalDistance7 = (eyeRect7.width / 2) - (pupil7.offsetWidth / 2);
    const maxVerticalDistance7 = (eyeRect7.height / 2) - (pupil7.offsetHeight / 2);
    const maxHorizontalDistance8 = (eyeRect8.width / 2) - (pupil8.offsetWidth / 2);
    const maxVerticalDistance8 = (eyeRect8.height / 2) - (pupil8.offsetHeight / 2);

    const maxHorizontalDistance9 = (eyeRect9.width / 2) - (pupil9.offsetWidth / 2);
    const maxVerticalDistance9 = (eyeRect9.height / 2) - (pupil9.offsetHeight / 2);
    const maxHorizontalDistance10 = (eyeRect10.width / 2) - (pupil10.offsetWidth / 2);
    const maxVerticalDistance10 = (eyeRect10.height / 2) - (pupil10.offsetHeight / 2);

    const maxHorizontalDistance11 = (eyeRect11.width / 2) - (pupil11.offsetWidth / 2);
    const maxVerticalDistance11 = (eyeRect11.height / 2) - (pupil11.offsetHeight / 2);
    const maxHorizontalDistance12 = (eyeRect12.width / 2) - (pupil12.offsetWidth / 2);
    const maxVerticalDistance12 = (eyeRect12.height / 2) - (pupil12.offsetHeight / 2);

    const maxHorizontalDistance13 = (eyeRect13.width / 2) - (pupil13.offsetWidth / 2);
    const maxVerticalDistance13 = (eyeRect13.height / 2) - (pupil13.offsetHeight / 2);
    const maxHorizontalDistance14 = (eyeRect14.width / 2) - (pupil14.offsetWidth / 2);
    const maxVerticalDistance14 = (eyeRect14.height / 2) - (pupil14.offsetHeight / 2);

    const maxHorizontalDistance15 = (eyeRect15.width / 2) - (pupil15.offsetWidth / 2);
    const maxVerticalDistance15 = (eyeRect15.height / 2) - (pupil15.offsetHeight / 2);
    const maxHorizontalDistance16 = (eyeRect16.width / 2) - (pupil16.offsetWidth / 2);
    const maxVerticalDistance16 = (eyeRect16.height / 2) - (pupil16.offsetHeight / 2);

    const maxHorizontalDistance17 = (eyeRect17.width / 2) - (pupil17.offsetWidth / 2);
    const maxVerticalDistance17 = (eyeRect17.height / 2) - (pupil17.offsetHeight / 2);
    const maxHorizontalDistance18 = (eyeRect18.width / 2) - (pupil18.offsetWidth / 2);
    const maxVerticalDistance18 = (eyeRect18.height / 2) - (pupil18.offsetHeight / 2);

    const maxHorizontalDistance19 = (eyeRect19.width / 2) - (pupil19.offsetWidth / 2);
    const maxVerticalDistance19 = (eyeRect19.height / 2) - (pupil19.offsetHeight / 2);
    const maxHorizontalDistance20 = (eyeRect20.width / 2) - (pupil20.offsetWidth / 2);
    const maxVerticalDistance20 = (eyeRect20.height / 2) - (pupil20.offsetHeight / 2);

    const maxHorizontalDistance21 = (eyeRect21.width / 2) - (pupil21.offsetWidth / 2);
    const maxVerticalDistance21 = (eyeRect21.height / 2) - (pupil21.offsetHeight / 2);
    const maxHorizontalDistance22 = (eyeRect22.width / 2) - (pupil22.offsetWidth / 2);
    const maxVerticalDistance22 = (eyeRect22.height / 2) - (pupil22.offsetHeight / 2);

    const maxHorizontalDistance23 = (eyeRect23.width / 2) - (pupil23.offsetWidth / 2);
    const maxVerticalDistance23 = (eyeRect23.height / 2) - (pupil23.offsetHeight / 2);
    const maxHorizontalDistance24 = (eyeRect24.width / 2) - (pupil24.offsetWidth / 2);
    const maxVerticalDistance24 = (eyeRect24.height / 2) - (pupil24.offsetHeight / 2);

    const maxHorizontalDistance25 = (eyeRect25.width / 2) - (pupil25.offsetWidth / 2);
    const maxVerticalDistance25 = (eyeRect25.height / 2) - (pupil25.offsetHeight / 2);
    const maxHorizontalDistance26 = (eyeRect26.width / 2) - (pupil26.offsetWidth / 2);
    const maxVerticalDistance26 = (eyeRect26.height / 2) - (pupil26.offsetHeight / 2);

    const maxHorizontalDistance27 = (eyeRect27.width / 2) - (pupil27.offsetWidth / 2);
    const maxVerticalDistance27 = (eyeRect27.height / 2) - (pupil27.offsetHeight / 2);
    const maxHorizontalDistance28 = (eyeRect28.width / 2) - (pupil28.offsetWidth / 2);
    const maxVerticalDistance28 = (eyeRect28.height / 2) - (pupil28.offsetHeight / 2);

    const maxHorizontalDistance29 = (eyeRect29.width / 2) - (pupil29.offsetWidth / 2);
    const maxVerticalDistance29 = (eyeRect29.height / 2) - (pupil29.offsetHeight / 2);
    const maxHorizontalDistance30 = (eyeRect30.width / 2) - (pupil30.offsetWidth / 2);
    const maxVerticalDistance30 = (eyeRect30.height / 2) - (pupil30.offsetHeight / 2);

    const maxHorizontalDistance31 = (eyeRect31.width / 2) - (pupil31.offsetWidth / 2);
    const maxVerticalDistance31 = (eyeRect31.height / 2) - (pupil31.offsetHeight / 2);
    const maxHorizontalDistance32 = (eyeRect32.width / 2) - (pupil32.offsetWidth / 2);
    const maxVerticalDistance32 = (eyeRect32.height / 2) - (pupil32.offsetHeight / 2);

    const maxHorizontalDistance33 = (eyeRect33.width / 2) - (pupil33.offsetWidth / 2);
    const maxVerticalDistance33 = (eyeRect33.height / 2) - (pupil33.offsetHeight / 2);
    const maxHorizontalDistance34 = (eyeRect34.width / 2) - (pupil34.offsetWidth / 2);
    const maxVerticalDistance34 = (eyeRect34.height / 2) - (pupil34.offsetHeight / 2);

    const maxHorizontalDistance35 = (eyeRect35.width / 2) - (pupil35.offsetWidth / 2);
    const maxVerticalDistance35 = (eyeRect35.height / 2) - (pupil35.offsetHeight / 2);
    const maxHorizontalDistance36 = (eyeRect36.width / 2) - (pupil36.offsetWidth / 2);
    const maxVerticalDistance36 = (eyeRect36.height / 2) - (pupil36.offsetHeight / 2);

    // Constrain the pupil within the oval shape
    const ratio3 = Math.sqrt((mouseX3 ** 2) / (maxHorizontalDistance3 ** 2) + (mouseY3 ** 2) / (maxVerticalDistance3 ** 2));
    const constrainedX3 = ratio3 > 1 ? mouseX3 / ratio3 : mouseX3;
    const constrainedY3 = ratio3 > 1 ? mouseY3 / ratio3 : mouseY3;
    const ratio4 = Math.sqrt((mouseX4 ** 2) / (maxHorizontalDistance4 ** 2) + (mouseY4 ** 2) / (maxVerticalDistance4 ** 2));
    const constrainedX4 = ratio4 > 1 ? mouseX4 / ratio4 : mouseX4;
    const constrainedY4 = ratio4 > 1 ? mouseY4 / ratio4 : mouseY4;

    const ratio5 = Math.sqrt((mouseX5 ** 2) / (maxHorizontalDistance5 ** 2) + (mouseY5 ** 2) / (maxVerticalDistance5 ** 2));
    const constrainedX5 = ratio5 > 1 ? mouseX5 / ratio5 : mouseX5;
    const constrainedY5 = ratio5 > 1 ? mouseY5 / ratio5 : mouseY5;
    const ratio6 = Math.sqrt((mouseX6 ** 2) / (maxHorizontalDistance6 ** 2) + (mouseY6 ** 2) / (maxVerticalDistance6 ** 2));
    const constrainedX6 = ratio6 > 1 ? mouseX6 / ratio6 : mouseX6;
    const constrainedY6 = ratio6 > 1 ? mouseY6 / ratio6 : mouseY6;

    const ratio7 = Math.sqrt((mouseX7 ** 2) / (maxHorizontalDistance7 ** 2) + (mouseY7 ** 2) / (maxVerticalDistance7 ** 2));
    const constrainedX7 = ratio7 > 1 ? mouseX7 / ratio7 : mouseX7;
    const constrainedY7 = ratio7 > 1 ? mouseY7 / ratio7 : mouseY7;
    const ratio8 = Math.sqrt((mouseX8 ** 2) / (maxHorizontalDistance8 ** 2) + (mouseY8 ** 2) / (maxVerticalDistance8 ** 2));
    const constrainedX8 = ratio8 > 1 ? mouseX8 / ratio8 : mouseX8;
    const constrainedY8 = ratio8 > 1 ? mouseY8 / ratio8 : mouseY8;

    const ratio9 = Math.sqrt((mouseX9 ** 2) / (maxHorizontalDistance9 ** 2) + (mouseY9 ** 2) / (maxVerticalDistance9 ** 2));
    const constrainedX9 = ratio9 > 1 ? mouseX9 / ratio9 : mouseX9;
    const constrainedY9 = ratio9 > 1 ? mouseY9 / ratio9 : mouseY9;
    const ratio10 = Math.sqrt((mouseX10 ** 2) / (maxHorizontalDistance10 ** 2) + (mouseY10 ** 2) / (maxVerticalDistance10 ** 2));
    const constrainedX10 = ratio10 > 1 ? mouseX10 / ratio10 : mouseX10;
    const constrainedY10 = ratio10 > 1 ? mouseY10 / ratio10 : mouseY10;

    const ratio11 = Math.sqrt((mouseX11 ** 2) / (maxHorizontalDistance11 ** 2) + (mouseY11 ** 2) / (maxVerticalDistance11 ** 2));
    const constrainedX11 = ratio11 > 1 ? mouseX11 / ratio11 : mouseX11;
    const constrainedY11 = ratio11 > 1 ? mouseY11 / ratio11 : mouseY11;
    const ratio12 = Math.sqrt((mouseX12 ** 2) / (maxHorizontalDistance12 ** 2) + (mouseY12 ** 2) / (maxVerticalDistance12 ** 2));
    const constrainedX12 = ratio12 > 1 ? mouseX12 / ratio12 : mouseX12;
    const constrainedY12 = ratio12 > 1 ? mouseY12 / ratio12 : mouseY12;

    const ratio13 = Math.sqrt((mouseX13 ** 2) / (maxHorizontalDistance13 ** 2) + (mouseY13 ** 2) / (maxVerticalDistance13 ** 2));
    const constrainedX13 = ratio13 > 1 ? mouseX13 / ratio13 : mouseX13;
    const constrainedY13 = ratio13 > 1 ? mouseY13 / ratio13 : mouseY13;
    const ratio14 = Math.sqrt((mouseX14 ** 2) / (maxHorizontalDistance14 ** 2) + (mouseY14 ** 2) / (maxVerticalDistance14 ** 2));
    const constrainedX14 = ratio14 > 1 ? mouseX14 / ratio14 : mouseX14;
    const constrainedY14 = ratio14 > 1 ? mouseY14 / ratio14 : mouseY14;

    const ratio15 = Math.sqrt((mouseX15 ** 2) / (maxHorizontalDistance15 ** 2) + (mouseY15 ** 2) / (maxVerticalDistance15 ** 2));
    const constrainedX15 = ratio15 > 1 ? mouseX15 / ratio15 : mouseX15;
    const constrainedY15 = ratio15 > 1 ? mouseY15 / ratio15 : mouseY15;
    const ratio16 = Math.sqrt((mouseX16 ** 2) / (maxHorizontalDistance16 ** 2) + (mouseY16 ** 2) / (maxVerticalDistance16 ** 2));
    const constrainedX16 = ratio16 > 1 ? mouseX16 / ratio16 : mouseX16;
    const constrainedY16 = ratio16 > 1 ? mouseY16 / ratio16 : mouseY16;

    const ratio17 = Math.sqrt((mouseX17 ** 2) / (maxHorizontalDistance17 ** 2) + (mouseY17 ** 2) / (maxVerticalDistance17 ** 2));
    const constrainedX17 = ratio17 > 1 ? mouseX17 / ratio17 : mouseX17;
    const constrainedY17 = ratio17 > 1 ? mouseY17 / ratio17 : mouseY17;
    const ratio18 = Math.sqrt((mouseX18 ** 2) / (maxHorizontalDistance18 ** 2) + (mouseY18 ** 2) / (maxVerticalDistance18 ** 2));
    const constrainedX18 = ratio18 > 1 ? mouseX18 / ratio18 : mouseX18;
    const constrainedY18 = ratio18 > 1 ? mouseY18 / ratio18 : mouseY18;

    const ratio19 = Math.sqrt((mouseX19 ** 2) / (maxHorizontalDistance19 ** 2) + (mouseY19 ** 2) / (maxVerticalDistance19 ** 2));
    const constrainedX19 = ratio19 > 1 ? mouseX19 / ratio19 : mouseX19;
    const constrainedY19 = ratio19 > 1 ? mouseY19 / ratio19 : mouseY19;
    const ratio20 = Math.sqrt((mouseX20 ** 2) / (maxHorizontalDistance20 ** 2) + (mouseY20 ** 2) / (maxVerticalDistance20 ** 2));
    const constrainedX20 = ratio20 > 1 ? mouseX20 / ratio20 : mouseX20;
    const constrainedY20 = ratio20 > 1 ? mouseY20 / ratio20 : mouseY20;

    const ratio21 = Math.sqrt((mouseX21 ** 2) / (maxHorizontalDistance21 ** 2) + (mouseY21 ** 2) / (maxVerticalDistance21 ** 2));
    const constrainedX21 = ratio21 > 1 ? mouseX21 / ratio21 : mouseX21;
    const constrainedY21 = ratio21 > 1 ? mouseY21 / ratio21 : mouseY21;
    const ratio22 = Math.sqrt((mouseX22 ** 2) / (maxHorizontalDistance22 ** 2) + (mouseY22 ** 2) / (maxVerticalDistance22 ** 2));
    const constrainedX22 = ratio22 > 1 ? mouseX22 / ratio22 : mouseX22;
    const constrainedY22 = ratio22 > 1 ? mouseY22 / ratio22 : mouseY22;

    const ratio23 = Math.sqrt((mouseX23 ** 2) / (maxHorizontalDistance23 ** 2) + (mouseY23 ** 2) / (maxVerticalDistance23 ** 2));
    const constrainedX23 = ratio23 > 1 ? mouseX23 / ratio23 : mouseX23;
    const constrainedY23 = ratio23 > 1 ? mouseY23 / ratio23 : mouseY23;
    const ratio24 = Math.sqrt((mouseX24 ** 2) / (maxHorizontalDistance24 ** 2) + (mouseY24 ** 2) / (maxVerticalDistance24 ** 2));
    const constrainedX24 = ratio24 > 1 ? mouseX24 / ratio24 : mouseX24;
    const constrainedY24 = ratio24 > 1 ? mouseY24 / ratio24 : mouseY24;

    const ratio25 = Math.sqrt((mouseX25 ** 2) / (maxHorizontalDistance25 ** 2) + (mouseY25 ** 2) / (maxVerticalDistance25 ** 2));
    const constrainedX25 = ratio25 > 1 ? mouseX25 / ratio25 : mouseX25;
    const constrainedY25 = ratio25 > 1 ? mouseY25 / ratio25 : mouseY25;
    const ratio26 = Math.sqrt((mouseX26 ** 2) / (maxHorizontalDistance26 ** 2) + (mouseY26 ** 2) / (maxVerticalDistance26 ** 2));
    const constrainedX26 = ratio26 > 1 ? mouseX26 / ratio26 : mouseX26;
    const constrainedY26 = ratio26 > 1 ? mouseY26 / ratio26 : mouseY26;

    const ratio27 = Math.sqrt((mouseX27 ** 2) / (maxHorizontalDistance27 ** 2) + (mouseY27 ** 2) / (maxVerticalDistance27 ** 2));
    const constrainedX27 = ratio27 > 1 ? mouseX27 / ratio27 : mouseX27;
    const constrainedY27 = ratio27 > 1 ? mouseY27 / ratio27 : mouseY27;
    const ratio28 = Math.sqrt((mouseX28 ** 2) / (maxHorizontalDistance28 ** 2) + (mouseY28 ** 2) / (maxVerticalDistance28 ** 2));
    const constrainedX28 = ratio28 > 1 ? mouseX28 / ratio28 : mouseX28;
    const constrainedY28 = ratio28 > 1 ? mouseY28 / ratio28 : mouseY28;

    const ratio29 = Math.sqrt((mouseX29 ** 2) / (maxHorizontalDistance29 ** 2) + (mouseY29 ** 2) / (maxVerticalDistance29 ** 2));
    const constrainedX29 = ratio29 > 1 ? mouseX29 / ratio29 : mouseX29;
    const constrainedY29 = ratio29 > 1 ? mouseY29 / ratio29 : mouseY29;
    const ratio30 = Math.sqrt((mouseX30 ** 2) / (maxHorizontalDistance30 ** 2) + (mouseY30 ** 2) / (maxVerticalDistance30 ** 2));
    const constrainedX30 = ratio30 > 1 ? mouseX30 / ratio30 : mouseX30;
    const constrainedY30 = ratio30 > 1 ? mouseY30 / ratio30 : mouseY30;

    const ratio31 = Math.sqrt((mouseX31 ** 2) / (maxHorizontalDistance31 ** 2) + (mouseY31 ** 2) / (maxVerticalDistance31 ** 2));
    const constrainedX31 = ratio31 > 1 ? mouseX31 / ratio31 : mouseX31;
    const constrainedY31 = ratio31 > 1 ? mouseY31 / ratio31 : mouseY31;
    const ratio32 = Math.sqrt((mouseX32 ** 2) / (maxHorizontalDistance32 ** 2) + (mouseY32 ** 2) / (maxVerticalDistance32 ** 2));
    const constrainedX32 = ratio32 > 1 ? mouseX32 / ratio32 : mouseX32;
    const constrainedY32 = ratio32 > 1 ? mouseY32 / ratio32 : mouseY32;

    const ratio33 = Math.sqrt((mouseX33 ** 2) / (maxHorizontalDistance33 ** 2) + (mouseY33 ** 2) / (maxVerticalDistance33 ** 2));
    const constrainedX33 = ratio33 > 1 ? mouseX33 / ratio33 : mouseX33;
    const constrainedY33 = ratio33 > 1 ? mouseY33 / ratio33 : mouseY33;
    const ratio34 = Math.sqrt((mouseX34 ** 2) / (maxHorizontalDistance34 ** 2) + (mouseY34 ** 2) / (maxVerticalDistance34 ** 2));
    const constrainedX34 = ratio34 > 1 ? mouseX34 / ratio34 : mouseX34;
    const constrainedY34 = ratio34 > 1 ? mouseY34 / ratio34 : mouseY34;

    const ratio35 = Math.sqrt((mouseX35 ** 2) / (maxHorizontalDistance35 ** 2) + (mouseY35 ** 2) / (maxVerticalDistance35 ** 2));
    const constrainedX35 = ratio35 > 1 ? mouseX35 / ratio35 : mouseX35;
    const constrainedY35 = ratio35 > 1 ? mouseY35 / ratio35 : mouseY35;
    const ratio36 = Math.sqrt((mouseX36 ** 2) / (maxHorizontalDistance36 ** 2) + (mouseY36 ** 2) / (maxVerticalDistance36 ** 2));
    const constrainedX36 = ratio36 > 1 ? mouseX36 / ratio36 : mouseX36;
    const constrainedY36 = ratio36 > 1 ? mouseY36 / ratio36 : mouseY36;

    // Update the pupil's position
    pupil3.style.transform = `translate(${constrainedX3}px, ${constrainedY3}px)`;
    pupil4.style.transform = `translate(${constrainedX4}px, ${constrainedY4}px)`;

    pupil5.style.transform = `translate(${constrainedX5}px, ${constrainedY5}px)`;
    pupil6.style.transform = `translate(${constrainedX6}px, ${constrainedY6}px)`;

    pupil7.style.transform = `translate(${constrainedX7}px, ${constrainedY7}px)`;
    pupil8.style.transform = `translate(${constrainedX8}px, ${constrainedY8}px)`;

    pupil9.style.transform = `translate(${constrainedX9}px, ${constrainedY9}px)`;
    pupil10.style.transform = `translate(${constrainedX10}px, ${constrainedY10}px)`;

    pupil11.style.transform = `translate(${constrainedX11}px, ${constrainedY11}px)`;
    pupil12.style.transform = `translate(${constrainedX12}px, ${constrainedY12}px)`;

    pupil13.style.transform = `translate(${constrainedX13}px, ${constrainedY13}px)`;
    pupil14.style.transform = `translate(${constrainedX14}px, ${constrainedY14}px)`;

    pupil15.style.transform = `translate(${constrainedX15}px, ${constrainedY15}px)`;
    pupil16.style.transform = `translate(${constrainedX16}px, ${constrainedY16}px)`;

    pupil17.style.transform = `translate(${constrainedX17}px, ${constrainedY17}px)`;
    pupil18.style.transform = `translate(${constrainedX18}px, ${constrainedY18}px)`;

    pupil19.style.transform = `translate(${constrainedX19}px, ${constrainedY19}px)`;
    pupil20.style.transform = `translate(${constrainedX20}px, ${constrainedY20}px)`;

    pupil21.style.transform = `translate(${constrainedX21}px, ${constrainedY21}px)`;
    pupil22.style.transform = `translate(${constrainedX22}px, ${constrainedY22}px)`;

    pupil23.style.transform = `translate(${constrainedX23}px, ${constrainedY23}px)`;
    pupil24.style.transform = `translate(${constrainedX24}px, ${constrainedY24}px)`;

    pupil25.style.transform = `translate(${constrainedX25}px, ${constrainedY25}px)`;
    pupil26.style.transform = `translate(${constrainedX26}px, ${constrainedY26}px)`;

    pupil27.style.transform = `translate(${constrainedX27}px, ${constrainedY27}px)`;
    pupil28.style.transform = `translate(${constrainedX28}px, ${constrainedY28}px)`;

    pupil29.style.transform = `translate(${constrainedX29}px, ${constrainedY29}px)`;
    pupil30.style.transform = `translate(${constrainedX30}px, ${constrainedY30}px)`;

    pupil31.style.transform = `translate(${constrainedX31}px, ${constrainedY31}px)`;
    pupil32.style.transform = `translate(${constrainedX32}px, ${constrainedY32}px)`;

    pupil33.style.transform = `translate(${constrainedX33}px, ${constrainedY33}px)`;
    pupil34.style.transform = `translate(${constrainedX34}px, ${constrainedY34}px)`;

    pupil35.style.transform = `translate(${constrainedX35}px, ${constrainedY35}px)`;
    pupil36.style.transform = `translate(${constrainedX36}px, ${constrainedY36}px)`;
  });