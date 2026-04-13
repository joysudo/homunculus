<script lang="ts">
    import type { PageProps } from './$types';
    import { enhance } from '$app/forms';
    let { form }: PageProps = $props();
    let rsvpForm: HTMLFormElement | undefined = $state();
    let submitting = $state(false) // for graying out the submit button immediately onenter/press

    import { onMount } from 'svelte';
    const heroImages = [
        { src: "https://picsum.photos/1600/900", alt: "", x: 995, y: 780, z: -0.5 },
        { src: "https://picsum.photos/1600/901", alt: "", x: 850, y: 210, z: -0.4 },
        { src: "https://picsum.photos/1600/902", alt: "", x: 465, y: 230, z: -0.7 },
        { src: "https://picsum.photos/1600/903", alt: "", x: 1175, y: 305, z: -0.3 },
        { src: "https://picsum.photos/1600/904", alt: "", x: 255, y: 460, z: -0.5 },
        { src: "https://picsum.photos/1600/905", alt: "", x: 1200, y: 550, z: -0.6 },
        { src: "https://picsum.photos/1600/906", alt: "", x: 320, y: 710, z: -0.5 },
        { src: "https://picsum.photos/1600/907", alt: "", x: 660, y: 800, z: -0.3 }
    ];

    const faqs = [
        {
            question: "What kind of projects can I make?",
            answer: "You can build any endless game with a limited moveset. That means the player is restricted to only a few actions (ex: jumping or running, or moving left or right). Pong, Breakout, Dino Runner, and Space Invaders are all great examples!"
        },
        {
            question: "How do teachers use this in class?",
            answer: "Teachers can run Homunculus as a 2-week unit, complete with structured lessons, activities, and project milestones."
        },
        {
            question: "Is this aligned with school standards?",
            answer: "Yes. Homunculus is designed to support emerging AI literacy and computer science standards being adopted across states."
        },
        {
            question: "Do I need special software?",
            answer: "No. projects are built using accessible tools like Pygame or p5.js, which are free and widely used."
        }
    ];

    let faqIndex = $state<number | null>(null);
    function toggle(i: number) {
        if (faqIndex === i) faqIndex = null; else faqIndex = i;
    }

    interface Confetto {
        id: number;
        left: string;
        color: string;
        delay: string;
        duration: string;
        path: string;
        scale: string;
    }
    let confetti = $state<Confetto[]>([]);
    const confettiTypes = [
        /* yellow star */ {color: '#EECF52', shape: "path('M5,0.5 Q5.8,3.5 8.5,3.5 Q6.5,5 7.5,8 Q5,6.5 2.5,8 Q3.5,5 1.5,3.5 Q4.2,3.5 5,0.5 Z')"},
        /* green leaf */ {color: '#53882A', shape: "path('M1,1 C6,1 9,4 9,9 C4,9 1,6 1,1 Z')"}, 
        /* purple cool wizard hat*/ {color: '#54325A', shape: "path('M5,1.5 Q6,1.5 8.5,6 Q9.5,8 7.5,8 L2.5,8 Q0.5,8 1.5,6 Q4,1.5 5,1.5 Z')"}
    ]
    onMount(() => {
        confetti = Array.from({ length: 30 }).map((_, i) => {
            const confettiType = confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
            return {
                id: i,
                left: `${Math.random() * 100}vw`,
                color: confettiType.color,
                delay: `${Math.random() * 5}s`,
                duration: `${Math.random() * 3 + 4}s`,
                path: confettiType.shape,
                scale: `${Math.random() * 0.5 + 0.5}px`
            };
        });
    });
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
                    transform: translate(-50%, -50%) translateZ({img.z}px) scale({1 - img.z / 2});
                "
            />
        {/each}
        <img class="hero-logo" src="/images/logo.png" alt="" />
        <section class="rsvp-container" class:submitted={form?.success}>
            <img class="rsvp-layer" class:submitted={form?.success} src="/images/form-input.png" alt="" style="filter: brightness(1.1);"/>
            <img class="rsvp-layer" class:submitted2={!form?.success} src="/images/form-input.png" alt=""/>
            {#if form?.success}
                <p class="form-message">Success! You have RSVPed for <b>Homunculus</b>. <br/>We'll be in touch soon.</p>
            {:else}
                <form class="rsvp-form" bind:this={rsvpForm} method="POST" use:enhance={() => { submitting = true; }} >
                    <input type="email" name="email" placeholder="Enter your email" required />
                </form>
                {#if form?.message}
                    <p class="form-message error">{form.message}</p>
                {/if}
            {/if}
            <img class="rsvp-layer rsvp-button" class:submitting={submitting} class:submitted={form?.success} src="/images/form-button.png" alt=""/>
            <svg class="rsvp-svg" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <path d="M1126 972L1131 909.5L1238.5 915L1240.5 939L1258 972L1255 996L1186 1008.5L1131 1023.5L1126 972Z" class="hitbox" role="button" tabindex="0" aria-label="submit RSVP" onclick={() => {
                    if (rsvpForm?.checkValidity()) {rsvpForm?.requestSubmit();} else {rsvpForm?.reportValidity();}
                }} />
            </svg>
        </section>
    </div>
    <div class="info-wrapper">
        {#each confetti as confetto (confetto.id) }
            <div 
                class="confetti"
                style:left={confetto.left}
                style:background-color={confetto.color}
                style:animation-delay={confetto.delay}
                style:animation-duration={confetto.duration}
                style:width="10px"
                style:height="10px"
                style:transform="scale({confetto.scale})"
                style:clip-path={confetto.path}
            ></div>
        {/each}
        <div></div>
        <div>
            <h2 class="info-title">WHAT IS HOMUNCULUS?</h2>
            <p class="info-body">Build an endless game, train an AI to play it, and get a device to play endless games. Along the way, earn a certificate recognized by technical giants.<br/>For teens 13-18 around the world. Homunculus is an initiative by <a href="https://hackclub.org">Hack Club</a>, a charity aimed at getting teens to code.</p>
        </div>
        <div class="info-visual">
            <img class="info-homunculus" src="/images/homunculus-leaf.png" alt="" />
            <svg class="info-ground" viewBox="0 0 1440 71" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%; height: auto;">
                <path d="M1108.19 0L1440 45.71L1438.12 71H0V0L144.699 45.71L480.499 18.88L831.268 45.71L1108.19 0Z" fill="var(--dark)"/>
            </svg>
        </div>
        <svg class="info-ground info-background" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="var(--dark)" opacity="50%">
            <path d="M0 320H1440V0L1168 109.5L849.5 42L533 131.5L115 0L0 73.5V320Z" fill="color-mix(in srgb, var(--cream), var(--dark) 50%)"/>
        </svg>
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
            <p>If you're a teenager (13-18) anywhere in the world, you qualify for Homunculus.</p>
            <ul style="margin: 0;">
                <li><p style="margin: 0;">Verify your identity through <a href="https://auth.hackclub.com/">Hack Club Auth</a>. This helps us prove that you're a teenager!</p></li>
                <li><p style="margin: 0;">Create an endless game using P5.js or Pygame with a <b>limited moveset</b></p></li>
            </ul>
            <p>Projects with 8+ hours of work will qualify you for submission to the Homunculus certification. Projects with 14+ hours of work will earn you a device to play endless games on.</p>
            <button class="btn-container btn-light">Submit completed →</button>
            <button class="btn-container btn-med">Get help →</button>
        </div>
        <div class="teacher-box">
            <h3>As a teacher</h3>
            <p>Homunculus is designed to fit directly into classrooms. Get your students to complete Homunculus, and we'll ship you donuts, swag, and more!</p>
            <ul style="margin: 0;">
                <li><p style="margin: 0;">The Homunculus curriculum is available as a unit you can integrate into your class</p></li>
                <li><p style="margin: 0;">You’ll get access to a free platform with lesson plans, slides, demos, and tracking tools</p></li>
            </ul>
            <p>You can be eligible for Homunculus materials in two ways:</p>
            <ul>
                <li><p style="margin: 0;">Be part of a qualifying <b>partner school/district</b></p></li>
                <li><p style="margin: 0;">Fill out the <b>form below</b> and wait for a response</p></li>
            </ul>
            <button class="btn-container btn-dark">Submit form →</button>
        </div>
    </div>
    <div class="guide-wrapper">
        <svg class="info-ground" viewBox="0 0 1440 71" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width: 100%; height: auto; transform: rotate(180deg);">
            <path d="M1108.19 0L1440 45.71L1438.12 71H0V0L144.699 45.71L480.499 18.88L831.268 45.71L1108.19 0Z" fill="var(--dark)"/>
        </svg>
        <img class="star star-right" src="/images/star-right.png" alt="" />
        <img class="star star-left" src="/images/star-left.png" alt="" />
        <div class="guide-content">
            <h2 class="guide-title">SEE THE GUIDE<br/>+ PRIZES</h2>
            <div class="gallery-container">
                <div>
                    <img src="/images/prizes(1).png" alt="" />
                    <img src="/images/Untitled drawing(4).png" alt="" />
                </div>
                <div>
                    <img src="/images/prizes.png" alt="" />
                    <button class="btn-container btn-med">Read our<br/>guides →</button>
                </div>
            </div>
        </div>
    </div>
    <div class="questions-wrapper">
        <img class="questions-decor" src="/images/divider.png" alt="" />
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
            <img class="question-asset" src="/images/homunculus-wizard.png" alt="" />
            <footer>
                <h2 class="footer-title">MADE BY JOY SU</h2>
                <p class="footer-sub">for <a href="https://hackclub.org">Hack Club</a></p>
            </footer>
        </div>
    </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Mono:ital,wght@0,200..800;1,200..800&display=swap');
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
        /* height: calc(5 * 100vw / 16 * 9); */
        height: 100vh;
        overflow: hidden;
    }

    .main-container {
        width: 100vw;
        height: 100vh;
        /* height: calc(5 * 100vw / 16 * 9); */
        position: relative;
        background: var(--cream);
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        perspective: 2px;
        perspective-origin: center;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .main-container > * {
        margin: 0;
    }

    @font-face {
        font-family: 'Peich';
        src: url('/fonts/Peich-Regular.otf') format('opentype');
    }

    h2 {
        font-family: 'Peich', serif;
        /* font-weight: 400; */
        line-height: 1;
        /* font-size: clamp(2.5rem, 8vw, calc(125 * vw / 16 * 9 / 1024)); */
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

    .hero-example, .confetti, .info-background {
        will-change: transform;
    }

    .hero-example,
    .hero-logo,
    .info-background,
    .confetti {
        pointer-events: none;
    }

    .hero-wrapper {
        width: 100vw;
        aspect-ratio: 16/9;
        height: calc(100vw * 9 / 16) !important;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
        transform-style: preserve-3d;
    }

    .hero-example {
        width: 25vw;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        height: auto; 
        position: absolute;
        z-index: -1;
    }

    .hero-logo { 
        width: 50vw;
        height: auto;
        z-index: 9;
        transform: translateZ(0px);
    }

    .info-wrapper {
        width: 100vw;
        min-height: var(--base-h) !important;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        transform-style: preserve-3d;
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
        filter: drop-shadow(0 0 3px var(--cream));
        z-index: 40;
    }

    .info-body {
        text-align: center; 
        color: var(--dark); 
        margin: 1rem 20vw;
        filter: drop-shadow(0 0 3px var(--cream)) drop-shadow(0 0 4px var(--cream)) drop-shadow(0 0 6px var(--cream));
        z-index: 40;
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

    .info-background {
        width: 100%; 
        height: auto; 
        position: absolute; 
        bottom: 0; 
        z-index: -1; 
        transform: translateZ(-0.5px) scale(1.5);
    }

    .confetti {
        position: absolute;
        top: -20px;
        border-radius: 5px;
        opacity: 0;
        animation: fall linear infinite;
    }

    @keyframes fall {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 0.7;
        }
        100% {
            opacity: 1;
            transform: translateY(calc(100vw * 9 / 16)) rotate(720deg);
        }
    }

    .qualify-wrapper { 
        width: 100vw; 
        /* min-height: var(--base-h);  */
        padding: 2vw 0;
        height: auto !important;
        background: var(--dark); 
        display: flex;
        align-items: center;
        position: relative;
        flex-grow: 1;
    }

    .qualify-title {
        /* font-size: clamp(2.0rem, 6vw, 5.2rem);  */
        font-size: clamp(1.8rem, 4vw, 3.9rem);
    } 

    .qualify-wrapper p {
        font-size: clamp(1.25rem, 1.5vw, 2.25rem);
    }

    .student-box {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        background-color: var(--cream);
        color: var(--dark);
        min-height: 80%;
        height: fit-content;
        padding-left: 5vw;
        padding-right: 1vw;
        background: color-mix(in srgb, var(--cream), var(--dark) 45%);
        z-index: 1;
    }

    .student-box::before {
        content: "";
        position: absolute;
        inset: 2vw; 
        --cut: 3vw;
        background: color-mix(in srgb, var(--cream), var(--dark) 20%);
            clip-path: polygon(
            var(--cut) 0, calc(100% - var(--cut)) 0, 
            100% var(--cut), 100% calc(100% - var(--cut)), 
            calc(100% - var(--cut)) 100%, var(--cut) 100%, 
            0 calc(100% - var(--cut)), 0 var(--cut)
        );
        z-index: -1; 
    }

    .svg-border {
        position: absolute;
        width: 100%;
        height: auto;
        opacity: 25%;
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
        transform: rotate(90deg) translateY(-99%);
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
        flex: 1;
        flex-grow: 1;
        height: auto;
    }

    .btn-container {
        position: relative;
        padding: 0.5rem 1rem;
        margin-right: 5vw;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        border: none;
        font-weight: 700; 
        font-family: 'Atkinson Hyperlegible Mono', monospace;
        margin-bottom: 0.5rem;
        font-size: clamp(1.25rem, 2vw, 3rem);
        transition: transform 0.1s ease, box-shadow 0.1s ease, filter 0.1s ease;
        --cut: 15px;
        clip-path: polygon(
            var(--cut) 0, calc(100% - var(--cut)) 0, 
            100% var(--cut), 100% calc(100% - var(--cut)), 
            calc(100% - var(--cut)) 100%, var(--cut) 100%, 
            0 calc(100% - var(--cut)), 0 var(--cut)
        );
    }

    .btn-container:hover {
        transform: translate(-2px, -2px);
        box-shadow: 2px 2px 0 color-mix(in srgb, var(--cream), var(--dark) 50%);
    }
    .btn-container:active{
        transform: translate(0, 0);
        box-shadow: none;
        filter: brightness(0.9);
    }

    .btn-light, .btn-med { background: var(--dark);  color: var(--dark); }
    .btn-light::after { position: absolute; content: ""; background: var(--cream); inset: 3px; clip-path: inherit; z-index: -1; }
    .btn-med::after { position: absolute; content: ""; background: color-mix(in srgb, var(--cream), var(--dark) 10%); inset: 3px; clip-path: inherit; z-index: -1; }
    .btn-dark { background: var(--cream); color: var(--cream); }
    .btn-dark::after { position: absolute; content: ""; background: color-mix(in srgb, var(--cream), var(--dark) 80%); inset: 3px; clip-path: inherit; z-index: -1; }

    .guide-wrapper {
        width: var(--base-w);
        min-height: var(--base-h) !important;
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

    .guide-wrapper button {
        width: fit-content;
        padding: 1.25vw;
    }

    .questions-wrapper {
        width: var(--base-w);
        min-height: var(--base-h) !important;
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
        width: 90vw !important;
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

    .rsvp-container {
        position: absolute !important;
        transform: translateY(-20%) translateZ(0.1px) scale(0.95);
        z-index: 200;
        width: min(100vw, 177.78vh);
        height: min(56.25vw, 100vh);
        pointer-events: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .rsvp-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        object-fit: contain;
        pointer-events: none;
        transition: transform 0.3s ease, filter 0.3s ease;
    }

    .rsvp-layer.submitted {
        transform: translateY(-10rem);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.6s ease, opacity 0.6s ease;
    }

    .rsvp-layer.submitted2 {
        transform: translateY(12rem);
        opacity: 0;
        pointer-events: none;
        transition: transform 1s ease, opacity 1s ease;
    }

    .rsvp-layer:hovered {
        transform: translate(-5px, -5px);
        filter: brightness(1.3) drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.3));
    }

    .rsvp-svg {
        z-index: 200;
        pointer-events: none;
    }

    .hitbox {
        pointer-events: auto !important;
        cursor: pointer;
        fill: white;
        opacity: 0;
    }

    .rsvp-form {
        position: absolute;
        width: calc(400/1920*100%);
        height: calc(100/1080*100%);
        left: calc(725/1920*100%);
        top: calc(915/1080*100%);
        z-index: 100;
    }

    .rsvp-form input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        font-family: 'Atkinson Hyperlegible Mono', monospace;
        font-size: 1.5vw;
        font-style: italic;
    }

    .rsvp-button {
        position: absolute;
        pointer-events: auto;
        cursor: pointer;
    }
    
    .rsvp-container:not(.submitted):has(.hitbox:hover) .rsvp-button {
        filter: brightness(0.9);
    }

    .rsvp-container:not(.submitted):has(.hitbox:active) .rsvp-button {
        filter: brightness(0.7);
    }

    .rsvp-button.submitting {
        filter: grayscale(0.5);
        pointer-events: none;
    }

    .form-message {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 25%);
        top: calc(915/1080*100%);
        z-index: 10;
        text-align: center;
        font-size: 1.5vw !important;
        color: color-mix(in srgb, var(--dark), transparent 30%);
        font-style: italic;
    }
    
    .form-message.error {
        bottom: calc(915/1080*100%) !important;
    }

    @media (max-width: 600px) {
        :root {
            --base-h: auto;
        }
        :global(html) {
            font-size: 62.5%;
            /* also looks p good at 75% */
        }
        .main-container {
            perspective-origin: top center;
        }
        .info-background {
            transform: translateZ(-0.5px) scale(1.5) translateY(50%);
        }
        .qualify-wrapper {
            flex-direction: column;
        }
        .student-box, .teacher-box {
            height: auto;
            min-height: 0;
        }
        .student-box {
            background-color: transparent;
            color: var(--cream);
            opacity: 100%;
        }
        .student-box::before {
            display: none;
        }
        .student-box svg path {
            fill: var(--dark);
            opacity: 100%;
        }
        .student-box .bottom, .student-box .right {
            opacity: 0%;
        }
        .btn-container {
            padding: 1rem 2rem;
        }
        .guide-content .btn-container {
            padding: 1.5rem;
        }
    }
</style>
