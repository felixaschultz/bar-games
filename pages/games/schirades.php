<?php
    $root = $_SERVER["DOCUMENT_ROOT"];
    $games = json_decode(file_get_contents("games.json"), true);
    $themes = json_decode(file_get_contents($root."/schirades/themes.json"), true);
?>
<header>
    <h1 class="game-title"><?php echo $_GET["game"]?></h1>
</header>
<main class="content">
    <?php
        if(!isset($_GET["theme"])){
            foreach($themes as $theme){
                echo "<a href='?game=".$_GET["game"]."&theme=". $theme["theme"] ."'>" . $theme["title"] . "</a>";
            }
        } else{
            $theme = $_GET["theme"];
            foreach($themes as $theme){
                if($theme["theme"] == $_GET["theme"]){
                    echo "<h2>" . $theme["title"] . "</h2>";
                }
            }
        }
        ?>
        <section class="grid">
            <?php
                foreach($themes as $theme){
                    if($theme["theme"] == $_GET["theme"]){
                        foreach($theme["items"] as $word){
                            echo "<article>";
                            echo "<p>" . $word["title"] . "</p>";
                            echo "<p>" . $word["description"] . "</p>";
                            echo "<p>Forbidden Words</p>";
                            echo "<ul>";
                            foreach($word["forbidden"] as $word){
                                echo "<li>" . $word . "</li>";
                            }
                            echo "</ul>";
                            echo "</article>";
                        }
                    }
                }
            ?>
        </section>
</main>