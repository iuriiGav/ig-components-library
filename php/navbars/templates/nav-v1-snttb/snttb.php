    <!-- NAV NAME: Simple Navbar Top to Bottom : snttb -->

    <input class="ig-snttb-navbar-toggler__trigger" id="ig-snttb-nav-toggler" type="checkbox" data-js-trigger='snttb-navbar-toggler-checkbox' />

    <label class="ig-snttb-navbar-toggler" for="ig-snttb-nav-toggler" tabindex="0" data-js-trigger="snttb-navbar-toggler">
        <span></span>
        <span></span>
        <span></span>
    </label>


    <nav class="ig-snttb-nav__container" data-js-trigger='snttb-navbar-container'>
    <h1 class="ig-snttb-nav-logo__text" tabindex="0">
            <a href="#">Simple Menu</a>
        </h1>
    <?php
            wp_nav_menu(array(
                'theme_location' => 'main-menu',
                'container' => false,
                'menu_class' => '',
                'fallback_cb' => '__return_false',
                'items_wrap' => '<ul id="%1$s" class="ig-snttb-nav__list %2$s">%3$s</ul>',
                'depth' => 2,
                'walker' => new snttb_walker_walker()
            ));
            ?>
    </nav>