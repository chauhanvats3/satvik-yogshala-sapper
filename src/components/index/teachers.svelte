<script>
    var teachers = [
        {
            name: 'Pritam Pyare',
            image: 'images/team/pritam-singh-rawat.jpg'
        },
        {
            name: 'Swami Manasananda ',
            image: 'images/team/swami-manasananda.jpg'
        },
        {
            name: 'Yogi Pankaj Paswan',
            image: 'images/team/yogi-pankaj-paswan.jpg'
        },
        {
            name: 'Yogi Vipulraj',
            image: 'images/team/yogi-vipulraj.jpg'
        }
    ];

</script>
<style>
    .teachers {
        flex-flow: column wrap;
        width: 97vw;
    }


    .content {
        width: 100%;
    }

    .teacher {
        position: relative;
        width: 200px;
        height: 230px;
        margin: 5px 10px;
        flex-flow: column wrap;
        font-weight: 900;
        cursor: pointer;
        border-radius: 20px;
        cursor: pointer;
        border: 1px solid rgba(212, 166, 255, 0.918);
        padding: 5px;
        background-color: rgba(212, 166, 255, 0.568);
    }

    img {
        width: 100%;
        border-radius: 20px;
        position: absolute;
        top: 0;
    }

    p {
        position: absolute;
        bottom: 0;
    }
</style>
<div class="teachers">
    <div class="heading">
        <h1>Yoga Teachers</h1>
        <hr />
    </div>
    <div class="content">
        <div class="teacher_group">
            <div class="teacher">
                <a href="about/yoga-gurus#pritam">
                    <img src="images/team/pritam-singh-rawat.jpg" alt="">
                    <p>Pritam Pyare</p>
                </a>
            </div>
            <div class="teacher">
                <a href="about/yoga-gurus#manasananda">

                    <img src="images/team/swami-manasananda.jpg" alt="">
                    <p>Swami Manasananda </p>
                </a>
            </div>
        </div>
        <div class="teacher_group">
            <div class="teacher">
                <a href="about/yoga-gurus#pankaj">

                    <img src="images/team/yogi-pankaj-paswan.jpg" alt="">
                    <p>Yogi Pankaj Paswan</p>
                </a>
            </div>
            <div class="teacher">
                <a href="about/yoga-gurus#vipulraj">

                    <img src="images/team/yogi-vipulraj.jpg" alt="">
                    <p>Yogi Vipulraj</p>
                </a>
            </div>
        </div>
    </div>
</div>