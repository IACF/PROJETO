$(document).ready(function() {
$(".datepicker").pickadate({
        monthsFull    : [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
        monthsShort   : [ "Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
        weekdaysFull  : [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ],
        weekdaysShort : [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ],
        weekdaysLetter: [ "D", "S", "T", "Q", "Q", "S", "S" ],
        today : "hoje",
        clear : "limpar",
        close : "fechar",
        format: "dd/mm/yyyy"
});
});

