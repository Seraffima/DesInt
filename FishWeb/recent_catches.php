<?php
$catches = json_decode(file_get_contents('catches.json'), true);

usort($catches, function($a, $b) {
    return strtotime($b['date']) - strtotime($a['date']);
});

echo json_encode(array_slice($catches, 0, 10));
?>