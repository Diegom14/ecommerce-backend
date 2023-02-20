 carga_inicial();
function  carga_inicial(){
let dat = new Object();
	dat['id_user'] = sessionStorage.getItem("id_user");
	dat['token'] = sessionStorage.getItem("token");
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	var requestOptions = {
		method: 'POST',
		body: JSON.stringify(dat),
		headers: myHeaders,
		redirect: 'follow'
	};
	fetch(url_base + "/reportes/Dashboard", requestOptions)
	.then(Response => Response.json())
	.then(ojb => {
		console.log(ojb);
		let n=0;
		let html_m = "";
			Object.entries(ojb['metricas']).forEach(([clave, valor]) => {
				

				html_m+='<tr>'+
                        '<td>'+
                        '<div class="d-inline-block align-middle"><img class="img-40 m-r-15 rounded-circle align-top" src="assets/images/logo_sitios/mercado-libre.png" alt="">'+
                        '<div class="status-circle bg-primary"></div>'+
                        '<div class="d-inline-block"><span>'+valor.nombre+'</span>'+
                        '</div>'+
                        '</div>'+
                        '</td>'+
                        '<td><span class="label">'+valor.total_ord_C+'</span></td>'+
                        '<td><span class="label">'+valor.total_ord_A+'</span></td>'+
                        '<td> <span class="label">'+valor.tota_ord+'</span></td>'+
                         '</tr>';
                
			});
			n++;
			$('#tb_metrica').html(html_m);
		
	})
	.catch(err => {
		
	});

}

!(function (o) {
    "use strict";
    function e() {
        (this.$body = o("body")), (this.charts = []);
    }
    (e.prototype.initCharts = function () {
        window.Apex = { chart: { parentHeightOffset: 0, toolbar: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, colors: ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"] };
        var e = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        (r = o("#revenue-chart").data("colors")) && (e = r.split(","));
        var t = {
            chart: { height: 364, type: "line", dropShadow: { enabled: !0, opacity: 0.2, blur: 7, left: -7, top: 7 } },
            dataLabels: { enabled: !1 },
            stroke: { curve: "smooth", width: 4 },
            series: [
                { name: "Current Week", data: [10, 20, 15, 25, 20, 30, 20] },
                { name: "Previous Week", data: [0, 15, 10, 30, 15, 35, 25] },
            ],
            colors: e,
            zoom: { enabled: !1 },
            legend: { show: !1 },
            xaxis: { type: "string", categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], tooltip: { enabled: !1 }, axisBorder: { show: !1 } },
            yaxis: {
                labels: {
                    formatter: function (e) {
                        return e + "k";
                    },
                    offsetX: -15,
                },
            },
        };
        e = ["#727cf5", "#e3eaef"];
     
        var r;
        e = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        (r = o("#average-sales").data("colors")) && (e = r.split(","));
        t = {
            chart: { height: 250, type: "donut" },
            legend: { show: !1 },
            stroke: { colors: ["transparent"] },
            series: [44, 55, 41, 17, 44, 55, 41, 17],
            labels: ["Direct", "Affilliate", "Sponsored", "E-mail","Direct", "Affilliate", "Sponsored", "E-mail"],
            colors: e,
            responsive: [{ breakpoint: 480, options: { chart: { width: 400 }, legend: { position: "bottom" } } }],
        };
        new ApexCharts(document.querySelector("#average-sales"), t).render();
    }),
       
        (e.prototype.init = function () {
           this.initCharts();
        }),
        (o.Dashboard = new e()),
        (o.Dashboard.Constructor = e);
})(window.jQuery),
    (function (t) {
        "use strict";
        t(document).ready(function (e) {
            t.Dashboard.init();
        });
    })(window.jQuery);
