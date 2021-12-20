@extends('layouts.app')

@section('content')
    @while (have_posts()) @php(the_post())
        @includeFirst(['components.content-single-' . get_post_type(), 'components.content-single'])
    @endwhile
@endsection
