<!DOCTYPE html>
<html lang="en">
   
<head>
        <meta charset="utf-8" />
        <title>SIAL-ECOMMERCE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- App css -->
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/app-creative.min.css" rel="stylesheet" type="text/css" id="light-style" />
        <link href="assets/css/app-creative-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" />

       

    </head>

    <body class="authentication-bg pb-0" data-layout-config='{"darkMode":true}'>

        <div class="auth-fluid">
            <!--Auth fluid left content -->
            <div class="auth-fluid-form-box">
                <div class="align-items-center d-flex h-100">
                    <div class="card-body" id="w_login">

                        <!-- Logo -->
                        <div class="auth-brand text-center text-lg-left" STYLE="padding-bottom: 15px;">
                            <a href="index.php" class="logo-dark">
                                <span><img src="assets/images/logo.png" alt="" height="90"></span>
                            </a>
                            <a href="index.php" class="logo-light">
                                <span><img src="assets/images/logo.png" alt="" height="90"></span>
                            </a>
                        </div>

                        <!-- title-->
                        <h4 class="mt-0">SIAL-ECOMMERCER 2.0</h4>
                    

                        <!-- form -->
                            <form   action="javascript:login_proceso('Flogin');" enctype="multipart/form-data" methods="POST" id="Flogin">
                        
                            <div class="form-group">
                                <label for="usaurio">Usuario</label>
                                <input class="form-control" type="text" id="user" required="" placeholder="ingresa tu usuario">
                            </div>
                            <div class="form-group">
                                <a href="#" onclick="disable_recovery()" class="text-muted float-right"><small>Olvidaste tu contraseña?</small></a>
                                <label for="password">Clave</label>
                                <input class="form-control" type="password" required="" id="pass" placeholder="Ingresa tu password">
                            </div>
                            <div class="form-group mb-0 text-center">
                                <button class="btn btn-primary btn-block" type="submit" ><i class="mdi mdi-login"></i> Ingresar </button>
                            </div>
                            <!-- social-->
                          
                        </form>
                        <!-- end form-->

                    

                    </div> 
                    <div class="card-body" id="w_recoveri" style="display: none;">

                        <!-- Logo -->
                        <div class="auth-brand text-center text-lg-left">
                            <a href="index.html" class="logo-dark">
                                <span><img src="assets/images/logo-dark.png" alt="" height="18"></span>
                            </a>
                            <a href="index.html" class="logo-light">
                                <span><img src="assets/images/logo.png" alt="" height="18"></span>
                            </a>
                        </div>

                        <!-- title-->
                        <h4 class="mt-0">Restablecer la contraseña</h4>
                        <p class="text-muted mb-4">Ingrese su dirección de correo electrónico y local, le enviaremos un correo electrónico con instrucciones para restablecer su contraseña.

                        </p>

                        <!-- form -->
                            <form   action="javascript:login_proceso('Flogin');" enctype="multipart/form-data" methods="POST" id="Flogin">
                            <div class="form-group">
                                <label for="password">local</label>
                                <select class="form-control" required="" id="selec_locales1"></select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="emailaddress">Email address</label>
                                <input class="form-control" type="email" id="email1" required="" placeholder="Enter your email">
                            </div>
                            <div class="form-group mb-0 text-center">
                                <button class="btn btn-primary btn-block" onclick="recovery_pass()" type="button"><i class="mdi mdi-lock-reset"></i> Reset Password </button>
                            </div>
                            
                        </form>
                        <!-- end form-->

                        <!-- Footer-->
                        <footer class="footer footer-alt">
                            <p class="text-muted">Back to <a href="#" onclick="disable_recovery()" class="text-muted ml-1"><b>Log In</b></a></p>
                        </footer>

                    </div>
                    <!-- end .card-body -->
                </div> <!-- end .align-items-center.d-flex.h-100-->
            </div>
            <!-- end auth-fluid-form-box-->

            <!-- Auth fluid right content -->
            <div class="auth-fluid-right text-center">
               
            </div>
            <!-- end Auth fluid right content -->
        </div>
        <!-- end auth-fluid-->

        <!-- bundle -->
        <script src="assets/js/vendor.min.js"></script>
        <script src="assets/js/app.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="../Modulos/Autentificacion/Controlador/Autentificar.js?v=<?php echo(rand()); ?>"></script>

    </body>


</html>