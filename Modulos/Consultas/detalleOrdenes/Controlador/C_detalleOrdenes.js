$('.fecha_ranger').daterangepicker("setDate", new Date());



function getData2() {
    filtroEstado = document.querySelector("#estado").value;
    filtroFecha = document.querySelector("#fecha").value;
    filtroTipo = document.querySelector("#tipo").value;

    let jsondata = {
        "estado": filtroEstado,
        "fecha": filtroFecha,
        "tipo": filtroTipo
    }
    console.log(jsondata);
}


function getData() {

    let data = new Object();
    data['estado'] = document.getElementById("estado").value;
    data['fecha'] = document.getElementById("fecha").value;
    data['tipo'] = document.getElementById("tipo").value;
    data['token'] = sessionStorage.getItem("token");
    $("#content_principal").LoadingOverlay("show");

    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch(url_base + "/reportes/ordenes", requestOptions)
        .then(Response => Response.json())
        .then(ojb => {
            $("#content_principal").LoadingOverlay("hide");

            let body = document.getElementsByTagName('tbody')[0];
            console.log(body);
            if (body) {
                body.remove();

                $("#tablaOrdenes").dataTable().fnDestroy();

            }
            $("#content_principal").LoadingOverlay("hide", true);
            let tablaListaOrdenes = document.getElementById('tablaOrdenes');
            let bodyOrdenes = document.createElement('tbody');
            bodyOrdenes.setAttribute('id', 'lista_htm');


            Object.entries(ojb['listado_ordenes'])
                .map(entry => {
                    const [key, value] = entry;
                    //console.log(Object.values(value));
                    let row = document.createElement('tr');
                    Object.values(value).map(fila => {

                        let col = document.createElement('td');
                        col.innerText = fila;
                        row.appendChild(col);

                    })

                    bodyOrdenes.appendChild(row);



                })
            tablaListaOrdenes.appendChild(bodyOrdenes);
            
            datatable_ini('tablaOrdenes');
            $("#tablaOrdenes").DataTable();


        })
        .catch(err => {
            aler_simple(2, 'Error', 'No existen Registros ');
        });




}