<?php
$fish = json_decode(file_get_contents('fish.json'), true);

echo json_encode($fish);
?>