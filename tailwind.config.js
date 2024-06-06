/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'coffee' : {
          50: '#e8d6d0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838'
        }
      },
      fontFamily: {
        'Karla': ['Karla', 'sans-serif']
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }, 
        },
        fadeIn: {
          from: {opacity: 0},
          to: {opacity: 1}
        }
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        fadeIn: 'fadeIn .5s'
      },
      backgroundImage: {
        // vốn đứng ở file tailwindcss ko cần url phải ./img/...blabla..., nhưng vì dùng custom này trong 
        // file index.html nên cần đường dẫn như vậy
        'slider-img': 'url("./img/slider-image.jpg")' // ở ngoài là nháy đơn rồi thì ở trong phải là nháy đôi
      },
      screens: {
        'magazine-sm-sc': '1023px',
        'magazine-sm': '374px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

