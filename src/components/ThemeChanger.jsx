import React from "react";

function ThemeChanger(props) {
  const { theme, setTheme } = props;
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1 mr-4">
        Theme
        <svg
          width="12px"
          height="12px"
          class="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-1 p-2 shadow-2xl h-40 overflow-scroll scrollbar-thin"
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Light"
            value="light"
            onClick={()=>setTheme('light')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark"
            value="dark"
            onClick={()=>setTheme('dark')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cupcake"
            value="cupcake"
            onClick={()=>setTheme('cupcake')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Bumblebee"
            value="bumblebee"
            onClick={()=>setTheme('bumblebee')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Emerald"
            value="emerald"
            onClick={()=>setTheme('emerald')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Corporate"
            value="corporate"
            onClick={()=>setTheme('corporate')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="synthwave"
            value="synthwave"
            onClick={()=>setTheme('synthwave')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Retro"
            value="retro"
            onClick={()=>setTheme('retro')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cyberpunk"
            value="cyberpunk"
            onClick={()=>setTheme('cyberpunk')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Valentine"
            value="valentine"
            onClick={()=>setTheme('valentine')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Halloween"
            value="halloween"
            onClick={()=>setTheme('halloween')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Garden"
            value="garden"
            onClick={()=>setTheme('garden')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Forest"
            value="forest"
            onClick={()=>setTheme('forest')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Aqua"
            value="aqua"
            onClick={()=>setTheme('aqua')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Lofi"
            value="lofi"
            onClick={()=>setTheme('lofi')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Pastel"
            value="pastel"
            onClick={()=>setTheme('pastel')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Fantasy"
            value="fantasy"
            onClick={()=>setTheme('fantasy')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Wireframe"
            value="wireframe"
            onClick={()=>setTheme('wireframe')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Black"
            value="black"
            onClick={()=>setTheme('black')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Luxury"
            value="luxury"
            onClick={()=>setTheme('luxury')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dracula"
            value="dracula"
            onClick={()=>setTheme('dracula')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cmyk"
            value="cmyk"
            onClick={()=>setTheme('cmyk')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Autumn"
            value="autumn"
            onClick={()=>setTheme('autumn')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Business"
            value="business"
            onClick={()=>setTheme('business')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Acid"
            value="acid"
            onClick={()=>setTheme('acid')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Lemonade"
            value="lemonade"
            onClick={()=>setTheme('lemonade')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Night"
            value="night"
            onClick={()=>setTheme('night')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Coffee"
            value="coffee"
            onClick={()=>setTheme('coffee')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Winter"
            value="winter"
            onClick={()=>setTheme('winter')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dim"
            value="dim"
            onClick={()=>setTheme('dim')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Nord"
            value="nord"
            onClick={()=>setTheme('nord')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="sunset"
            value="sunset"
            onClick={()=>setTheme('sunset')}
          />
        </li>
      </ul>
    </div>
  );
}

export default ThemeChanger;
