<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="circle">
            <img src="sam.png">
        </div>
    </div>
</body>

</html>

<style>
    .container {
        margin: auto;
        width: 380px;
        height: 380px;
    }

    .circle {
        margin: 20px;
        width: 200px;
        height: 200px;
        position: relative;
    }

    .circle img {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }

    .circle::before {
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        border-radius: 50%;
        border: 3px solid transparent;
        animation: rotate 1s linear infinite;
        box-sizing: border-box;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
            border-top-color: rgb(245, 51, 51);
        }

        25% {
            transform: rotate(90deg);
            border-top-color: rgb(24, 177, 57);
        }

        50% {
            transform: rotate(180deg);
            border-top-color: rgb(236, 35, 136);
        }

        75% {
            transform: rotate(270deg);
            border-top-color: rgb(78, 35, 236);
        }

        100% {
            transform: rotate(360deg);
            border-top-color: rgb(209, 252, 18);
        }
    }
</style>