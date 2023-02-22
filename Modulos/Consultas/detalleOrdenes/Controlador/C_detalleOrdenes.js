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
    data['npedido'] = nPedido = sessionStorage.getItem("nPedido");
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
            //Detalle Pedido
            const bodyDetalle = document.createElement('tbody');
            Object.entries(ojb['detalle'])
            .map(entry => {
                const [key, value] = entry;
                console.log(value['CODINT_PD']);
                let row = document.createElement('tr');
                
                //SKU 
                let sku = document.createElement('td');
                sku.innerText = value['CODINT_PD'];
                row.appendChild(sku);

                //Descripción
                let descripcion = document.createElement('td');
                descripcion.innerText = value['NAMEPRODUCTO'];
                row.appendChild(descripcion);

                //Precio
                let precio = document.createElement('td');
                precio.innerText = value['PRECIO_PD'];
                row.appendChild(precio);
                //Cantidad
                let cantidad = document.createElement('td');
                cantidad.innerText = value['CANPED_PD'];
                row.appendChild(cantidad);
                //Descuento
                let descuento = document.createElement('td');
                descuento.innerText = value['DSCTOIT_PD'];
                row.appendChild(descuento);
                //Total
                let total = document.createElement('td');
                let valTotal = (value['PRECIO_PD']*value['CANPED_PD'])-value['DSCTOIT_PD']
                total.innerText = valTotal;
                row.appendChild(total);
                
                console.log(row);
                bodyDetalle.appendChild(row);
            })
            document.getElementById('detalleOrden').appendChild(bodyDetalle);

            //Línea de tiempo del estado de la orden

            let estadoOrden = '';
            let avanceLineaPro = '0%';
            Object.entries(ojb['estado'])
                .map(entry => {
                    const [key, value] = entry;
                    
                    switch(key){
                        case 'iniciar':
                            //let ordenRecibida = document.getElementById('ordenRecibida');
                            //ordenRecibida.classList.add("current");
                            //document.getElementById()
                            estadoOrden = 'ordenRecibida';
                            avanceLineaPro = '0%';
                            document.getElementById('fechaRecibida').setAttribute('data-original-title', value);
                            break;

                        case 'documntada':
                            //let ordenRecibida = document.getElementById('ordenRecibida');
                            //ordenRecibida.classList.add("current");
                            estadoOrden = 'ordenDocumentada';
                            avanceLineaPro = '33%';
                            document.getElementById('fechaDocumentada').setAttribute('data-original-title', value);
                            break;
                        
                        case 'despachada':
                            //let ordenRecibida = document.getElementById('ordenRecibida');
                            //ordenRecibida.classList.add("current");
                            estadoOrden = 'ordenDespachada';
                            avanceLineaPro = '66%';
                            document.getElementById('fechaDespachada').setAttribute('data-original-title', value);
                            
                            break;
                            
                        case 'entregada':
                            //let ordenRecibida = document.getElementById('ordenRecibida');
                            //ordenRecibida.classList.add("current");
                            estadoOrden = 'ordenEntregada';
                            avanceLineaPro = '100%';
                            document.getElementById('fechaEntregada').setAttribute('data-original-title', value);
                            break;
                    } 

                })
            //console.log(Object.keys(ojb['estado']).length);
            console.log(estadoOrden,avanceLineaPro)
            document.getElementById(estadoOrden).classList.add("current");
            
            document.getElementById('lineaProgreso').style.width = avanceLineaPro;

                
            
            //Resumen 
            let bodyResumen = document.createElement('tbody');

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
                        if(value==null){
                            value = '';
                        }
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

            //Información de Envío
            fragment = document.createDocumentFragment();
            data='';
            console.log(fragment);
            let p = document.createElement('p');
            Object.entries(ojb['delivery'])
            .map(entry => {
                
                const [key, value] = entry;
                console.log(value);
                let icono = document.getElementById('logoEnvio');
                
                if(value=='D'){
                    icono.className = 'mdi mdi-truck-fast h2 text-muted';
                    p.innerHTML='Nombre: '+ojb['delivery']['nombre'] + '<br>' + 
                                'Bodega: '+ojb['delivery']['bodegadespacho']+ '<br>' + 
                                'Número de Guía: '+ojb['delivery']['numeroDeGuia'];

                    
                }else{
                    icono.className = 'dripicons-store h2 text-muted';
                    p.innerHTML='Nombre: '+ojb['delivery']['nombre'] + '<br>' + 
                                'Bodega: '+ojb['delivery']['bodegadespacho']+ '<br>' + 
                                'Número de Guía: '+ojb['delivery']['numeroDeGuia'];
                }
                   
                
            
                
            })
            
            console.log(p);
                
            document.getElementById('infoDelivery').appendChild(p);


        })
        .catch(err => {
            aler_simple(2, 'Error', 'No existen Registros ');
            console.log(err)
        });




}