<pre>
<?php

$filename = "./bob5.js";

$tomerge[0] = "./bob5-global.js";
$tomerge[1] = "./bob5-coreobject.js";
$tomerge[2] = "./bob5-animation.js";
$tomerge[3] = "./bob5-monitor.js";
$tomerge[4] = "./bob5-mouse.js";
$tomerge[5] = "./bob5-movement.js";
$tomerge[6] = "./bob5-general.js";
$tomerge[7] = "./bob5-objects.js";
$tomerge[8] = "./bob5-renderer.js";
$tomerge[9] = "./bob5-fps.js";

echo "Open target file: $filename\r\n";

$target = fopen($filename,"w");

if ($target===false) {
    echo "Failed to open file: $filename\r\n";
    exit();
}

for ($i=0; $i<sizeof($tomerge); $i++) {
    echo "Open src file: $tomerge[$i]\r\n";
    $src = fopen($tomerge[$i],"r");
    if ($src===false) {
      echo "Failed to open file: $tomerge[$i]\r\n";
      exit();
    }
    while (!feof($src)) {
        fwrite($target,fgets($src));    
    }
    fclose($src);
}                

// close down
echo "Complete\r\n";

fclose($target);

?>
</pre>