<?php
	require("constants.php");

	$con = mysql_connect(DB_SERVER,DB_USER, DB_PASS) or die(mysql_error());
		mysql_select_db(DB_NAME) or die("Conexion a la Base de Datos denegada");
		
?>