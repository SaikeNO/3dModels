  @include('partials.header')

  <main id="main">
      @yield('content')
  </main>

  @hasSection('sidebar')
      <aside class="sidebar">
          @yield('sidebar')
      </aside>
  @endif

  @include('partials.footer')
