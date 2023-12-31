module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      screens: {
        clg: '1200px',
        cxl: '1350px',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        navigation: 'var(--navigation-text)',
        'item-hover': 'var(--text-item-hover)',
        'link-hover': 'var(--link-text-hover)',
        player: 'var(--player-text)',
        alpha: 'hsla(0, 0%, 100%, .5)',
      },
      colors: {
        'purple-primary': 'var(--purple-primary)',
      },
      spacing: {
        7.5: '1.875rem',
        17: '4.375rem',
        22: '5.5rem',
      },
      scale: {
        85: '.85',
      },
      backgroundColor: {
        loading: 'var(--loading-bg)',
        'tab-active': 'var(--tab-active-bg)',
        layout: 'var(--layout-bg)',
        'progress-active': 'var(--progressbar-active-bg)',
        progress: 'var(--progressbar-player-bg)',
        player: 'var(--player-bg)',
        primary: 'var(--primary-bg)',
        alpha: 'var(--alpha-bg)',
        sidebar: 'var(--sidebar-bg)',
        'sidebar-popup': 'var(--sidebar-popup-bg)',
        blur: 'var(--kara-btn-bg)',
        'box-item': 'var(--box-item-bg)',
        'glass-hover': 'hsla(0,0%,100%,.1)',
        'glass-active': 'hsla(0,0%,100%,.05)',
      },
      backgroundImage: {
        'loading-img':
          'linear-gradient(90deg,transparent,var(--loading-bg-animation),transparent)',
      },
      translate: {
        '65/100': '65%',
      },
      borderColor: {
        primary: 'var(--border-primary)',
        player: 'var(--border-player)',
      },
    },
  },
  plugins: [],
}
