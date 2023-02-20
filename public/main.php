<!DOCTYPE html>
<html lang="en">


<!-- Mirrored from coderthemes.com/hyper/creative/pages-starter.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Aug 2020 18:15:16 GMT -->
<head>
    <meta charset="utf-8" />
    <title>SIAL-ECOMMERCER 2.0</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.ico">

    <!-- App css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/app-creative.min.css" rel="stylesheet" type="text/css" id="light-style" />
    <link href="assets/css/app-creative-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" />
    <link href="assets/css/vendor/dataTables.bootstrap4.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/vendor/responsive.bootstrap4.css" rel="stylesheet" type="text/css" />

</head>

<body class="loading" data-layout="topnav" data-layout-config='{"layoutBoxed":false,"darkMode":false,"showRightSidebarOnStart": true}'>
    <!-- Begin page -->
    <div class="wrapper">

        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->

        <div class="content-page">
            <div class="content">
                <!-- Topbar Start -->
                <div class="navbar-custom topnav-navbar topnav-navbar-dark">
                    <div class="container-fluid">

                        <!-- LOGO -->
                        <a href="#" class="topnav-logo">
                            <span class="topnav-logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="16">
                            </span>
                            <span class="topnav-logo-sm">
                                <img src="assets/images/logo_sm_dark.png" alt="" height="16">
                            </span>
                        </a>

                        <ul class="list-unstyled topbar-right-menu float-right mb-0">




                            <li class="dropdown notification-list">
                                <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" id="topbar-notifydrop" role="button" aria-haspopup="true" aria-expanded="false">
                                    <i class="dripicons-bell noti-icon"></i>
                                    <span class="noti-icon-badge"></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg" aria-labelledby="topbar-notifydrop">

                                    <!-- item-->
                                    <div class="dropdown-item noti-title">
                                        <h5 class="m-0">
                                            <span class="float-right">
                                                <a href="javascript: void(0);" class="text-dark">
                                                    <small>Clear All</small>
                                                </a>
                                            </span>Notification
                                        </h5>
                                    </div>

                                    <div style="max-height: 230px;" data-simplebar>
                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <div class="notify-icon bg-primary">
                                                <i class="mdi mdi-comment-account-outline"></i>
                                            </div>
                                            <p class="notify-details">Caleb Flakelar commented on Admin
                                                <small class="text-muted">1 min ago</small>
                                            </p>
                                        </a>

                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <div class="notify-icon bg-info">
                                                <i class="mdi mdi-account-plus"></i>
                                            </div>
                                            <p class="notify-details">New user registered.
                                                <small class="text-muted">5 hours ago</small>
                                            </p>
                                        </a>

                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <div class="notify-icon">
                                                <img src="assets/images/users/avatar-2.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                                <p class="notify-details">Cristina Pride</p>
                                                <p class="text-muted mb-0 user-msg">
                                                    <small>Hi, How are you? What about our next meeting</small>
                                                </p>
                                            </a>

                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                                <div class="notify-icon bg-primary">
                                                    <i class="mdi mdi-comment-account-outline"></i>
                                                </div>
                                                <p class="notify-details">Caleb Flakelar commented on Admin
                                                    <small class="text-muted">4 days ago</small>
                                                </p>
                                            </a>

                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                                <div class="notify-icon">
                                                    <img src="assets/images/users/avatar-4.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                                    <p class="notify-details">Karen Robinson</p>
                                                    <p class="text-muted mb-0 user-msg">
                                                        <small>Wow ! this admin looks good and awesome design</small>
                                                    </p>
                                                </a>

                                                <!-- item-->
                                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                                    <div class="notify-icon bg-info">
                                                        <i class="mdi mdi-heart"></i>
                                                    </div>
                                                    <p class="notify-details">Carlos Crouch liked
                                                        <b>Admin</b>
                                                        <small class="text-muted">13 days ago</small>
                                                    </p>
                                                </a>
                                            </div>

                                            <!-- All-->
                                            <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                                                View All
                                            </a>

                                        </div>
                                    </li>


                                    <li class="notification-list">
                                        <a class="nav-link right-bar-toggle" href="javascript: void(0);">
                                            <i class="dripicons-gear noti-icon"></i>
                                        </a>
                                    </li>

                                    <li class="dropdown notification-list">
                                        <a class="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" id="topbar-userdrop" href="#" role="button" aria-haspopup="true"
                                        aria-expanded="false">
                                        <span class="account-user-avatar"> 
                                            <img src="assets/images/users/avatar-1.jpg" alt="user-image" class="rounded-circle">
                                        </span>
                                        <span>
                                            <span class="account-user-name" id="span_nombre_usuario"></span>
                                            <span class="account-position">Mas.</span>
                                        </span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
                                        <!-- item-->
                                        <div class=" dropdown-header noti-title">
                                            <h6 class="text-overflow m-0">Bienvenido !</h6>
                                        </div>

                                        <!-- item-->


                                        <!-- item-->

                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <i class="mdi mdi-lock-outline mr-1"></i>
                                            <span>Cambio de Clave</span>
                                        </a>
                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <i class="mdi mdi-lock-outline mr-1"></i>
                                            <span>Lock Screen</span>
                                        </a>
                                        <a href="https://sial-help.sial.cl" target="_blank" class="dropdown-item notify-item">
                                            <i class="mdi mdi-lifebuoy mr-1"></i>
                                            <span>Support</span>
                                        </a>
                                        <!-- item-->
                                        <a href="javascript:close_seccion();" class="dropdown-item notify-item">
                                            <i class="mdi mdi-logout mr-1"></i>
                                            <span>Logout</span>
                                        </a>

                                    </div>
                                </li>

                            </ul>

                            

                        </div>
                    </div>
                    <!-- end Topbar -->

                    <div class="topnav shadow-sm">
                        <div class="container-fluid">
                            <nav class="navbar navbar-light navbar-expand-lg topnav-menu">

                                <div class="collapse navbar-collapse" id="topnav-menu-content">
                                    <ul class="navbar-nav">
                                       <li class="nav-item dropdown ">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="uil-dashboard mr-1"></i>Dashboards <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-dashboards">
                                            <a href="javascript:rutas('dashboard','V_dashboard_A');" class="dropdown-item">Analytics</a>
                                            <a href="javascript:rutas('dashboard','V_dashboard_C');" class="dropdown-item active">CRM</a>
                                            <a href="javascript:rutas('dashboard','V_dashboard_E');" class="dropdown-item">Ecommerce</a>
                                        </div>
                                    </li>


                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layouts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="uil-window mr-1"></i>Mantenedor <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-layouts">
                                            <a href="layouts-vertical.html" class="dropdown-item">Sitios</a>
                                            <a href="layouts-detached.html" class="dropdown-item">Catalogos</a>
                                            <a href="layouts-detached.html" class="dropdown-item">Asignacion Sku / Sitios</a>
                                            <a href="layouts-vertical.html" class="dropdown-item">Bodegas</a>
                                            <a href="layouts-detached.html" class="dropdown-item">Locales </a>
                                            <a href="layouts-detached.html" class="dropdown-item">Asignacion Bodegas Sitios</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layouts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="uil-window mr-1"></i>Consultas / Reportes <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-layouts">
                                            <a href="javascript:rutas('ordenes','v_ordenes');" class="dropdown-item">Consulta de Ordenes</a>

                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layouts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="uil-window mr-1"></i>Operaciones <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-layouts">
                                            <a href="layouts-vertical.html" class="dropdown-item">Sitios</a>
                                            <a href="layouts-detached.html" class="dropdown-item">Catalogos</a>
                                            <a href="layouts-detached.html" class="dropdown-item">Asignacion Sku / Sitios</a>
                                            <a href="layouts-vertical.html" class="dropdown-item">Bodegas</a>
                                            <a href="layouts-detached.html" class="dropdown-item">Locales </a>
                                            <a href="layouts-detached.html" class="dropdown-item">Asignacion Bodegas Sitios</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>


                <!-- Start Content-->
                <div id="content_principal">

                </div>

                <!-- container -->

            </div>
            <!-- content -->

            <!-- Footer Start -->
            <footer class="footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            1995 - 2023 © ADVICOM
                        </div>
                        <div class="col-md-6">
                            <div class="text-md-right footer-links d-none d-md-block">
                                <a href="javascript: void(0);">About</a>
                                <a href="javascript: void(0);">Support</a>
                                <a href="javascript: void(0);">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- end Footer -->

        </div>

        <!-- ============================================================== -->
        <!-- End Page content -->
        <!-- ============================================================== -->


    </div>
    <!-- END wrapper -->

    <!-- Right Sidebar -->
    <div class="right-bar">

      <div class="rightbar-title">
        <a href="javascript:void(0);" class="right-bar-toggle float-right">
          <i class="dripicons-cross noti-icon"></i>
      </a>
      <h5 class="m-0">Settings</h5>
  </div>

  <div class="rightbar-content h-100" data-simplebar>

    <div class="p-3">
      <div class="alert alert-warning" role="alert">
        <strong>Customize </strong> the overall color scheme, layout width, etc.
    </div>

    <!-- Settings -->
    <h5 class="mt-3">Color Scheme</h5>
    <hr class="mt-1" />

    <div class="custom-control custom-switch mb-1">
        <input type="radio" class="custom-control-input" name="color-scheme-mode" value="light" id="light-mode-check"
        checked />
        <label class="custom-control-label" for="light-mode-check">Light Mode</label>
    </div>

    <div class="custom-control custom-switch mb-1">
        <input type="radio" class="custom-control-input" name="color-scheme-mode" value="dark" id="dark-mode-check" />
        <label class="custom-control-label" for="dark-mode-check">Dark Mode</label>
    </div>

    <!-- Width -->
    <h5 class="mt-4">Width</h5>
    <hr class="mt-1"/>
    <div class="custom-control custom-switch mb-1">
        <input type="radio" class="custom-control-input" name="width" value="fluid" id="fluid-check" checked />
        <label class="custom-control-label" for="fluid-check">Fluid</label>
    </div>
    <div class="custom-control custom-switch mb-1">
        <input type="radio" class="custom-control-input" name="width" value="boxed" id="boxed-check" />
        <label class="custom-control-label" for="boxed-check">Boxed</label>
    </div>

    
</div> <!-- end padding-->

</div>
</div>

<div class="rightbar-overlay"></div>
<!-- /Right-bar -->

<!-- bundle -->
<script src="assets/js/vendor.min.js"></script>
<script src="assets/js/app.min.js"></script>
<!-- Datatables js -->
<script src="assets/js/vendor/jquery.dataTables.min.js"></script>
<script src="assets/js/vendor/dataTables.bootstrap4.js"></script>
<script src="assets/js/vendor/dataTables.responsive.min.js"></script>
<script src="assets/js/vendor/responsive.bootstrap4.min.js"></script>

<!-- Datatable Init js -->
<script src="../App.js?id=<?php echo(rand()); ?>"></script>

</body>

</html>

