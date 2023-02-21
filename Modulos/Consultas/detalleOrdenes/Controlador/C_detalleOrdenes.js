if (document.readyState !== 'loading') {
    onReady();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        onReady();
    });
}


function onReady(){
    if (id_user === null) {
        window.location.href = 'index.html';
    } else {
        $("#span_nombre_usuario").html(nombre_usuario)
    }
    
    getData();

}

$('.fecha_ranger').daterangepicker("setDate", new Date());






function getData() {

    let data = new Object();
    


    data['iduser'] = sessionStorage.getItem("id_user");
    data['npedido'] = sessionStorage.getItem("nPedido");
    data['central'] = sessionStorage.getItem("central");
    data['token'] = token = sessionStorage.getItem("token");
    console.log(data);
    //$("#content_principal").LoadingOverlay("show");

    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch(url_base + "/reportes/ordenes_detalle/", requestOptions)
        .then(Response => Response.json())
        .then(ojb => {
            //$("#content_principal").LoadingOverlay("hide");

            
            console.log(ojb);

            /*Object.entries(ojb['listado_ordenes'])
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
            */


        })
        .catch(err => {
            aler_simple(2, 'Error', 'No existen Registros ');
        });




}