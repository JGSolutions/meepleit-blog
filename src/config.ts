import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Meepleit | Board Game Blog',
  subtitle:
    'Dedicated to board game play experiences, strategies, and insights, with a focus on game mechanics, solo modes, and thematic experiences.',
  lang: 'en', // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 0, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true, // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/meepleit-board-game-cover.jpg',
    position: 'center', // Equivalent to object-position, defaults center
  },
  favicon: [
    {
      src: '/favicon/favicon.ico', // Path of the favicon, relative to the /public directory
      // theme: 'light', // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      // sizes: '32x32', // (Optional) Size of the favicon, set only if you have favicons of different sizes
    },
  ],
  siteOGImage: {
    enable: true,
    src: '/demo-opengraph.png', // This image should be in the public folder, as its not processed by Astro
  },
  postOGImageDynamic: true,
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/saicaca/fuwari', // Internal links should not include the base path, as it is automatically added
    //   external: true, // Show an external link icon and will open in a new tab
    // },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/jerry-avatar.png',
  name: 'Meepleit',
  bio: 'Meeple your way into discovering board games. Passionate about board games, sharing game play experiences and strategies.',
  links: [
    {
      name: 'Facebook',
      icon: 'fa6-brands:facebook', // Visit https://icones.js.org/ for icon codes
      // You will need to install the corresponding icon set if it's not already included
      // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://www.facebook.com/meepleit',
    },
    {
      name: 'Pinterest',
      icon: 'fa6-brands:pinterest',
      url: 'https://www.pinterest.com/meepleit',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram', // Visit https://icones.js.org/ for icon codes
      // You will need to install the corresponding icon set if it's not already included
      // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://www.instagram.com/meepleit/',
    },
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter', // Visit https://icones.js.org/ for icon codes
      // You will need to install the corresponding icon set if it's not already included
      // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://x.com/meepleit',
    },
    {
      name: 'Meepleit Shop',
      icon: 'fa6-solid:cart-shopping',
      url: 'https://meepleit.com/shop-board-games',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: '',
  url: '',
}
