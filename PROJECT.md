# Adding a project

### Assets

- Add the satellite icon at `assets/icons/newproject.webp`.
- Add the background image at `assets/backgrounds/newproject.webp`.

### index.html

- Add a prefetch link in the `<head>` next to the others:
  ```html
  <link rel="prefetch" href="assets/backgrounds/newproject.webp" as="image">
  ```

- Add a satellite button inside `.orbit.one` or `.orbit.two`. The `id` must match the project name exactly:
  ```html
  <button id="newproject" class="satellite two newproject"></button>
  ```

- Add an info panel inside `#project-container`:
  ```html
  <div id="newproject-info" class="projects hidden">
      <div class="title">New Project</div>
      <div class="timeline">Month Year - Month Year</div>
      <div class="content">
          <div>Description...</div>
          <div>
              Visit the website at <a href="https://..." target="_blank" class="link newproject">...</a>
          </div>
          <div class="icons">...</div>
      </div>
      <div class="details">Built with ...</div>
  </div>
  ```
  The link button and `.icons` row are optional.

### style.css

- Add a color variable in `:root`:
  ```css
  --newproject-glow: rgb(...);
  ```

- Add the orbit color used on hover and while the project is open:
  ```css
  .visual-orbit.newproject {
    border: 10px solid var(--newproject-glow);
    --glow: var(--newproject-glow);
  }
  ```

- Add the satellite style. If the icon doesn't fill the circle, also set `background-color`, `background-size`, `background-repeat` and `background-position`.
  ```css
  .satellite.two.newproject {
    animation-delay: -20s;
    background-image: url('assets/icons/newproject.webp');
  }
  ```

- **Re-space the satellites on that orbit.** One trip around an orbit takes 60s, and `animation-delay` sets where each satellite starts. In general, use multiples of 60s divided by the number of satellites on that orbit.

- Add the background:
  ```css
  .project-background.newproject {
    background: url('assets/backgrounds/newproject.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
  }
  ```
  Adjust `opacity` until the text is easy to read.

- If the panel has a link button, add its color:
  ```css
  .content .link.newproject {
    background-color: var(--newproject-glow);
    box-shadow: 0 0 8px 1px var(--newproject-glow);
  }
  ```

- In the `@media (pointer: coarse)` block, add `.visual-orbit.newproject` to the `box-shadow: none` list, and `.content .link.newproject` if there's a link button.
