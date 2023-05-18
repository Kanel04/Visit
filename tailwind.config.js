module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'image': `url(./assets/Mahajanga.png)`,
        'tsingy': `url(./assets/tsiri.jpg)`,
      },
      
    },
    colors:{
primary:'#f8fafc',
secondary:'#e9cb36',
three :"#18181b",
fourth:'#cbd5e1',
five: '#3f3f46',
six:"#d4d4d4",
seven:"#facc15",
height:"#15803d",
nine: "#dc2626"
    },

  },
  plugins: [],
  
  
};