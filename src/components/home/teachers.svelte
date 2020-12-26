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
        width: 100%;
        margin: 50px 0 20px 0;
    }


    .content {
        width: 100%;
    }

    .teacher {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 5px 10px;
        flex-flow: column wrap;
        font-weight: 900;
        cursor: pointer;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        cursor: pointer;
        padding: 5px;
        transition: all 0.2s;
    }

    .teacher:hover {
        width: 210px;
    }

    img {
        width: 100%;

        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        position: absolute;
        top: 0;
    }

    p {
        background: rgba(255, 255, 255, 0.329);
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    @media (max-width:695px) {
        .teacher {
            width: 150px;
            height: 180px;
        }

        .teacher:hover {
            width: 160px;
        }

        p {
            font-size: small;
            margin-bottom: 2px;
        }
    }

    @supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {
        p {

            background: rgba(255, 255, 255, 0.288);
            backdrop-filter: blur(2.5px);
            -webkit-backdrop-filter: blur(2.5px);
        }

    }
</style>
<div class="teachers">
    <div class="heading">
        <h1 class="indie-flower">Yoga Instructors</h1>
        <hr />
    </div>
    <div class="content">
        <div class="teacher_group">
            <div class="teacher">
                <a href="about/yoga-gurus#pritam">
                    <img src="images/team/pritam-singh-rawat.jpg" alt="">
                    <p>Pritam Rawat</p>
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