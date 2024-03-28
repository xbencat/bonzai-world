export default defineAppConfig({
  ui: {
    primary: 'violet',
    gray: 'zinc',
    tooltip: {
      background: '!bg-background',
    },
    variables: {
      dark: {
        background: 'var(--color-gray-900)',
      },
      header: {
        height: '4rem',
      },
    },
    icons: {
      dark: 'i-ph-moon-duotone',
      light: 'i-ph-sun-duotone',
      search: 'i-ph-magnifying-glass-duotone',
      external: 'i-ph-arrow-up-right',
      chevron: 'i-ph-caret-down',
      hash: 'i-ph-hash-duotone',
    },
    header: {
      wrapper: 'lg:mb-0 lg:border-0',
      popover: {
        links: {
          active: 'dark:bg-gray-950/50',
          inactive: 'dark:hover:bg-gray-950/50',
        },
      },
    },
  },
})
