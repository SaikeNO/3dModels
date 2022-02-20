@php
$file = get_field('file', 'options');
$file2 = get_field('file2', 'options');
@endphp
@extends('layouts.app')

@section('content')
  <script>
    var file = <?php echo json_encode($file); ?>;
    var file2 = <?php echo json_encode($file2); ?>;
  </script>
  <div class="canvas"></div>
@endsection
