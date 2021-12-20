<div {{ $attributes->merge(['class' => $type]) }}>
    <div>
        {!! $message ?? $slot !!}
    </div>
</div>
