<?php
    $root = $_SERVER["DOCUMENT_ROOT"];
    $games = json_decode(file_get_contents($root . "/games.json"), true);
    $themes = json_decode(file_get_contents($root."/charades/themes.json"), true);
?>
<header class="header">
    <img src="../assets/bar-games-logo-2.svg" class="logo">
    <section>
        <h1 class="game-title"><?php echo $_GET["game"]?></h1>
        <?php
            foreach($games as $game){
                if($game["uri"] == $_GET["game"]){
                    echo "<p class='game-description'>" . $game["description"] . "</p>";
                }
            }
        ?>
    </section>
</header>
<main class="content">
    <?php
        if(!isset($_GET["theme"])){
            echo "<article class='grid'>";
            foreach($themes as $theme){
                echo "<a class='game' href='?game=".$_GET["game"]."&theme=". $theme["theme"] ."'>
                        <img src='".$theme["img"]."'>
                        " . $theme["title"] . "
                    </a>";
            }
            "</article>";
        }

        if(isset($_GET["theme"]) && isset($_GET["start"]) && $_GET["start"] == "true"){
        ?>
        <section class="timer">60</section>
        <div class=" g-3">
            <!-- draggable='true' ondragstart='drag(event)' -->
            <!-- <section class="item-drop success" ondrop="drop(event)" ondragover="allowDrop(event)"></section> -->
            <section class="container">
                <?php
                    foreach($themes as $theme){
                        if($theme["theme"] == $_GET["theme"]){
                            foreach($theme["items"] as $word){
                                echo "<article style='z-index: ". -$word["id"] ."' class='game__item game__item--". $word["id"] ."' id='". $word["id"] ."'>";
                                echo "<div class='game__item-success'></div>";
                                echo "<h2 class='game__item-title'>" . $word["title"] . "</h2>";
                                echo "<div class='game__item-fail'></div>";
                                /* echo "<p>" . $word["description"] . "</p>";
                                if(sizeof($word["forbidden"]) > 0){
                                    echo "<p>Forbidden Words</p>";
                                    echo "<ul>";
                                    foreach($word["forbidden"] as $word){
                                        echo "<li>" . $word . "</li>";
                                    }
                                    echo "</ul>";
                                } */
                                echo "</article>";
                            }
                        }
                    }
                ?>
            </section>
            <!-- <section class="item-drop fail" ondrop="drop(event)" ondragover="allowDrop(event)"></section> -->
        </div>
        <?php }else if(isset($_GET["theme"]) && !isset($_GET["start"])){
            foreach($themes as $theme){
                if($theme["theme"] == $_GET["theme"]){
                    echo "<h2 class='theme-title'>" . $theme["title"] . "</h2>";
                    echo "<a class='back-btn' href='?game=".$_GET["game"]."'>Back</a>";
                    echo "<p>" . $theme["description"] . "</p>";
                    echo "<ol>";
                        foreach($games as $game){
                            if($game["uri"] == $_GET["game"]){
                                foreach($game["rules"] as $rule){
                                    echo "<li>" . $rule . "</li>";
                                }
                            }
                        }
                    echo "</ol>";
                    echo "<a href='?game=".$_GET["game"]."&theme=".$_GET["theme"]."&start=true' class='cta'>Start the game</a>";
                }
            }
        } ?>
</main>