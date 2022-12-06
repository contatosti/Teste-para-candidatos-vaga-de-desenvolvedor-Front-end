$(document).ready( function () {
    $('#batidas-ponto').DataTable({
        language: {
            "emptyTable": "Nenhum registro encontrado",
            "info": "_START_ - _END_ de _TOTAL_",
            "infoEmpty": "0 - 0 de 0",
            "zeroRecords": "Nenhum registro encontrado",
            "paginate": {
                "next": ">",
                "previous": "<",
            }
        }
    });
} );