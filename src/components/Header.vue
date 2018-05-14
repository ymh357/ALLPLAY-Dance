<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4"> <!--总12 要三列，所以是3*4， 即col-md-4 -->
                <img src="../assets/logo.png" alt="logo" width="110" height="60"><br>
                <p size="+1">Allplay Dance</p>
            </div>
            <div class="col-md-4"><font><b>Deakin dance studio</b></font></div>
            <div class="col-md-4">
                <p align="center"> Burwood, Melbourne, VIC, 3125 0262640200 ALL AGES</p>
                <button style="float: right; background-color:#1596DC; height:35px; border: hidden; border-radius: 6px;" ><a href="http://deakin.edu.au/~yumingha/directory/directory.html" style="text-decoration: none"><p size="+1"><span id="result">Back to Directory Page</span></p></a></button>
            </div>
        </div>
    </div>
</template>


<style scoped>

    .container{
        width: 100%;
        min-height: 15%;
        background:#90D6DA;
    }
    .col-md-4{
        background:#90D6DA;
    }
    .col-md-4 font{
        font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif;
        font-size: 35px;
        text-align: center;
        line-height: 250%;
    }
    #result{
        color: #070707;
    }

</style>

