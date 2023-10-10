<!-- Game Selector screen -->
<?php
    $games = json_decode(file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/games.json"), true);
?>
<main>
    <header>
        <img src="../assets/bar-games-logo-2.svg" class="logo">
    </header>
    <h1>Game Selector</h1>
    <ul>
        <?php
            foreach($games as $game){
                echo "<li><a href='game.php?game=" . $game["uri"] . "'>" . $game["name"] . "</a></li>";
            }
        ?>
    </ul>
</main>