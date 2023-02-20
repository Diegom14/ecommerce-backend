  <div class="container-fluid">

    <!-- start page title -->
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">

                <h4 class="page-title">Dashboard - Ecommerce</h4>
            </div>
        </div>
    </div>     
    <!-- end page title --> 
    <div class="row">
        <div class="col-lg-3">
            <div class="card widget-flat">
                <div class="card-body">
                    <div class="float-right">
                        <i class="mdi mdi-account-multiple widget-icon bg-success-lighten text-success"></i>
                    </div>
                    <h5 class="text-muted font-weight-normal mt-0" title="Number of Customers">Customers</h5>
                    <h3 class="mt-3 mb-3">36,254</h3>
                    <p class="mb-0 text-muted">
                        <span class="text-success mr-2"><i class="mdi mdi-arrow-up-bold"></i> 5.27%</span>
                        <span class="text-nowrap">Since last month</span>  
                    </p>
                </div> <!-- end card-body-->
            </div> <!-- end card-->
        </div> <!-- end col-->

        <div class="col-lg-3">
            <div class="card widget-flat">
                <div class="card-body">
                    <div class="float-right">
                        <i class="mdi mdi-cart-plus widget-icon bg-danger-lighten text-danger"></i>
                    </div>
                    <h5 class="text-muted font-weight-normal mt-0" title="Number of Orders">Orders</h5>
                    <h3 class="mt-3 mb-3">5,543</h3>
                    <p class="mb-0 text-muted">
                        <span class="text-danger mr-2"><i class="mdi mdi-arrow-down-bold"></i> 1.08%</span>
                        <span class="text-nowrap">Since last month</span>
                    </p>
                </div> <!-- end card-body-->
            </div> <!-- end card-->
        </div> <!-- end col-->
    </div> <!-- end row -->
    <div class="Col-lg-6">
        <div class="card widget-flat">
            <div class="card-body">

                <h4 class="header-title">Total Por Canales</h4>

                <div id="average-sales" class="apex-charts mb-4 mt-4"
                data-colors="#3688fc,#6c757d,#42d29d,#fa6767"></div>


                <div class="chart-widget-list">
                    <p>
                        <i class="mdi mdi-square text-primary"></i> Direct
                        <span class="float-right">$300.56</span>
                    </p>
                    <p>
                        <i class="mdi mdi-square text-dark"></i> Affilliate
                        <span class="float-right">$135.18</span>
                    </p>
                    <p>
                        <i class="mdi mdi-square text-success"></i> Sponsored
                        <span class="float-right">$48.96</span>
                    </p>
                    <p class="mb-0">
                        <i class="mdi mdi-square text-danger"></i> E-mail
                        <span class="float-right">$154.02</span>
                    </p>
                </div>
            </div> <!-- end card-body-->
        </div> <!-- end card-->
        </div>

    </div>
</div>
<script src="../public/assets/js/vendor/apexcharts.min.js"></script>

<script src="../Modulos/dashboard/controlador/C_dashboard.js?id=<?php echo(rand()); ?>"></script>
