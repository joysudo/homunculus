<script lang="ts">
    const heroImages = [
        { src: "https://placehold.co/1600x900", alt: "", x: 995, y: 780 },
        { src: "https://placehold.co/1600x900", alt: "", x: 850, y: 210 },
        { src: "https://placehold.co/1600x900", alt: "", x: 465, y: 230 },
        { src: "https://placehold.co/1600x900", alt: "", x: 1175, y: 305 },
        { src: "https://placehold.co/1600x900", alt: "", x: 255, y: 460 },
        { src: "https://placehold.co/1600x900", alt: "", x: 1200, y: 550 },
        { src: "https://placehold.co/1600x900", alt: "", x: 320, y: 710 },
        { src: "https://placehold.co/1600x900", alt: "", x: 660, y: 800 }
    ];

    const faqs = [
        {
            question: "This is a question about how something works.",
            answer: "This is the answer explaining how it works."
        },
        {
            question: "This is a question about how something works.",
            answer: "Another explanation goes here."
        },
        {
            question: "This is a question about how something works.",
            answer: "More details about the process."
        }
    ];

    let faqIndex = $state<number | null>(null);
    function toggle(i: number) {
        if (faqIndex === i) faqIndex = null; else faqIndex = i;
    }
</script>

<div class="main-container">
    <!-- sections will be hero, info, qualify, guide, questions -->
    <div class="hero-wrapper">
        {#each heroImages as img}
            <img
                class="hero-example"
                src={img.src}
                alt={img.alt}
                style="
                    left: calc({img.x} * calc(100vw / 1440));
                    top: calc({img.y * 1.4} * calc(100vw * 9 / 16 / 1440));
                    transform: translate(-50%, -50%);
                "
            />
        {/each}
        <img class="hero-logo" src="https://placehold.co/853x379" alt="" />
    </div>
    <div class="info-wrapper">
        <div></div>
        <div>
            <h2 class="info-title">WHAT IS HOMUNCULUS?</h2>
            <p class="info-body">this is filler text this is filler text i will write this after i fill in the other thing. you ship thing. this is filler text this is filler text i will write this after i fill in the other.</p>
        </div>
        <div class="info-visual">
            <img class="info-homunculus" src="https://placehold.co/209x312" alt="" />
            <svg class="info-ground" viewBox="0 0 1440 71" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%; height: auto;">
                <path d="M1108.19 0L1440 45.71L1438.12 71H0V0L144.699 45.71L480.499 18.88L831.268 45.71L1108.19 0Z" fill="var(--dark)"/>
            </svg>
        </div>
    </div>
    <div class="qualify-wrapper">
        <div class="student-box">
            <svg class="svg-border top" viewBox="0 0 1440 71" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%; height: auto;">
                <path d="M1108.19 0L1440 45.71L1438.12 71H0V0L144.699 45.71L480.499 18.88L831.268 45.71L1108.19 0Z" fill="var(--cream)"/>
            </svg>
            <svg class="svg-border right" viewBox="0 0 1440 71" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%; height: auto;">
                <path d="M1108.19 0L1440 45.71L1438.12 71H0V0L144.699 45.71L480.499 18.88L831.268 45.71L1108.19 0Z" fill="var(--cream)"/>
            </svg>
            <svg class="svg-border bottom" viewBox="0 0 1440 71" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%; height: auto;">
                <path d="M1108.19 0L1440 45.71L1438.12 71H0V0L144.699 45.71L480.499 18.88L831.268 45.71L1108.19 0Z" fill="var(--cream)"/>
            </svg>
            <h2 class="qualify-title">DO I QUALIFY?</h2>
            <h3>As a student</h3>
            <p>as a student, you need to blah blah blah blah blah and blah blah blah blah blah. honk shoo girl thats a golem thing thing thing sahur</p>
            <button class="btn-container btn-light">Submit completed →</button>
            <button class="btn-container btn-med">Get help →</button>
        </div>
        <div class="teacher-box">
            <h3>As a teacher</h3>
            <p>As a teacher, Homonculus is available as a unit, inc. After completing the unit, we’ll ship prizes directly to you to distribute.<br/>You can be eligible by meeting either of the:<br/>be part of a qualifying school district<br/>register with form</p>
            <button class="btn-container btn-dark">Submit form →</button>
        </div>
    </div>
    <div class="guide-wrapper">
        <svg class="info-ground" viewBox="0 0 1440 71" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%; height: auto; transform: rotate(180deg);">
            <path d="M1108.19 0L1440 45.71L1438.12 71H0V0L144.699 45.71L480.499 18.88L831.268 45.71L1108.19 0Z" fill="var(--dark)"/>
        </svg>
        <img class="star star-right" src="https://placehold.co/317x317" alt="" />
        <img class="star star-left" src="https://placehold.co/290x290" alt="" />
        <div class="guide-content">
            <h2 class="guide-title">DON’T KNOW WHERE <br/>TO START?</h2>
            <div class="gallery-container">
                <div>
                    <img src="https://placehold.co/1600x900" alt="" />
                    <img src="https://placehold.co/1600x900" alt="" />
                </div>
                <div>
                    <img src="https://placehold.co/1600x900" alt="" />
                    <button class="btn-container btn-med">Read our<br/>guides →</button>
                </div>
            </div>
        </div>
    </div>
    <div class="questions-wrapper">
        <img class="questions-decor" src="https://placehold.co/1440x288" alt="" />
        <div class="questions-content">
            <h2 class="questions-title">QUESTIONS</h2>    
            {#each faqs as faq, i}
                <div class="questions-divider"></div>
                <button class="questions-header" onclick={() => toggle(i)}>
                    <div class="questions-icon"></div>
                    <p class="question-text">{faq.question}</p>
                </button>
                {#if faqIndex === i} 
                    <p class="question-text"style="opacity: 0.8;">{faq.answer}</p>
                {/if}
            {/each}
            <div class="questions-divider"></div>
        </div>
        <div style="position: relative">
            <svg class="info-ground" viewBox="0 0 1440 71" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%; height: auto; transform: translateY(5px);">
                <path d="M1108.19 0L1440 45.71L1438.12 71H0V0L144.699 45.71L480.499 18.88L831.268 45.71L1108.19 0Z" fill="var(--dark)"/>
            </svg>
            <img class="question-asset" src="https://placehold.co/170x234" alt="" />
            <footer>
                <h2 class="footer-title">MADE BY JOY SU</h2>
                <p class="footer-sub">for <a href="https://hackclub.org">Hack Club</a></p>
            </footer>
        </div>
    </div>
</div>


<style>
    :root { 
        --base-w: 100vw;
        --base-h: calc(100vw * 9 / 16);
        --w: calc(var(--base-w) / 1440);
        --h: calc(var(--base-h) / 1024);
        --section-height: var(--base-h);
        --cream: #FEFAF4;
        --dark: #1D1312;
    }

    :global(body), :global(html) {
        margin: 0;
        padding: 0;
        background: var(--cream);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .main-container {
        width: 100vw;
        height: calc(5*var(--base-h));
        position: relative;
        background: var(--cream);
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
    }

    .main-container > * {
        margin: 0;
    }

    h2 {
        font-family: 'Peich', sans-serif;
        font-weight: 400;
        line-height: 1;
        font-size: clamp(2.5rem, 8vw, calc(125 * vw / 16 * 9 / 1024));
        /* font-size: clamp(1.8rem, 3vw, 4.8rem); */
        word-wrap: break-word;
        margin: 0;
    }

    h3 {
        font-family: 'Atkinson Hyperlegible Mono', monospace;
        font-size: 1.5rem;
        font-style: italic;
        margin: 0;
    }

    p {
        font-family: 'Atkinson Hyperlegible Mono', monospace;
        font-weight: 400;
        font-size: clamp(1.25rem, 2vw, 3rem);
        line-height: 1;
        word-wrap: break-word;
        margin: 1rem 0;
    }

    a {
        color: chocolate;
    }

    .hero-wrapper {
        width: var(--base-w);
        min-height: calc(100vw * 9 / 16) !important;
        position: static;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
    }

    .hero-example {
        width: calc(325 * var(--w));
        aspect-ratio: 16 / 9;
        object-fit: cover;
        height: auto; 
        position: absolute;
    }

    .hero-logo { 
        width: 50vw;
        height: auto;
    }

    .info-wrapper {
        width: var(--base-w);
        min-height: var(--base-h);
        position: static;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .info-wrapper > * {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info-title {
        text-align: center; 
        color: var(--dark); 
        font-size: clamp(2.5rem, 8vw, calc(125 * 100vw / 16 * 9 / 1024));
        line-height: 0.5; 
        margin: 0;
        padding-top: var(--base-h)*0.5 !important;
    }

    .info-body {
        text-align: center; 
        color: var(--dark); 
        margin: 1rem 20vw;
    }    

    .info-visual {
        width: 100vw;
        position: relative;
        justify-content: flex-end;
        margin-top: 15vw;
    }

    .info-homunculus {
        position: absolute;
        width: 10vw;
        height: auto;
        left: 50%;
        transform: translateX(-50%);
        bottom: calc(71 * (100vw / 16 * 9 / 1024) * 0.33);  
        z-index: 2;
    }

    .info-ground { 
        position: relative;
        width: 100%;
        height: auto;
        margin-bottom: -5px;
    }

    .qualify-wrapper { 
        width: 100vw; 
        min-height: var(--base-h); 
        background: var(--dark); 
        display: flex;
        align-items: center;
        position: relative;
        flex-grow: 1;
    }

    .qualify-title {font-size: clamp(2.5rem, 8vw, calc(125 * 100vw / 16 * 9 / 1024)); } 

    .student-box {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--cream);
        color: var(--dark);
        height: 70%;
        padding-left: 5vw;
        padding-right: 1vw;
    }

    .svg-border {
        position: absolute;
        width: 100%;
        height: auto;
    }

    .top {
        top: 0%;
        right: 0%;
        transform: translateY(-100%);
    }

    .right {
        top: 0%; 
        left: 100%;
        width: calc(0.7 * var(--base-h)) !important;
        height: auto !important;
        transform-origin: top left;
        transform: rotate(90deg) translateY(-95%);
        color: var(--cream);
    }

    .bottom {
        bottom: 0%;
        left: 0%;
        transform-origin: center;
        transform: rotate(-180deg) translateY(-100%);
        margin-bottom: 1px;
    }
    
    .teacher-box {
        color: var(--cream); 
        padding: 0 5vw;
    }

    .btn-container {
        padding: 0.5rem;
        margin-right: 5vw;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-weight: 700; 
        font-family: 'Atkinson Hyperlegible Mono', monospace;
        margin-bottom: 0.5rem;
        font-size: clamp(1.25rem, 2vw, 3rem);
    }

    .btn-light { border-color: var(--dark); background: var(--cream); color: var(--dark); }
    .btn-med { border-color: var(--dark); background: color-mix(in srgb, var(--cream), var(--dark) 10%); color: var(--dark);}
    .btn-dark { border-color: var(--cream); background: color-mix(in srgb, var(--cream), var(--dark) 90%); color: var(--cream); }

    .guide-wrapper {
        width: var(--base-w);
        min-height: var(--base-h);
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .guide-wrapper > .info-ground {
        position: absolute;
        top: 0;
        transform-origin: center;
        transform: rotate(180deg) translateY(5px) !important;
    }

    .guide-content {
        margin-top: 10vw;
    }
    .star {
        position: absolute;
        width: 15vw; 
        height: auto;
        z-index: 10;
    }

    .star-right { 
        left: 80vw;
        top: calc(0.1*var(--base-h));
    }

    .star-left { 
        left: 5vw;
        bottom: calc(0.125*var(--base-h));
    }

    .guide-title {
        text-align: center; 
        color: var(--dark); 
        font-size: clamp(2.5rem, 8vw, calc(125 * 100vw / 16 * 9 / 1024));
        line-height: 0.8;
    }

    .gallery-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .gallery-container > div {
        display: flex;
        align-items: center;
        gap: 1vw;
    }

    .gallery-container > :last-child {
        transform: translateY(-25%);
    }

    .gallery-container img {
        width: calc(35vw);
        height: auto;
        border: 3px var(--dark) solid;
    }

    .gallery-container button {
        width: fit-content;
    }

    .questions-wrapper {
        width: var(--base-w);
        min-height: var(--base-h);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
    }

    .questions-wrapper p {
        margin: 0.25rem 0;
    }

    .questions-decor {
        width: 100%;
        height: auto;
    }

    .questions-content {
        margin: 5vw;
    }

    .questions-title { 
        font-size: clamp(2.5rem, 8vw, calc(125 * 100vw / 16 * 9 / 1024));
        color: var(--dark); 
    }
    
    .questions-header {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .questions-divider {
        width: 100%;
        height: 3px;
        background-color: var(--dark);
    }

    .questions-icon {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid var(--dark);
    }

    .question-text {
        color: var(--dark); 
        padding: 0.2rem;
    }

    .question-asset {
        position: absolute;
        width: 10vw; 
        height: auto; 
        left: 85vw; 
        transform: translateY(-50%);
        z-index: 10;
    }

    footer {
        width: 100vw;
        background: var(--dark);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 2rem;
    }

    footer h2 {
        text-align: center; color: 
        var(--cream); 
        font-size: clamp(1.8rem, 3vw, 4.8rem);
    }

    footer p {
        text-align: center; 
        color: var(--cream); 
        font-size: clamp(1.2rem, 2vw, 3.2rem);
    }

    @media (max-width: 600px) {
        :root {
            --base-h: auto;
        }
        :global(html) {
            font-size: 62.5%;
            /* also looks p good at 75% */
        }
        .qualify-wrapper {
            flex-direction: column;
        }
        .student-box {
            background-color: transparent;
            color: var(--cream);
        }
        .student-box svg path {
            fill: var(--dark);
        }
        .student-box .bottom, .student-box .right {
            opacity: 0%;
        }

    }
</style>
