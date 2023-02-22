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

            Object.entries(ojb['estado'])
                .map(entry => {
                    const [key, value] = entry;
                    switch(key){
                        case 'iniciar':
                            let ordenRecibida = document.getElementById('ordenRecibida');
                            ordenRecibida.classList.add("current");
                            break;
                    } 

                })

                
            let bodyResumen = document.createElement('tbody');
            
            //Resumen 
            Object.entries(ojb['sumamary'])
            .map(entry => {
                const [key, value] = entry;
                let row = document.createElement('tr');
                let col = document.createElement('td');
                let colDetalle = document.createElement('td');
                switch(key){
                    case 'Tax':
                        colDetalle.innerText = 'Impuesto';
                        row.appendChild(colDetalle);
                        col.innerText = value;
                        row.appendChild(col);
                        break;
                    
                    case 'shipping':
                        colDetalle.innerText = 'Envío';
                        row.appendChild(colDetalle);
                        col.innerText = value;
                        row.appendChild(col);
                        break;
                    
                    case 'total':
                        colDetalle.innerText = 'Total';
                        row.appendChild(colDetalle);
                        col.innerText = value;
                        row.appendChild(col);
                        break;
                    case 'total_neto':
                        colDetalle.innerText = 'Total Neto';
                        row.appendChild(colDetalle);
                        col.innerText = value;
                        row.appendChild(col);
                        break;
                }
                
                
                 
                console.log(value);
                bodyResumen.appendChild(row);
                })

            document.getElementById('tablaResumen').appendChild(bodyResumen);
            
            //Información de envío

            
            let br = document.createElement('br');
            let data = '';
            Object.entries(ojb['shipping'])
            .map(entry => {
                const [key, value] = entry;
                if(value){
                    data = data + value +' <br>';
                    //fragment.appendChild(value);
                    //console.log(data)
                }
                
                })

                //document.getElementById('shipping').appendChild(fragment);
            
            let parrafo = document.createElement('p');
            
            parrafo.innerHTML = data;
            
            document.getElementById('shipping').appendChild(parrafo);
            
            //Información de Pago

            
            
            
            let fragment = document.createDocumentFragment();
            Object.entries(ojb['billing'])
            .map(entry => {
                const [key, value] = entry;
                let dataPago = document.createElement('p');
                //let bold = document.createElement('b');
                switch(key){
                    case 'autorizacionpago_ph':
                        dataPago.innerHTML = '<b>Código Autorización:</b> ' + value;
                        fragment.appendChild(dataPago);
                        break;
                    
                    case 'tipo_pago':
                        dataPago.innerHTML = '<b>Tipo Pago:</b> ' + value;
                        fragment.appendChild(dataPago);
                        break;

                    case 'fecha_pago':
                        dataPago.innerHTML = '<b>Fecha de Pago:</b> ' + value;
                        fragment.appendChild(dataPago);
                        break;
                }
                
                })

                //document.getElementById('shipping').appendChild(fragment);
            
            
            
            
            
            document.getElementById('infoPago').appendChild(fragment);
            
            document.getElementById('lineaProgreso').style.width = '66%';

        })
        .catch(err => {
            aler_simple(2, 'Error', 'No existen Registros ');
        });




}