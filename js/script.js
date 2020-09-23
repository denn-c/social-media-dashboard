const $dark = document.getElementById('dark')
const root = document.documentElement.style;

const lightTheme = {
  '--bg-body': 'hsl(0, 0%, 100%)',
  '--bg-card': 'hsl(227, 47%, 96%)',
  '--bg-border': 'hsl(230, 8%, 57%)',
  '--bg-hover': 'hsl(232, 33%, 91%)',
  '--cl-blue': 'hsl(228, 12%, 44%)',
  '--cl-White': 'hsl(230, 17%, 14%)'
};

const darkTheme = {
  '--bg-body': 'hsl(230, 17%, 14%)',
  '--bg-card': 'hsl(228, 28%, 20%)',
  '--bg-border': 'hsl(232, 17%, 25%)',
  '--bg-hover': 'hsl(228, 25%, 27%)',
  '--cl-blue': 'hsl(228, 34%, 66%)',
  '--cl-White': 'hsl(0, 0%, 100%)'
};

const changeTheme = theme => {
  const customStyles = Object.keys(theme);
  for (const style of customStyles) {
    root.setProperty(style, theme[style]);
  }
};

const memoryTheme = JSON.parse(localStorage.getItem('themes'));
const setTheme = () => $dark.checked = eval(localStorage.getItem($dark.id));

$dark.addEventListener('change', e => {
  if (e.target.checked) {
    changeTheme(lightTheme)
    localStorage.setItem('themes', JSON.stringify(lightTheme));
  } else {
    changeTheme(darkTheme)
    localStorage.setItem('themes', JSON.stringify(darkTheme));
  }
  localStorage.setItem(e.target.id, e.target.checked)
});

if (memoryTheme === null) {
} else {
  changeTheme(memoryTheme)
  setTheme();
}