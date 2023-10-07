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
</head>
<body>
    <?php include("pages/games/" . $game . ".php") ?>
</body>
</html>