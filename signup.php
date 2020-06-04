<?php
session_start();
error_reporting(1);
extract($_REQUEST);
if (isset($login)) {
    header("location: login.php");
}
if (isset($signup)) {
    // signup
}
?>

<!DOCTYPE html>
<html lang="en">
<?php include('head.php') ?>

<body>
    <header>
        <?php include('nav.php') ?>
        <div class="signup-box">
            <h2 class="signup-heading">
                SIGN UP WITH US
            </h2>
            <form method="POST">
                <input type="text" name="name" placeholder="Full Name">
                <input type="email" name="email" placeholder="Email">
                <input type="password" name="password" placeholder="Password">
                <input type="text" name="phone" placeholder="Phone Number">
                <input type="submit" name="signup" value="Sign Up">
                <label for="signin">Already has an account ?</label>
                <input type="submit" name="login" value="Log In">
            </form>
        </div>
    </header>


</body>

</html>