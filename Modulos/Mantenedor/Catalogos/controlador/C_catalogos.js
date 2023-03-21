
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
    let tbody = document.getElementById('tbodyExcel');
    let fragment = document.createDocumentFragment();
    let dataExcel;

    
    input.addEventListener('change', (event) => {
        $("#tablaExcel").dataTable().fnDestroy();
        document.getElementById('tbodyExcel').innerHTML = "";
        document.getElementById('tbodyErrores').innerHTML = "";
        const file = event.target.files[0];
        document.getElementById('nombreArchivo').innerText = file.name;
        
        readXlsxFile(file).then((rows) => {
            dataExcel = rows;
            rows.forEach((row,index) => {
  
                if(index==0){
                    /*let tr = document.createElement('tr');
                    row.forEach((cell,index) => {
                        let th = document.createElement('th');
                        th.innerText = cell;
                        trHeadExcel.appendChild(th);
                    });*/
                    
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
        //console.log(dataExcel);
        cargarExcel(dataExcel);
    })
    
    
    
}

function cargarExcel(datos){
    let data = new Object();
    data['token'] = token = sessionStorage.getItem("token");
    data['iduser'] = idUser = sessionStorage.getItem("id_user");
    data['data'] = datos; 
    $("#content_principal").LoadingOverlay("show");

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
                $("#tablaErrores").dataTable().fnDestroy();
                let tbodyErrores = document.getElementById('tbodyErrores');
                tbodyErrores.innerHTML = "";
                
                if(ojb['errores']){
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
                        tbodyErrores.appendChild(tr);

                        //errores = errores+entry[1]['sku']+": "+entry[1]['error']+"\n";
                        
                        
                    })
                    
                    document.getElementById('tablaErrores').appendChild(tbodyErrores);
                    datatable_ini('tablaErrores');
                    document.getElementById('tablaErrores').focus();
                    
                }
            })
            .catch(err => {
                console.log(err);
                aler_simple(2, 'Error', `Formato del Archivo Incorrecto`);
                
            });
            
            
            // Add the rows to the table
            //console.log(rows[0]);
}








