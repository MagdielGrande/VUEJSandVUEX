<template>
    <footer>
        Copyright@2022 <a href="https://github.com/MagdielGrande">Magdiel G.</a>
    </footer>
</template>

<script>
export default {
  name: 'FooterCp',
  components:{
    
  }
}
</script>
<style>
  footer{
    margin-top: 70px;
    font-weight: bold;
    background: rgb(255, 185, 243);
    width: 100%;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: rgb(119, 118, 118);
  }

footer a {
  color:rgb(252, 76, 178);
  text-decoration: none;
}
footer a:hover{
  color: #3a3838;
}
</style>