if (id_user === null) {
    window.location.href = 'index.php';
} else {
    $("#span_nombre_usuario").html(nombre_usuario)
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

let token = sessionStorage.getItem("token");