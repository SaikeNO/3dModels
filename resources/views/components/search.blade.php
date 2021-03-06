<form role="search" method="get" class="c-search-form" action="{{ home_url('/') }}">
    <label>
        <span class="sr-only">
            {{ _x('Search for:', 'label', 'sage') }}
        </span>

        <input type="search" placeholder="{!! esc_attr_x('Search &hellip;', 'placeholder', 'sage') !!}" value="{{ get_search_query() }}" name="s">
    </label>

    <input type="submit" value="{{ esc_attr_x('Search', 'submit button', 'sage') }}">
</form>
