/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}','./index.html'],
  theme: {
    extend: {
      colors: {
        main: '#EDDFE0',
        sec: '#F5F5F7',
        third: '#B7B7B7',
        fourth: '#705C53',
        darkShade: '#C6B2B5',
        accent: '#ec9197',
        complement: '#A5C9D8',
      },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.wishlist-container': {
          '@apply min-h-[80vh] border-t-8 border-b-8 border-main mb-2 bg-sec pb-5': {},
        },
        '.header-container': {
          '@apply p-10 rounded-b-md border-b-4 border-fourth text-fourth font-extrabold': {},
        },
        '.wish-items-container': {
          '@apply p-5 flex flex-col': {},
        },
        '.item-on-wish-container': {
          '@apply flex items-center': {},
        },
        '.image-item-on-wish-container': {
          '@apply flex-1 pb-5 min-h-[250px] mt-2 w-2/5 flex items-center justify-center border-r-2 border-b-2 border-complement shadow-[4px_4px_8px_#A5C9D8,-4px_-4px_8px_#F5F5F7] transition duration-300 ease-in-out hover:scale-105': {},
        },
        '.image-info-on-wish-container': {
          '@apply ml-5 font-medium text-sec flex-[1.5]': {},
        },
        '.wish-item-container': {
          '@apply pb-5': {},
        },
        '.remove-wish-btn': {
          '@apply bg-main w-[150px] h-[50px] mt-5 flex justify-center items-center shadow-[4px_4px_8px_#ec9197,-4px_-4px_8px_#F5F5F7] cursor-pointer hover:shadow-[4px_4px_8px_#ec9197_inset,-4px_-4px_8px_#F5F5F7_inset]': {},
        },
        '.no-wish-container': {
          '@apply w-full h-full flex flex-col justify-center items-center text-accent': {},
        },
        '.no-wish-container-2nd-child': {
          '@apply shadow-[4px_4px_8px_#ec9197,-4px_-4px_8px_#F5F5F7] cursor-pointer mt-2 bg-main w-[100px] p-1.5 h-[30px] flex justify-center items-center text-fourth brightness-100 no-underline hover:shadow-[4px_4px_8px_#ec9197_inset,-4px_-4px_8px_#F5F5F7_inset]': {},
        },
      });
    },
  ],
},
}

