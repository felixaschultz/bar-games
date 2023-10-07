<?php
    session_start();
    $gameId = rand(100000000, 9999999999);

    if(!isset($_SESSION["gameId"])){
        $_SESSION["gameId"] = $gameId;
    }

    echo $_SESSION["gameId"] ;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bar Games</title>
    <link rel="stylesheet" href="style/reset.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/mobile.css">
    <script src="manifest.webmanifest"></script>
</head>
<body>
    <header class="main-header">

    </header>
    <main class="main-content">
        <?php
           include("pages/game-selector.php");     
            /* include("pages/login.php"); */
        ?>
    </main>
    <footer class="main-footer">

    </footer>
    <script src="js/websocket.js"></script>
    <script src="js/app.js"></script>
</body>
</html>