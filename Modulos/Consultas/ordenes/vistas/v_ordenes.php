<div class="container-fluid">

    <!-- start page title -->
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">
                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Consulta / Reportes</a></li>
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Ordenes</a></li>
                        <li class="breadcrumb-item active">Consulta de Ordenes</li>
                    </ol>
                </div>
                <h4 class="page-title">Consulta de Ordenes</h4>
            </div>
        </div>
    </div>   
    <!-- end page title --> 
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-2">
                        <div class="col-lg-8">
                            <form class="form-inline">
                                <div class="form-group mb-2">
                                    <label for="inputPassword2" class="sr-only">Search</label>
                                    <input type="search" class="form-control" id="inputPassword2" placeholder="Search...">
                                </div>
                                <div class="form-group mx-sm-3 mb-2">
                                    <label for="status-select" class="mr-2">Status</label>
                                    <select class="custom-select" id="status-select">
                                        <option selected="">Choose...</option>
                                        <option value="1">Paid</option>
                                        <option value="2">Awaiting Authorization</option>
                                        <option value="3">Payment failed</option>
                                        <option value="4">Cash On Delivery</option>
                                        <option value="5">Fulfilled</option>
                                        <option value="6">Unfulfilled</option>
                                    </select>
                                </div>
                            </form>                            
                        </div>
                       
                    </div>

                    <div class="table-responsive">
                        <table class="table table-centered mb-0 table dt-responsive nowrap w-100" id="basic-datatable">
                            <thead class="thead-light">
                                <tr>
                                    <th style="width: 20px;">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                                            <label class="custom-control-label" for="customCheck1">&nbsp;</label>
                                        </div>
                                    </th>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Payment Status</th>
                                    <th>Total</th>
                                    <th>Payment Method</th>
                                    <th>Order Status</th>
                                    <th style="width: 125px;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck2">
                                            <label class="custom-control-label" for="customCheck2">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body font-weight-bold">#BM9708</a> </td>
                                    <td>
                                        August 05 2018 <small class="text-muted">10:29 PM</small>
                                    </td>
                                    <td>
                                        <h5><span class="badge badge-success-lighten"><i class="mdi mdi-coin"></i> Paid</span></h5>
                                    </td>
                                    <td>
                                        $176.41
                                    </td>
                                    <td>
                                        Mastercard
                                    </td>
                                    <td>
                                        <h5><span class="badge badge-info-lighten">Shipped</span></h5>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-eye"></i></a>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck3">
                                            <label class="custom-control-label" for="customCheck3">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body font-weight-bold">#BM9707</a> </td>
                                    <td>August 04 2018 <small class="text-muted">08:18 AM</small></td>
                                    <td>
                                        <h5><span class="badge badge-warning-lighten"><i class="mdi mdi-timer-sand"></i> Awaiting Authorization</span></h5>
                                    </td>
                                    <td>
                                        $1,458.65
                                    </td>
                                    <td>
                                        Visa
                                    </td>
                                    <td>
                                        <h5><span class="badge badge-warning-lighten">Processing</span></h5>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-eye"></i></a>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck4">
                                            <label class="custom-control-label" for="customCheck4">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body font-weight-bold">#BM9706</a> </td>
                                    <td>August 04 2018 <small class="text-muted">10:29 PM</small></td>
                                    <td>
                                        <h5><span class="badge badge-success-lighten"><i class="mdi mdi-coin"></i> Paid</span></h5>
                                    </td>
                                    <td>
                                        $801.99
                                    </td>
                                    <td>
                                        Credit Card
                                    </td>
                                    <td>
                                        <h5><span class="badge badge-warning-lighten">Processing</span></h5>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-eye"></i></a>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck5">
                                            <label class="custom-control-label" for="customCheck5">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body font-weight-bold">#BM9705</a> </td>
                                    <td>August 03 2018 <small class="text-muted">07:56 AM</small></td>
                                    <td>
                                        <h5><span class="badge badge-success-lighten"><i class="mdi mdi-coin"></i> Paid</span></h5>
                                    </td>
                                    <td>
                                        $215.35
                                    </td>
                                    <td>
                                        Mastercard
                                    </td>
                                    <td>
                                        <h5><span class="badge badge-success-lighten">Delivered</span></h5>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-eye"></i></a>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck6">
                                            <label class="custom-control-label" for="customCheck6">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body font-weight-bold">#BM9704</a> </td>
                                    <td>May 22 2018 <small class="text-muted">07:22 PM</small></td>
                                    <td>
                                        <h5><span class="badge badge-danger-lighten"><i class="mdi mdi-cancel"></i> Payment Failed</span></h5>
                                    </td>
                                    <td>
                                        $2,514.36
                                    </td>
                                    <td>
                                        Paypal
                                    </td>
                                    <td>
                                        <h5><span class="badge badge-danger-lighten">Cancelled</span></h5>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-eye"></i></a>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                    </td>
                                </tr>
                               

                            </tbody>
                        </table>
                    </div>
                </div> <!-- end card-body-->
            </div> <!-- end card-->
        </div> <!-- end col -->
    </div>

</div>



<script type="text/javascript">
     $("#basic-datatable").DataTable({
        keys: !0,
        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
        },
    });
</script>
