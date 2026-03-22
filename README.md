# "Icon set lab" for aegis-icons

Helps for finding design inconsistencies and other issues in all the icons.

## Features

- Filter the icons by name.
- Jump between categories.
- Calculates how many icons are in the lab.
- Display the icon grid for seeing logo size irregularities.
- Change the background color (a.k.a. theme color) for seeing icon BG contrast irregularities.
  - Features theme colors used in [Aegis](https://github.com/beemdevelopment/Aegis).
- Change the size of the listed icons.
- Uses [CSS scroll snapping](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)
  - Has option to disable it, see the [notes / caveats](#notes--caveats) section.
- Works 100% only with keyboard too, if needed.
  - Every function has keyboard command (see the blue squares).

## Demonstration

> [!CAUTION]
> **Rapidly flashing colors in the video from 00:01 to 00:06.**

https://user-images.githubusercontent.com/3540275/211911546-55439249-4f6d-4d3c-8f43-7e481fb21659.mp4

## Setting up the lab

### Getting the icons from *aegis-icons* to the lab

1. Clone / fork **this project** or [download repo as ZIP](https://github.com/aegis-icons/icon-set-lab/archive/refs/heads/main.zip).
2. Clone / fork [aegis-icons](https://github.com/aegis-icons/aegis-icons) project or [download it as ZIP](https://github.com/aegis-icons/aegis-icons/archive/refs/heads/master.zip).

> [!NOTE]
> Unzip the ZIP files, if you downloaded the repos as ZIP.

#### Windows

> [!IMPORTANT]
> Both `icon-set-lab` & `aegis-icons` (or `aegis-icons-master`) directories **needs to be side by side in the same root directory.**

- Run the [`1__get_icons.bat`](https://github.com/aegis-icons/icon-set-lab/blob/main/z__bat-scripts/1__get_icons.bat) in the `z__bat-scripts` directory.

#### Linux (with shell)

> [!IMPORTANT]
> Both `icon-set-lab` & `aegis-icons` (or `aegis-icons-master`) directories **needs to be side by side in the same root directory.**

1. Go to `z__sh-scripts` directory on the terminal.
2. Check that `1__get_icons.sh` has execution permission by running:
   ```sh
   chmod +x 1__get_icons.sh
   ```
   <sup><i>(you'll only need do this once).</i></sup>
3. Run the [`1__get_icons.sh file`](https://github.com/aegis-icons/icon-set-lab/blob/main/z__sh-scripts/1__get_icons.sh).

#### Other OSes / manual way

1. Copy-paste `icons` folder from `aegis-icons` dir to `icon-set-lab` root.
2. Copy-paste `z_icon_grid.svg` from `aegis-icons\_templates` dir to `icon-set-lab` root. 

### Launching the local Jekyll server

#### Initial server setup

1. [Install Ruby and Jekyll with guides here](https://jekyllrb.com/docs/installation/#guides).
2. Run `bundle` in the terminal at lab's root directory.

#### Start the server in Windows

- Run [`2__start_jekyll_server.bat` file](https://github.com/aegis-icons/icon-set-lab/blob/main/z__bat-scripts/2__start_jekyll_server.bat).

#### Start the server in Linux (with shell)

1. Go to `z__sh-scripts` directory on the terminal.
2. Check that `2__start_jekyll_server.sh` has execution permission by running:
   ```sh
   chmod +x 2__start_jekyll_server.sh
   ```
   <sup><i>(you'll only need do this once).</i></sup>
3. Run the [`2__start_jekyll_server.sh file`](https://github.com/aegis-icons/icon-set-lab/blob/main/z__sh-scripts/2__start_jekyll_server.sh).

#### Start the server in other OSes / manual way

- Run this in the terminal at lab's root directory:
```
jekyll serve --host localhost --open_url
```

#### Troubleshooting

- If Jekyll won't launch, run `bundle clean --force` in the terminal at lab's root directory, then try launching Jekyll again.

---

The site with http://localhost:4000/ URL should open to your default browser.

## Notes / caveats

- :thumbsup: **The [CSS scroll snapping](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) works best with Firefox.**
  - If you want the rapid scroll like in the demonstration video, disable `Use smooth scrolling` from settings.
- :warning: **Chromium-based browsers has issues with CSS scroll snap!** (As of January 2023.)
  - Holding (page) up / (page) down / space key makes scroll sluggish and barely move.
  - :bulb: **Solutions:** 
    - Disable scroll snap from lab's sidebar on the right.
    - Only scroll with mouse scroll wheel or scroll bar's up / down buttons.
    - [Disable smooth scroll](https://www.tenforums.com/tutorials/112915-enable-disable-smooth-scrolling-google-chrome.html) (works in any desktop Chromium-based browser, enables the rapid scroll like in the video)
      - :warning: Makes mouse scroll act weird.
- Site is responsive, but designed only desktop in mind (preferly 1920px+ width window).

## Todos

- [x] Give option to disable CSS scroll snap.
- [ ] _Low priority:_ Migrate from Jekyll to something faster and modern ([Zola](https://www.getzola.org/) possibly).
  - **Issue:** I don't know how to do it, Zola and others seems so much more complicated then Jekyll.

## Credits

- [HotKeys.js](https://wangchujiang.com/hotkeys/) by Kenny Wong ([MIT](https://github.com/jaywcjlove/hotkeys/blob/master/LICENSE)).
- [Inter](https://rsms.me/inter/) by Rasmus Andersson ([SIL OFL 1.1](https://github.com/rsms/inter/blob/master/LICENSE.txt)).
- [List.js](https://listjs.com/) by Jonny Strömberg ([MIT](https://github.com/javve/list.js/blob/master/LICENSE)).
- [sanitize.css](https://github.com/csstools/sanitize.css) by CSS Tools ([CC0 1.0 Universal](https://github.com/csstools/sanitize.css/blob/main/LICENSE.md)).

## License

[The MIT License](LICENSE.md).
