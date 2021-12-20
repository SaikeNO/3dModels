@extends('layouts.app')

@section('content')
    @while (have_posts()) @php(the_post())
        @include('components.page-header')
        @includeFirst(['components.content-page', 'components.content'])
    @endwhile
@endsection
