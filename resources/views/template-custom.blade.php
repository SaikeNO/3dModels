{{-- Template Name: Custom Template --}}

@extends('layouts.app')

@section('content')
    @while (have_posts()) @php(the_post())
        @include('components.page-header')
        @include('components.content-page')
    @endwhile
@endsection
