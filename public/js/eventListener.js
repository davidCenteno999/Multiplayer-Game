addEventListener('click', (event) => {
    const player = frontendPlayers[socket.id];
    if (!player) return;

    const angle = Math.atan2(
        (event.clientY * window.devicePixelRatio)- player.y,
        (event.clientX * window.devicePixelRatio) - player.x
    );
   
    
    if (player.bullets <= 0) return;
    
    frontendPlayers[socket.id].angle = angle;

    socket.emit('shootProjectile', {
        x: player.x,
        y: player.y,
        angle
    });


    player.bullets -= 1;
    socket.emit('updateBullets', player.bullets);
    //console.log(projectiles);
});


window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();

    // Coordenadas del mouse transformadas al canvas
    const mouseX = (e.clientX - rect.left);
    const mouseY = (e.clientY - rect.top);

    const player = frontendPlayers[socket.id];
    if (!player) return;

    // Radianes del jugador hacia el mouse
    player.angle = Math.atan2(mouseY - player.y, mouseX - player.x);

    // envia también al servidor
    socket.emit("updateAngle", player.angle);
});