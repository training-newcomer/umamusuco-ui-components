module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    position: ["after"],
    transform: ["after"],
    translate: ["after"],
    inset: ["after"],
    backgroundImage: ["after"],
    gradientColorStops: ["after"],
  },
  plugins: [],
};
