
<div class="main-container">
    <img class="hero-example hero-example-1" src="https://placehold.co/1600x900" alt="" />
    <img class="hero-example hero-example-2" src="https://placehold.co/1600x900" alt="" />
    <img class="hero-example hero-example-3" src="https://placehold.co/1600x900" alt="" />
    <img class="hero-example hero-example-4" src="https://placehold.co/1600x900" alt="" />
    <img class="hero-example hero-example-5" src="https://placehold.co/1600x900" alt="" />
    <img class="hero-example hero-example-6" src="https://placehold.co/1600x900" alt="" />
    <img class="hero-example hero-example-7" src="https://placehold.co/1600x900" alt="" />
    <img class="hero-example hero-example-8" src="https://placehold.co/1600x900" alt=""/>
    <img class="hero-example-main" src="https://placehold.co/853x379" alt="" />

    <h2 class="title-main">WHAT IS GOLEM?</h2>
    <p class="desc-main">this is filler text this is filler text i will write this after i fill in the other thing. you ship thing. this is filler text this is filler text i will write this after i fill in the other.</p>

    <img class="info-homunculus" src="https://placehold.co/209x312" alt="" />

    <div class="dark-strip dark-strip-top"></div>
    <div class="dark-bg"></div>

    <div class="light-frame"></div>
    <div class="accent-bar accent-bar-v1"></div>
    <div class="accent-bar accent-bar-v2 rotate-neg-90"></div>
    <div class="accent-bar accent-bar-v3 rotate-pos-90"></div>

    <h2 class="qualify-title">DO I QUALIFY?</h2>
    
    <div class="qualify-box">
        <h3>As a student</h3>
        <p>as a student, you need to blah blah blah blah blah and blah blah blah blah blah. honk shoo girl thats a golem thing thing thing sahur</p>
    </div>

    <button class="btn-container btn-primary">Submit completed →</button>
    <button class="btn-container btn-secondary">Get help →</button>

    <div class="teacher-box">
        <h3>As a teacher</h3>
        <p>As a teacher, Homonculus is available as a unit, inc. After completing the unit, we’ll ship prizes directly to you to distribute.<br/>You can be eligible by meeting either of the:<br/>be part of a qualifying school district<br/>register with form</p>
    </div>

    <button class="btn-container btn-teacher">Submit form →</button>

    <div class="dark-strip dark-strip-mid rotate-180"></div>

    <h2 class="help-title">DON’T KNOW WHERE <br/>TO START?</h2>
    
    <div class="guide-box"></div>
    <p class="guide-text">Read our guides →</p>

    <img class="gallery-img gallery-img-1" src="https://placehold.co/1600x900" alt="" />
    <img class="gallery-img gallery-img-2" src="https://placehold.co/1600x900" alt="" />
    <img class="gallery-img gallery-img-3" src="https://placehold.co/1600x900" alt="" />

    <img class="square-img-lg" src="https://placehold.co/317x317" alt="" />
    <img class="square-img-md" src="https://placehold.co/290x290" alt="" />
    <img class="full-width-banner" src="https://placehold.co/1440x288" alt="" />

    <h2 class="questions-title">QUESTIONS</h2>
    
    <div class="divider-line divider-1"></div>
    <div class="diamond-icon diamond-1"></div>
    <p class="question-text q-text-1">This is a question about how something works.</p>

    <div class="divider-line divider-2"></div>
    <div class="diamond-icon diamond-2"></div>
    <p class="question-text q-text-2">This is a question about how something works.</p>

    <div class="divider-line divider-3"></div>
    <div class="diamond-icon diamond-3"></div>
    <p class="question-text q-text-3">This is a question about how something works.</p>

    <div class="divider-line divider-4"></div>

    <img class="question-asset" src="https://placehold.co/170x234" alt="" />

    <div class="footer-bg"></div>
    <div class="dark-strip dark-strip-bottom rotate-180"></div>
    <h2 class="footer-title">MADE BY JOY SU</h2>
    <p class="footer-sub">
        for <a href="https://hackclub.org">Hack Club</a>
    </p>

</div>


    <style>
        :root {
            --base-w: min(100vw, 177.78vh);
            --base-h: min(56.25vw, 100vh);
            --w: calc(var(--base-w) / 1440);
            --h: calc(var(--base-h) / 1024);
        }

        :global(body), :global(html) {
            margin: 0;
            padding: 0;
            background: #FEFAF4;
            display: flex;
            justify-content: center;
        }

        .main-container {
            width: 100vw;
            height: calc(5120 * var(--h));
            position: relative;
            background: #FEFAF4;
            flex-shrink: 0;
        }

        .main-container > * {
            position: absolute;
            margin: 0;
        }

        h2 {
            font-family: 'Peich', sans-serif;
            font-weight: 400;
            line-height: calc(24 * var(--h));
            word-wrap: break-word;
        }

        h3 {
            font-style: italic;
        }

        p {
            font-family: 'Atkinson Hyperlegible Mono', monospace;
            font-weight: 400;
            line-height: calc(35 * var(--h));
            word-wrap: break-word;
        }

        .hero-example {
            width: calc(325 * var(--w));
            aspect-ratio: 16 / 9;
            object-fit: cover;
            height: auto; 
        }

        .hero-example-1 { left: calc(837 * var(--w)); top: calc(691 * var(--h)); }
        .hero-example-2 { left: calc(714 * var(--w)); top: calc(119 * var(--h)); }
        .hero-example-3 { left: calc(307 * var(--w)); top: calc(142 * var(--h)); }
        .hero-example-4 { left: calc(1016 * var(--w)); top: calc(214 * var(--h)); }
        .hero-example-5 { left: calc(93 * var(--w)); top: calc(368 * var(--h)); }
        .hero-example-6 { left: calc(1042 * var(--w)); top: calc(462 * var(--h)); }
        .hero-example-7 { left: calc(159 * var(--w)); top: calc(620 * var(--h)); }
        .hero-example-8 { left: calc(528 * var(--w)); top: calc(711 * var(--h)); }
        .hero-example-main { width: calc(853 * var(--w)); height: calc(379 * var(--h)); left: calc(293 * var(--w)); top: calc(312 * var(--h)); }

        
        .title-main {
            left: calc(262 * var(--w)); top: calc(1329 * var(--h));
            text-align: center; color: #1D1312; font-size: calc(150 * var(--h));
        }

        .desc-main {
            width: calc(907 * var(--w)); left: calc(266 * var(--w)); top: calc(1426 * var(--h));
            text-align: center; color: #1D1312; font-size: calc(35 * var(--h));
        }

        .info-homunculus { 
            width: calc(209 * var(--w)); 
            height: calc(312 * var(--h)); 
            left: calc(638 * var(--w)); 
            top: calc(1736 * var(--h)); 
        }

        .dark-strip { width: calc(1440 * var(--w)); height: calc(71 * var(--h)); background: #1D1312; }
        .dark-strip-top { top: calc(1978 * var(--h)); }
        .dark-strip-mid { left: calc(1440 * var(--w)); top: calc(3143 * var(--h)); }
        .dark-strip-bottom { left: calc(1440 * var(--w)); top: calc(4965 * var(--h)); }

        .dark-bg { width: calc(1440 * var(--w)); height: calc(1024 * var(--h)); background: #1D1312; top: calc(2048 * var(--h)); left: 0; }
        
        .light-frame { width: calc(720 * var(--w)); height: calc(768 * var(--h)); left: 0; top: calc(2176 * var(--h)); background: #FEFAF4; }
        .accent-bar { width: calc(51 * var(--w)); height: calc(768 * var(--h)); background: #FEFAF4; }
        .accent-bar-v1 { left: calc(720 * var(--w)); top: calc(2176 * var(--h)); }
        .accent-bar-v2 { left: 0; top: calc(2176 * var(--h)); height: calc(762 * var(--h)); }
        .accent-bar-v3 { left: calc(731 * var(--w)); top: calc(2944 * var(--h)); height: calc(731 * var(--h)); }
        
        .rotate-neg-90 { transform: rotate(-90deg); transform-origin: top left; }
        .rotate-pos-90 { transform: rotate(90deg); transform-origin: top left; }
        .rotate-180 { transform: rotate(-180deg); transform-origin: top left; }

        .qualify-title { left: calc(141 * var(--w)); top: calc(2344 * var(--h)); color: #1D1312; font-size: calc(90 * var(--h)); }
        
        .qualify-box { width: calc(515 * var(--w)); left: calc(141 * var(--w)); top: calc(2435 * var(--h)); }

        .teacher-box { width: calc(522 * var(--w)); left: calc(835 * var(--w)); top: calc(2323 * var(--h)); color: #FEFAF4; }

        .btn-container {
            width: calc(515 * var(--w)); height: calc(82 * var(--h)); 
            border: calc(4 * var(--h)) #1D1312 solid;
            display: flex;
            align-items: center;
            padding-left: calc(29 * var(--w));
            box-sizing: border-box;
            font-size: calc(35 * var(--h)); 
            font-weight: 700; 
            line-height: calc(24 * var(--h));
            font-family: 'Atkinson Hyperlegible Mono', monospace;
        }
        
        .btn-primary { background: #FEFAF4; color: #1D1312; top: calc(2707 * var(--h)); left: calc(141 * var(--w)); }
        .btn-secondary { background: rgba(29, 19, 18, 0.10); color: #1D1312; top: calc(2801 * var(--h)); left: calc(141 * var(--w)); }
        .btn-teacher { border-color: #FEFAF4; color: #FEFAF4; left: calc(835 * var(--w)); top: calc(2764 * var(--h)); }


        .help-title {
            left: calc(283 * var(--w)); top: calc(3270 * var(--h));
            text-align: center; color: #1D1312; font-size: calc(125 * var(--h)); line-height: calc(90 * var(--h));
        }

        .guide-box {
            width: calc(258 * var(--w)); height: calc(135 * var(--h)); left: calc(937 * var(--w)); top: calc(3808 * var(--h));
            background: rgba(29, 19, 18, 0.10); border: calc(4 * var(--h)) #1D1312 solid;
        }

        .guide-text {
            width: calc(229 * var(--w)); left: calc(966 * var(--w)); top: calc(3840 * var(--h));
            color: #1D1312; font-size: calc(35 * var(--h)); font-weight: 700;
        }

        .gallery-img { width: calc(480 * var(--w)); height: calc(270 * var(--h)); border: calc(5 * var(--h)) #1E1313 solid; display: block;}
        .gallery-img-1 { left: calc(209 * var(--w)); top: calc(3464 * var(--h)); }
        .gallery-img-2 { left: calc(725 * var(--w)); top: calc(3464 * var(--h)); }
        .gallery-img-3 { left: calc(417 * var(--w)); top: calc(3676 * var(--h)); }

        .square-img-lg { width: calc(317 * var(--w)); height: calc(317 * var(--h)); left: calc(1052 * var(--w)); top: calc(3329 * var(--h)); }
        .square-img-md { width: calc(290 * var(--w)); height: calc(290 * var(--h)); left: calc(119 * var(--w)); top: calc(3632 * var(--h)); }

        .full-width-banner { width: calc(1440 * var(--w)); height: calc(288 * var(--h)); left: 0; top: calc(4064 * var(--h)); }

        .questions-title { left: calc(141 * var(--w)); top: calc(4470 * var(--h)); color: #1D1312; font-size: calc(125 * var(--h)); }
        
        .divider-line {
            width: calc(1168 * var(--w)); height: 0; left: calc(141 * var(--w));
            outline: calc(3 * var(--h)) #1D1312 solid; outline-offset: calc(-1.5 * var(--h));
        }
        .divider-1 { top: calc(4564 * var(--h)); }
        .divider-2 { top: calc(4638 * var(--h)); }
        .divider-3 { top: calc(4712 * var(--h)); }
        .divider-4 { top: calc(4786 * var(--h)); }

        .diamond-icon {
            width: calc(16 * var(--w)); height: calc(16 * var(--h)); border: calc(3 * var(--h)) #1D1312 solid;
            transform: rotate(45deg); transform-origin: top left;
        }
        .diamond-1 { left: calc(168.31 * var(--w)); top: calc(4577 * var(--h)); }
        .diamond-2 { left: calc(168.31 * var(--w)); top: calc(4651 * var(--h)); }
        .diamond-3 { left: calc(168.31 * var(--w)); top: calc(4725 * var(--h)); }

        .question-text {
            width: calc(1100 * var(--w)); left: calc(209 * var(--w)); color: #1D1312; font-size: calc(35 * var(--h));
        }
        .q-text-1 { top: calc(4585 * var(--h)); }
        .q-text-2 { top: calc(4659 * var(--h)); }
        .q-text-3 { top: calc(4733 * var(--h)); }

        .question-asset { width: calc(170 * var(--w)); height: calc(234 * var(--h)); left: calc(1174 * var(--w)); top: calc(4709 * var(--h)); }

        .footer-bg { width: calc(1440 * var(--w)); height: calc(155 * var(--h)); left: 0; top: calc(4965 * var(--h)); background: #1D1312; }
        
        .footer-title {
            width: calc(521 * var(--w)); left: calc(459 * var(--w)); top: calc(4999 * var(--h));
            text-align: center; color: #FEFAF4; font-size: calc(75 * var(--h));
        }

        .footer-sub {
            width: calc(428 * var(--w)); height: calc(20 * var(--h)); left: calc(506 * var(--w)); top: calc(5044 * var(--h));
            text-align: center; color: #FEFAF4; font-size: calc(35 * var(--h));
        }

    </style>
