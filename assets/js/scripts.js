//CREAR FUNCION PARA MOSTRAR ALERTA CON FECHA ACTUAL
function mostrarFecha() {
    
    //OBTENER FECHA ACTUAL
    let ahora = new Date();
    // CREAR ARRAY CON DIAS DE LA SEMANA EN ESPAÑOL
    const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    // OBTENER DIA DE LA SEMANA CON getDay() Y APUNTAR A LA POSICION DEL ARRAY EN ESPAÑOL
    let dia_semana = dias_semana[ahora.getDay()];
    // OBTENER DIA DEL MES
    let dia = ahora.getDate();
    // CREAR ARRAY CON MESES DEL AÑO EN ESPAÑOL
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    // OBTENER MES DE AÑO CON getMonth() Y APUNTAR A LA POSICION DEL ARRAY EN ESPAÑOL
    let mes = meses[ahora.getMonth()];
    // OBTENER AÑO
    let anio = ahora.getFullYear();
    // OBTENER HORA
    let hora = ahora.getHours();
    // OBTENER MINUTOS
    let minuto = ahora.getMinutes();
    // OBTENER SEGUNDOS
    let segundos = ahora.getSeconds();
    // CREAR ALERTA DECLARANDO UNA VARIABLE DENTRO DE UN STRING CON COMILLAS INVERTIDAS CONCATENANDO RESULTADOS DE VARIABLES DECLARADAS ANTERIORMENTE SIGUIENDO EL FORMATO SOLICITADO
    let alerta = `Hoy es ${dia_semana} ${dia} de ${mes} de ${anio} y son las ${hora} horas, ${minuto} minutos con ${segundos} segundos`;
    // MOSTRAR ALERTA
    window.alert(alerta);

}

// CREAR FUNCION CUENTRA ATRAS
function cuentaAtras() {
    
    // DECLARAR FECHA OBJETIVO Y ACTUAL
    const fechaObjetivo = new Date('01/01/2023 00:00');
    const ahora = new Date();
    // OBTENER DIFERENCIA ENTRE FECHA OBJETIVO Y LA ACTUAL
    const diferencia = fechaObjetivo - ahora;
    console.log(diferencia);
    
    // LA DIFERENCIA ENTREGA UN RESULTADO EN MILISEGUNDOS POR LO QUE HAY QUE DEFINIR CUANTOS MILISEGUNDOS TIENE UN SEGUNDO, MINUTO, HORA Y DIA
    const milisecundos_por_segundo = 1000;
    const milisecundos_por_minuto = milisecundos_por_segundo * 60;
    const milisecundos_por_hora = milisecundos_por_minuto * 60;
    const milisecundos_por_dia = milisecundos_por_hora * 24;
    
    //  CALCULAR DIAS, HORAS, MINUTOS Y SEGUNDOS USANDO EL METODO FLOOR
    const dias_restantes = Math.floor(diferencia / milisecundos_por_dia);
    const horas_restantes = Math.floor((diferencia % milisecundos_por_dia) / milisecundos_por_hora);
    const minutos_restantes = Math.floor((diferencia % milisecundos_por_hora) / milisecundos_por_minuto);
    const segundos_restantes = Math.floor((diferencia % milisecundos_por_minuto / milisecundos_por_segundo));
    
    // LLAMAR SPAN EN HTML POR ID
    const span_tiempoRestante = document.querySelector('span#tiempoRestante');
    // INSERTAR STRING CON RESULTADOS EN SPAN
    span_tiempoRestante.textContent = `${dias_restantes} dias, ${horas_restantes} horas, ${minutos_restantes} minutos y ${segundos_restantes} segundos`;

}

// INVOCAR ALERTA
mostrarFecha();

// INVOCAR CONTADOR
cuentaAtras();

// SETEAR INTERVALO PARA ACTUALIZAR CONTADOR CADA 1000 MILISEGUNDOS (1 SEGUNDO)
setInterval(cuentaAtras, 1000);
