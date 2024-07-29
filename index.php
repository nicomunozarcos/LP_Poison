<?php get_header(); ?>
<main>
    <section class="hero">
        <div class="logo-container">
            <img src="<?php echo get_template_directory_uri(); ?>/imgs/poison.png" alt="Logo" class="logo">
        </div>
        <div class="hero-text">
            <h1 class="buy-poison">Buy poison.</h1>
            <h1 class="trust-us">Trust us.</h1>
            <p>Your children are safe, why would a company lie to you? We are your friends pal. Buy poison today and we grant you total transparency and full refunds* if you are not satisfied with our service. We care about you ❤️</p>
            <button id="cta-button">
                DRINK NOW!
                <div class="rect-top-left"></div>
                <div class="rect-bottom-right"></div>
            </button>
        </div>
        <div class="hero-image">
            <img src="<?php echo get_template_directory_uri(); ?>/imgs/9ff704d6215b1a7e5db91d11860e06d1.png" alt="Imagen Hero">
        </div>
        <div class="icon-container">
            <div class="outer-oval">
                <div class="inner-line"></div>
            </div>
            <div class="diamond"></div>
        </div>
        <p class="disclaimer-text">*We keep the right to deny any refunds on our own terms. Total responsibility is up to the final user buying poison.</p>
    </section>

    <section class="section-2">
        <div class="background-rectangle">
            <div class="diagonal-lines"></div>
        </div>
        <div class="text-box-container">
            <div class="text-box-03-05">03 - 05</div>
        </div>
        <h2 class="cruelty-free">Cruelty free</h2>
        <h2 class="development">Development</h2>
        <h8 class="except-text">Except for the human subjects...</h8>
        <div class="content-container">
            <div class="text-container">
                <h5 class="cute-puppy">Look, a cute puppy</h5>
                <p class="puppy-text">Here on POISON we know that cute small animals go viral and get the youth’s attention. Take a good look at the dog here and think carefully if you empathize with this company. We are so cool and quirky hehe uwu. Go right now to that form and buy the damn poison already. We are running out of ideas to trick you people into buying our product.</p>
            </div>
            <div class="image-container">
                <img src="<?php echo get_template_directory_uri(); ?>/imgs/bcab01eb408ab75ac8f4cfeaf0b5f7b3.jpg" alt="Cute Puppy">
            </div>
            <div class="background-square"></div>
        </div>
    </section>

    <section class="section-3">
        <div class="text-container">
            <div class="background-rectangle">
                <div class="diagonal-lines"></div>
            </div>
            <div class="text-box-02-05">02 - 05</div>
            <div class="our">Our</div>
            <div class="flavours">Flavours</div>
        </div>
        <div class="card-columns" id="card-columns"></div>
        <button id="load-more-button">Load More</button>
    </section>
</main>

<?php get_footer(); ?>
