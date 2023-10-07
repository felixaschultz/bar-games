<?php
    session_start();
    $game = $_GET["game"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game: <?php echo $game ?></title>
    <link rel="stylesheet" href="style/reset.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/mobile.css">
    <script src="manifest.webmanifest"></script>
</head>
<body>
    <?php include("pages/games/" . $game . ".php") ?>
    <script src="js/websocket.js"></script>
    <script src="js/app.js"></script>
</body>
</html>