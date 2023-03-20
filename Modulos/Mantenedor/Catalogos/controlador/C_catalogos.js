
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
    leerExcel();

}


function leerExcel(){
    $("#tablaExcel").dataTable().fnDestroy();
    const input = document.getElementById('excelFile');
    const table = document.getElementById('tablaExcel');
    //let thead = document.createElement('thead');
    let tbody = document.getElementById('tbodyExcel');
    let fragment = document.createDocumentFragment();
    let dataExcel;

    
    input.addEventListener('change', (event) => {

        const file = event.target.files[0];
        readXlsxFile(file).then((rows) => {
            dataExcel = rows;
            rows.forEach((row,index) => {
  
                if(index==0){
                    /*const tr = document.createElement('tr');
                    row.forEach((cell,index) => {
                        let th = document.createElement('th');
                        th.innerText = cell;
                        tr.appendChild(th);
                    });
                    thead.appendChild(tr);*/
                } else{
                    const tr = document.createElement('tr');
                    
                    row.forEach((cell,index) => {
                        let td = document.createElement('td');
                        td.innerText = cell;
                        tr.appendChild(td);
                    });
                    
                    fragment.appendChild(tr);
                }
                
            });

            tbody.appendChild(fragment);
            table.appendChild(tbody);
            dataTableCatalogo('tablaExcel');
        });
        
    });
    
    let botonCargar = document.getElementById('botonCargarExcel');
    botonCargar.addEventListener('click', () => {
        console.log(dataExcel);
        cargarExcel(dataExcel);
        
    })
    
    
    
}

function cargarExcel(datos){
    let data = new Object();
    data['token'] = token = sessionStorage.getItem("token");
    data['iduser'] = idUser = sessionStorage.getItem("id_user");
    data['data'] = datos; 
    //$("#content_principal").LoadingOverlay("show");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: myHeaders,
        redirect: 'follow'
    };
    //console.log(myHeaders)
            fetch(url_base + "/catalogo/Newproducto/", requestOptions)
            .then(Response => Response.json())
            .then(ojb => {
                
                $("#content_principal").LoadingOverlay("hide");
                
                aler_simple(1, 'Creado',
                `
                SKU Insertados: ${ojb['total_sku_insertados']}\n
                SKU Actualizados: ${ojb['total_sku_Actualizados']}\n
                SKU Erróneos: ${ojb['total_sku_erroneos']}\n
                Total Procesados: ${ojb['total_sku_procesado']}
                 `
                );
                
                //$("#tablaExcel").destroy();
                //document.getElementById('tablaExcel').remove();
                $("#tablaExcel").dataTable().fnDestroy();
                let errores = '';
                document.getElementById('trExcel').remove();
                document.getElementById('tbodyExcel').remove();

                

                let fragment = document.createDocumentFragment();
                let theadExcel = document.getElementById('theadExcel');
                let tbodyExcel = document.createElement('tbody');
                let trHead = document.createElement('tr');
                
                let thSku = document.createElement('th');
                thSku.innerText = "SKU";
                trHead.appendChild(thSku);

                let thError = document.createElement('th');
                thError.innerText = "Error";
                trHead.appendChild(thError);

                theadExcel.appendChild(trHead);
                

                
                /*if(ojb['errores']){
                    

                    let theadError = document.createElement('thead');
                    let tbodyError = document.createElement('tbody');
                    
                    let tr = document.createElement('tr');
                    let th = document.createElement(th)

                    document.appendChild(tableError);
                }*/
                Object.entries(ojb['errores']).map(entry => {
                    let tr = document.createElement('tr');
                    let tdSku = document.createElement('td');
                    let tdError = document.createElement('td');
                    
                    tdSku.innerText = entry[1]['sku'];
                    tr.appendChild(tdSku);

                    tdError.innerText = entry[1]['error'];
                    tr.appendChild(tdError);
                    tr.style.backgroundColor = "red";
                    tr.style.color = "white";
                    tbodyExcel.appendChild(tr);
                    //errores = errores+entry[1]['sku']+": "+entry[1]['error']+"\n";
                    
                    
                })
                document.getElementById('tablaExcel').appendChild(tbodyExcel);
                    
                
                
                //console.log(ojb['errores'][0]);
                $("#content_principal").LoadingOverlay("hide", true);
                //$("#tablaExcel").html('');

                //location.reload();
            })
            .catch(err => {
                console.log(err);
                aler_simple(2, 'Error', `Formato del Archivo Incorrecto`);
                
            });
            
            // Add the rows to the table
            //console.log(rows[0]);
}

function getListaSitios() {

    let data = new Object();
    data['token'] = token = sessionStorage.getItem("token");
    data['idUser'] = idUser = sessionStorage.getItem("id_user")
     
    $("#content_principal").LoadingOverlay("show");

    var myHeaders = new Headers();

    //myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: myHeaders,
        redirect: 'follow'
        
    };
    //console.log(myHeaders)
    fetch(url_base + "/sitios/listar", requestOptions)
        .then(Response => Response.json())
        .then(ojb => {
            $("#content_principal").LoadingOverlay("hide");
            
            let body = document.getElementsByTagName('tbody')[0];
            if (body) {
                body.remove();
                $("#tablaSitios").dataTable().fnDestroy();

            }
            $("#content_principal").LoadingOverlay("hide", true);
            let tablaSitios = document.getElementById('tablaSitios');
            let bodySitios = document.createElement('tbody');
            bodySitios.setAttribute('id', 'lista_html');
            
            Object.entries(ojb['sitios'])
            .map(entry => {
                const [key, value] = entry;
                let row = document.createElement('tr');  
                
                Object.entries(value).map(dataCol =>{
                    const [key2, value2] = dataCol;
                    let col = document.createElement('td');
                    col.innerText = value2;
                    row.appendChild(col);
                })

                bodySitios.appendChild(row);

            })
            tablaSitios.appendChild(bodySitios);            
            datatable_ini('tablaSitios');

            let selectTipoPago = document.getElementById('tipoPago');
            let child = selectTipoPago.lastElementChild;
            while(child){
                selectTipoPago.removeChild(child);
                child = selectTipoPago.lastElementChild;
            }
            
            const fragment = document.createDocumentFragment();
            let option = document.createElement('option');
            option.text = 'SELECCIONE';
            fragment.appendChild(option);

            Object.entries(ojb['tipo_pago'])
            .map(entry => {
                const value = entry;
                option = document.createElement('option');
                option.text = value[1]['DESCRIPCION_CI'];
                option.value = value[1]['CODIGO_CI'];
                //console.log(value[1]['CODIGO_CI']);
                fragment.appendChild(option);
            })

            selectTipoPago.appendChild(fragment);

        })
        .catch(err => {
            aler_simple(2, 'Error', 'No existen Registros ');
        });

       



}

function crearSitio(){
    let modal = document.getElementById("modalCrearSitio");
    
    let btn = document.getElementById("botonNuevoSitio");
    
    
    let span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
}



$("#basic-datatable").DataTable({
    keys: !0,
    language: {
        paginate: {
            previous: "<i class='mdi mdi-chevron-left'>",
            next: "<i class='mdi mdi-chevron-right'>"
        }
    },
    drawCallback: function() {
        $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
    },
});

//let token = sessionStorage.getItem("token");