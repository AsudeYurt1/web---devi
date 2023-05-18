<?
session_start(); // session baslatiyoruz
$user='admin'; // kullanici adi tanimladik
$pass='123456'; // sifre tanimladik
if($_GET['act']=='logout'){ // eger GET ile gelen 'act' esitse 'logout' a dedik (cikis sayfamiz)
session_unset(); // sessionu temizledik
echo 'cikis yaptiniz<br/>'; // cikis yaptiniz yazisini bastik
exit();
}else{ // eger GET ile gelen 'act' esit degilse 'logout' a
if($_SESSION['login']=='ok'){ // eger session 'login' esitse 'ok' a (yani giris yapilmissa)
echo 'hosgeldin '.$_SESSION['user'].'<br/><a href="https://www.r10.net/php/'.$_SERVER['PHP_SELF'].'?act=logout>cikis</a>'; // kullaniciya hosgeldin diyoruz
exit();
}
?>