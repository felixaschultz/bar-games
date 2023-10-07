<!-- Game Selector screen -->
<?php
    $games = json_decode(file_get_contents("games.json"), true);
?>
<main>
    <h1>Game Selector</h1>
    <ul>
        <?php
            foreach($games as $game){
                echo "<li><a href='game.php?game=" . $game["uri"] . "'>" . $game["name"] . "</a></li>";
            }
        ?>
    </ul>
</main>