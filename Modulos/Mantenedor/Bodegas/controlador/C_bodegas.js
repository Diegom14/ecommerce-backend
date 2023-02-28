if (document.readyState !== 'loading') {
    onReady();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        onReady();
    });
}


function onReady(){
    if (id_user === null) {
        window.location.href = 'index.php';
    } else {
        $("#span_nombre_usuario").html(nombre_usuario)
    }
    //getListaSitios();

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

function crearBodega(){
    $("#modalCrear").modal('show');
    
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