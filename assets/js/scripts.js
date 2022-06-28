function mostrarFecha() {
    
    let ahora = new Date();
    const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let dia_semana = dias_semana[ahora.getDay()];
    let dia = ahora.getDate();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let mes = meses[ahora.getMonth()];
    let anio = ahora.getFullYear();
    let hora = ahora.getHours();
    let minuto = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    let alerta = `Hoy es ${dia_semana} ${dia} de ${mes} de ${anio} y son las ${hora} horas, ${minuto} minutos con ${segundos} segundos`;
    window.alert(alerta);

}

function cuentaAtras() {
    
    const fechaObjetivo = new Date('01/01/2023 00:00');
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;
    
    const milisecundos_por_segundo = 1000;
    const milisecundos_por_minuto = milisecundos_por_segundo * 60;
    const milisecundos_por_hora = milisecundos_por_minuto * 60;
    const milisecundos_por_dia = milisecundos_por_hora * 24;
    
    const dias_restantes = Math.floor(diferencia / milisecundos_por_dia);
    const horas_restantes = Math.floor((diferencia % milisecundos_por_dia) / milisecundos_por_hora);
    const minutos_restantes = Math.floor((diferencia % milisecundos_por_hora) / milisecundos_por_minuto);
    const segundos_restantes = Math.floor((diferencia % milisecundos_por_minuto / milisecundos_por_segundo));
    
    const span_tiempoRestante = document.querySelector('span#tiempoRestante');
    span_tiempoRestante.textContent = `${dias_restantes} dias, ${horas_restantes} horas, ${minutos_restantes} minutos y ${segundos_restantes} segundos`;

}

mostrarFecha();

cuentaAtras();

setInterval(cuentaAtras, 1000);
