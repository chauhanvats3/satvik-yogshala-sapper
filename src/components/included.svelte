<script>
    export let dataSet;

    let curImg = dataSet[0].src;
    let changeImage = (i) => {
        curImg = dataSet[i].src;
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
        overflow-y: scroll;
    }

    .topic {
        width: 100%;
        cursor: pointer;
        margin: 7px 2px;
        text-align: justify;
    }

    .topic>p {
        color: #e0d12ac7;
    }




    @supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {

        .topics {
            -webkit-backdrop-filter: blur(2.5px);
            backdrop-filter: blur(2.5px);
        }


    }



    @media (max-width: 520px) {

        .topics {
            width: 100%;

            -webkit-backdrop-filter: blur(0.5px);
            backdrop-filter: blur(0.5px);
        }


    }
</style>

<div class="wrapper">

    <div class="content">
        <div class="image"><img src={curImg} alt=""></div>
        <div class="topics">
            {#each dataSet as data,i}
            <div class="topic" on:click={()=>{changeImage(i);}}>
                <p class="grad-text">{data.name}</p>
            </div>
            {/each}
        </div>
    </div>

</div>