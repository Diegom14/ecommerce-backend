
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

    /*var reader = new FileReader();  
    reader.onload = function (e) {
        var data = e.target.result;  
        var workbook = XLSX.read(data, { type: 'binary' });  
        console.log(workbook);
    }  */
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
        //console.log(dataExcel);
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
                console.log(ojb);
                $("#content_principal").LoadingOverlay("hide");
                
                aler_simple(1, 'Creado',
                 `
                 SKU Insertados: ${ojb.total_sku_insertados}\n
                 SKU Actualizados: ${ojb.total_sku_Actualizados}\n
                 SKU Erróneos: ${ojb.total_sku_erroneos}\n
                 Total Procesados: ${ojb.total_sku_procesado}
                  `
                 );
                $("#content_principal").LoadingOverlay("hide", true);
                //location.reload();
            })
            .catch(err => {
                aler_simple(2, 'Error', `Formato del Archivo Incorrecto`);
            });
            
            // Add the rows to the table
            //console.log(rows[0]);
}
/*
const input = document.getElementById('fileinput');

// This will upload the file after having read it
const upload = (file) => {
  fetch(url_base + "/sitios/listar", { // Your POST endpoint
    method: 'POST',
    headers: {
      // Content-Type may need to be completely **omitted**
      // or you may need something
      "Content-Type": "You will perhaps need to define a content-type here"
    },
    body: file // This is your file object
  }).then(
    response => response.json() // if the response is a JSON object
  ).then(
    success => console.log(success) // Handle the success response object
  ).catch(
    error => console.log(error) // Handle the error response object
  );
};

// Event handler executed when a file is selected
const onSelectFile = () => upload(input.files[0]);

// Add a listener on your input
// It will be triggered when a file will be selected
input.addEventListener('change', onSelectFile, false);
*/
function ExportToTable() {  
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xlsx|.xls)$/;  
    /*Checks whether the file is a valid excel file*/  
    if (regex.test($("#excelfile").val().toLowerCase())) {  
        var xlsxflag = false; /*Flag for checking whether excel is .xls format or .xlsx format*/  
        if ($("#excelfile").val().toLowerCase().indexOf(".xlsx") > 0) {  
            xlsxflag = true;  
        }  
        /*Checks whether the browser supports HTML5*/  
        if (typeof (FileReader) != "undefined") {  
            var reader = new FileReader();  
            reader.onload = function (e) {  
                var data = e.target.result;  
                /*Converts the excel data in to object*/  
                if (xlsxflag) {  
                    var workbook = XLSX.read(data, { type: 'binary' });  
                }  
                else {  
                    var workbook = XLS.read(data, { type: 'binary' });  
                }
                console.log(workbook);  
                /*Gets all the sheetnames of excel in to a variable*/  
                var sheet_name_list = workbook.SheetNames;  
 
                var cnt = 0; /*This is used for restricting the script to consider only first sheet of excel*/  
                sheet_name_list.forEach(function (y) { /*Iterate through all sheets*/  
                    /*Convert the cell value to Json*/  
                    if (xlsxflag) {  
                        var exceljson = XLSX.utils.sheet_to_json(workbook.Sheets[y]);  
                    }  
                    else {  
                        var exceljson = XLS.utils.sheet_to_row_object_array(workbook.Sheets[y]);  
                    }  
                    if (exceljson.length > 0 && cnt == 0) {  
                        BindTable(exceljson, '#exceltable');  
                        cnt++;  
                    }  
                });  
                $('#exceltable').show();  
            }  
            if (xlsxflag) {/*If excel file is .xlsx extension than creates a Array Buffer from excel*/  
                reader.readAsArrayBuffer($("#excelfile")[0].files[0]);  
            }  
            else {  
                reader.readAsBinaryString($("#excelfile")[0].files[0]);  
            }  
        }  
        else {  
            alert("Sorry! Your browser does not support HTML5!");  
        }  
    }  
    else {  
        alert("Please upload a valid Excel file!");  
    }
    dataTableCatalogo('exceltable');  
}

function BindTable(jsondata, tableid) {/*Function used to convert the JSON array to Html Table*/  
     var columns = BindTableHeader(jsondata, tableid); /*Gets all the column headings of Excel*/  
     for (var i = 0; i < jsondata.length; i++) {  
         var row$ = $('<tr/>');  
         for (var colIndex = 0; colIndex < columns.length; colIndex++) {  
             var cellValue = jsondata[i][columns[colIndex]];  
             if (cellValue == null)  
                 cellValue = "";  
             row$.append($('<td/>').html(cellValue));  
         }  
         $(tableid).append(row$);  
     }  
}

 function BindTableHeader(jsondata, tableid) {/*Function used to get all column names from JSON and bind the html table header*/  
     var columnSet = [];  
     var headerTr$ = $('<tr/>');  
     for (var i = 0; i < jsondata.length; i++) {  
         var rowHash = jsondata[i];  
         for (var key in rowHash) {  
             if (rowHash.hasOwnProperty(key)) {  
                 if ($.inArray(key, columnSet) == -1) {/*Adding each unique column names to a variable array*/  
                     columnSet.push(key);  
                     headerTr$.append($('<th/>').html(key));  
                 }  
             }  
         }  
     }  
     $(tableid).append(headerTr$);  
     return columnSet;  
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