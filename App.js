const url_base = "http://apiforusperu.sial.cl/API/public";
let nombre_usuario = sessionStorage.getItem("nombre");
let id_user = sessionStorage.getItem("id_user");

if (id_user === null) {
    window.location.href = 'index.html';
    
    
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

function showModal(){
    $("#modalCambioClave").modal('show');
}

function cambioClave() {

    let dat = new Object();
    dat['usuario'] = document.getElementById("usuario").value;
    dat['clave'] = document.getElementById("password").value;

    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(dat),
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch(url_base + "/usuario/autentificacion", requestOptions)
        .then(Response => Response.json())
        .then(ojb => {
            console.log(ojb);
            if (ojb['STATUS'] == true) {
                sessionStorage.setItem("nombre", ojb['NOMBRE']);
                sessionStorage.setItem("email", ojb['EMAAIL']);
                sessionStorage.setItem("autentificacion", ojb['STATUS']);
                sessionStorage.setItem("id_user", ojb['ID_USER']);
                sessionStorage.setItem("email", ojb['EMAIL']);
                sessionStorage.setItem("token", ojb['TOKEN']);
                sessionStorage.setItem("expiracion", ojb['EXPIRACION']);
                aler_simple(1, 'Bienvenido', 'Sr@: ' + ojb['NOMBRE']);
                location.href = "main.html";

            } else {
                aler_simple(2, 'Fallido', ojb['MENSAJE']);

            }

        })
        .catch(err => {
            aler_simple(3, 'Fallido', ojb['MENSAJE']);
        });


}

function datatable_ini(id) {

    $('#' + id).DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
}
function dataTableCatalogo(id) {

    $('#' + id).DataTable({
        dom: 'Bfrtip',
        scrollY: 400,
        scrollX: true,
        scrollCollapse: false,
        pageLength : 20,
        buttons: false
    });
}