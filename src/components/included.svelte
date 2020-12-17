<script>
    export let dataSet;

    let curImg = dataSet[0].src;
    let changeImage = (i) => {
        curImg = dataSet[i].src;
        console.log(curImg);
    }
</script>

<style>
    .wrapper {
        flex-flow: column nowrap;
        height: 400px;
        overflow: hidden;
        position: relative;
        border-radius: 10px;
        width: 80%;
    }

    .content {
        width: 100%;
        flex-direction: column;
    }

    .image {
        width: 100%;
    }

    img {
        width: 100%;
        z-index: -10;
        object-fit: cover;
    }

    .topics {
        position: absolute;
        height: 100%;
        width: 350px;
        min-width: 250px;
        top: 0;
        left: 0;
        border-radius: 10px;
        flex-flow: column nowrap;
        align-items: flex-start;
        padding: 20px;
        background: rgba(51, 51, 51, 0.534);
        color: azure;
        overflow-y: scroll;
    }

    .topic {
        width: 100%;
        cursor: pointer;
        margin: 7px 2px;
        text-align: justify;

    }

    .topic:hover {
        background-size: 100% auto;
        background-color: rgb(255, 113, 113);
        background-image: linear-gradient(45deg, #f7ef5a, #eb9db4);
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }


    @media (max-width: 520px) {

        .topics {
            width: 100%;
        }
    }

    @supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {

        .topics {
            -webkit-backdrop-filter: blur(2.5px);
            backdrop-filter: blur(2.5px);
        }


    }
</style>

<div class="wrapper">

    <div class="content">
        <div class="image"><img src={curImg} alt=""></div>
        <div class="topics">
            {#each dataSet as data,i}
            <div class="topic" on:click={()=>{changeImage(i);}}>
                <p>{data.name}</p>
            </div>
            {/each}
        </div>
    </div>

</div>