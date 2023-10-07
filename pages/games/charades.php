<?php
    $root = $_SERVER["DOCUMENT_ROOT"];
    $games = json_decode(file_get_contents("games.json"), true);
    $themes = json_decode(file_get_contents($root."/charades/themes.json"), true);
?>
<header>
    <h1 class="game-title"><?php echo $_GET["game"]?></h1>
</header>
<main class="content">
    <?php
        if(!isset($_GET["theme"])){
            echo "<article class='grid'>";
            foreach($themes as $theme){
                echo "<a class='game' href='?game=".$_GET["game"]."&theme=". $theme["theme"] ."'>" . $theme["title"] . "</a>";
            }
            "</article>";
        } else{
            $theme = $_GET["theme"];
            foreach($themes as $theme){
                if($theme["theme"] == $_GET["theme"]){
                    echo "<h2>" . $theme["title"] . "</h2>";
                    echo "<p>" . $theme["description"] . "</p>";
                    echo "<a href='?game=".$_GET["game"]."'>Back</a>";
                }
            }
        }
        if(isset($_GET["theme"]) && isset($_GET["start"]) && $_GET["start"] == "true"){
        ?>
        <section class="timer"></section>
        <div class="grid g-3">
            <section class="item-drop success" ondrop="drop(event)" ondragover="allowDrop(event)"></section>
            <section class="container">
                <?php
                    foreach($themes as $theme){
                        if($theme["theme"] == $_GET["theme"]){
                            foreach($theme["items"] as $word){
                                echo "<article draggable='true' ondragstart='drag(event)' class='game__item game__item--". $word["id"] ."' id='". $word["id"] ."'>";
                                echo "<h2 class='game__item-title'>" . $word["title"] . "</h2>";
                                echo "<p>" . $word["description"] . "</p>";
                                if(sizeof($word["forbidden"]) > 0){
                                    echo "<p>Forbidden Words</p>";
                                    echo "<ul>";
                                    foreach($word["forbidden"] as $word){
                                        echo "<li>" . $word . "</li>";
                                    }
                                    echo "</ul>";
                                }
                                echo "</article>";
                            }
                        }
                    }
                ?>
            </section>
            <section class="item-drop fail" ondrop="drop(event)" ondragover="allowDrop(event)"></section>
        </div>
        <?php }else if(isset($_GET["theme"]) && !isset($_GET["start"])){
            echo "<a href='?game=".$_GET["game"]."&theme=".$_GET["theme"]."&start=true'>Start</a>";
        } ?>
</main>