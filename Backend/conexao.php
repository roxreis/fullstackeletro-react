<?php 

function consultar($sql)
{ 
    $host = "localhost";
    $user = "root";
    $pass = "";
    $dbname = "fteletro";

    $con = mysqli_connect($host, $user, $pass, $dbname);
    $res = mysqli_query($con, $sql);
    mysqli_close($con);
    return $res;

}

function inserir($sql)
{ 
    $host = "localhost";
    $user = "root";
    $pass = "";
    $dbname = "fteletro";

    $con = mysqli_connect($host, $user, $pass, $dbname);
    // $res = mysqli_query($con, $sql);
    mysqli_close($con);

}





