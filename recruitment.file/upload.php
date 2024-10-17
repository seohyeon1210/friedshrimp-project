<?php
$source = $_FILES['profile']['tmp_name'];
$dest = "./".basename($_FILES['profile']['name']);
move_uploaded_file($source,$dest);
?>