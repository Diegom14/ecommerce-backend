const url_base = "http://apiforusperu.sial.cl/API/public";
let nombre_usuario = sessionStorage.getItem("nombre");
let id_user = sessionStorage.getItem("id_user");

if (id_user === null) {
    window.location.href = 'index.php';
} else {
    $("#span_nombre_usuario").html(nombre_usuario)
}





function rutas(modulo, url) {

    var url = '../Modulos/' + modulo + '/vistas/' + url + '.html?v=' + Date.now();
    $("#content_principal").load(url);
}

// funcion alertas simples

function aler_simple(icon, titulo, message) {

    let icono;
    switch (icon) {
        case 1:
            icono = 'success';
            break;
        case 2:
            icono = 'error';
            break;
        case 3:
            icono = 'warning';
            break;
        case 4:
            icono = 'info';
            break;
        case 5:
            icono = 'question';
            break;
    }

    Swal.fire(
        titulo,
        message,
        icono
    )


}



/// funcion 
function close_seccion() {
    sessionStorage.clear();
    localStorage.clear();
    location.href = "index.html";

}

function datatable_ini(id) {

    $('#' + id).DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
}