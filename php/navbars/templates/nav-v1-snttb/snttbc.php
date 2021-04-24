    <!-- NAV NAME: Simple Navbar Top to Bottom Collapse : snttbcc -->

    <input class="ig-snttbc-navbar-toggler__trigger" id="ig-snttbc-nav-toggler" type="checkbox" data-js-trigger='snttbc-navbar-toggler-checkbox' />

    <label class="ig-snttbc-navbar-toggler" for="ig-snttbc-nav-toggler" tabindex="0" data-js-trigger="snttbc-navbar-toggler">
        <span></span>
        <span></span>
        <span></span>
    </label>
   

    <nav class="ig-snttbc-nav__container" data-js-trigger='snttbc-navbar-container'>
    <h1 class="ig-snttbc-nav-logo__text" tabindex="0">
            <a href="#">Simple Menu</a>
        </h1>
    <?php
            wp_nav_menu(array(
                'theme_location' => 'main-menu',
                'container' => false,
                'menu_class' => '',
                'fallback_cb' => '__return_false',
                'items_wrap' => '<ul id="%1$s" class="ig-snttbc-nav__list %2$s">%3$s</ul>',
                'depth' => 2,
                'walker' => new snttbc_walker()
            ));
            ?>
    </nav>