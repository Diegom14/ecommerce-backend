if (document.readyState !== 'loading') {
    onReady();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        
        onReady();
    });
}


function onReady(){}

$('.fecha_ranger').daterangepicker("setDate", new Date());






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
            
            if (body) {
                body.remove();

                $("#tablaOrdenes").dataTable().fnDestroy();

            }
            $("#content_principal").LoadingOverlay("hide", true);
            let tablaListaOrdenes = document.getElementById('tablaOrdenes');
            let bodyOrdenes = document.createElement('tbody');
            bodyOrdenes.setAttribute('id', 'lista_htm');

            token = sessionStorage.getItem("token");
            
            Object.entries(ojb['listado_ordenes'])
            .map(entry => {
                const [key, value] = entry;
                let row = document.createElement('tr');
                Object.entries(value).map(dataCol =>{
                    const [key2, value2] = dataCol;
                    let col = document.createElement('td');
                    if(key2 =='npedido'){
                        sitio = value['sitio'].toString();
                        nPedido = value['npedido'];
                        central = value['centra'];
                        let aTag = document.createElement('a');
                        funcion = 'javascript: detalleOrdenes("'+nPedido+'","'+central+'");';
                        
                        aTag.setAttribute('href',funcion);
                        aTag.innerText = value2;
                        col.appendChild(aTag);

                    } else{
                        col.innerText = value2;
                    }
                    
                    
                    
                    
                    
                    row.appendChild(col);
                    
                    
                })

                bodyOrdenes.appendChild(row);
                


            })
            tablaListaOrdenes.appendChild(bodyOrdenes);
            
            datatable_ini('tablaOrdenes');
            //$("#tablaOrdenes").DataTable();


        })
        .catch(err => {
            aler_simple(2, 'Error', 'No existen Registros ');
        });




}

function detalleOrdenes(nPedido,central){

    
    sessionStorage.setItem("nPedido", nPedido);
    sessionStorage.setItem("central", central);
    
    rutas('Consultas/detalleOrdenes', 'detalleOrdenes');
    

}