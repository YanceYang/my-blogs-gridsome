<template>
  <div class="layout">
    <!-- 头部内容 -->
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <g-link to="/" class="nav__link home-link active--exact">
            <img
              :src="require('~/assets/img/logo.svg')"
              alt="Nichlas W. Andersen"
              class="logo"
            />
          </g-link>
        </div>
        <nav class="nav right">
          <g-link to="/journal" class="nav__link">Journal</g-link>
          <g-link to="/contact" class="nav__link">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <!-- 业务内容 -->
    <slot />
    <!-- 底部内容 -->
    <footer class="footer">
      <div class="container"><span>Copyright © 2021</span></div>
    </footer>
  </div>
</template>
