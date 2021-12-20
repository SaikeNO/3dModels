<header class="l-header">
    <div class="l-header__inner l-inner">


        <a class="ui-link" href="{{ home_url('/') }}">
            {{ $siteName }}
        </a>

        {{-- If you want use custom navigation use that include below --}}
        {{-- @include('components.custom-menu') --}}
        @if (has_nav_menu('primary_navigation'))
            <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
                {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
            </nav>
        @endif
    </div>
</header>
