favouriteMovieGenre("fantasy");
favouriteFruit("regular");
favouriteMode("light");
favouriteEdgeStyle("round");

function setProp(prop, value) {
  document.documentElement.style.setProperty(prop, value);
}

function favouriteEdgeStyle(style) {
  setProp("--image", "var(--" + style + ")");
}

function favouriteMovieGenre(font) {
  if (font) {
    setProp("--font", "var(--" + font + ")");
  }
}

function favouriteMode(mode) {
  if (mode === "light" || !mode) {
    setProp("--background", "var(--light)");
    setProp("--text", "var(--dark)");
  } else if (mode === "dark") {
    setProp("--background", "var(--dark)");
    setProp("--text", "var(--light)");
  }
}

function favouriteFruit(theme) {
  switch (theme) {
    case "pastel":
      setProp("--light", "#f2f6c3");
      setProp("--dark", "#68c4af");
      break;
    case "muted":
      setProp("--light", "#4c5b64");
      setProp("--dark", "#45241c");
      break;
    case "love":
      setProp("--light", "#f06836");
      setProp("--dark", "#ba0001");
      break;
    case "sky":
      setProp("--light", "#99ccff");
      setProp("--dark", "#3366ff");
      break;
    case "forest":
      setProp("--light", "#91B247");
      setProp("--dark", "#597C2B");
      break;
    case "shiny":
      setProp("--light", "#2e9afe");
      setProp("--dark", "#02197c");
      break;
    case "banana":
      setProp("--light", "#fbec5d");
      setProp("--dark", "#6b3e26");
      break;
    case "watermelon":
      setProp("--light", "#75b855");
      setProp("--dark", "#ad3838");
      break;
    case "tomato":
      setProp("--light", "#d62e2e");
      setProp("--dark", "#600000");
      break;
    case "avocado":
      setProp("--light", "#6b8c21");
      setProp("--dark", "#704012");
      break;
    case "orange":
      setProp("--light", "#ffca16");
      setProp("--dark", "#f97300");
      break;
    case "blueberry":
      setProp("--light", "#41a8f9");
      setProp("--dark", "#064490");
      break;
    default:
      setProp("--light", "#f5f5f5");
      setProp("--dark", "#222222");
  }
}
