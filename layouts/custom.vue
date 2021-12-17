<template>
  <div>
    <slot name="header">
      <div>Custom Header</div>
    </slot>

    <slot />
    <slot name="footer">
      <div>Custom Footer</div>
    </slot>
  </div>
</template>
