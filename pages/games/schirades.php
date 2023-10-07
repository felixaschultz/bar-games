<?php
    $root = $_SERVER["DOCUMENT_ROOT"];
    $games = json_decode(file_get_contents("games.json"), true);
    $themes = json_decode(file_get_contents($root."/schirades/themes.json"), true);

    print_r($themes);
?>
<header>
    <h1 class="game-title"><?php echo $_GET["game"]?></h1>
</header>
<main class="content">
    <?php
        foreach($themes as $theme){
            echo "<h2>" . $theme["title"] . "</h2>";
        }
    ?>
</main>