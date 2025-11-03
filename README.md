# Speech_To_Text

A simple Speech-to-Text web application built with Vite and React. This project demonstrates using the Web Speech API (via the `react-speech-recognition` library) to convert spoken words into text in the browser. It also includes convenient utilities for copying transcribed text to the clipboard and basic UI for starting/stopping recording.

---

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Clone and Install](#clone-and-install)
  * [Run Locally](#run-locally)
* [Usage](#usage)
* [Scripts](#scripts)
* [Troubleshooting](#troubleshooting)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## Demo

> (Add a link or GIF/screenshot here showing the app in action. Replace this line with a deployed URL if available.)

---

## Features

* Live speech-to-text using `react-speech-recognition` / Web Speech API
* Start / stop voice recording
* Show live transcription text
* Copy transcription to clipboard
* Simple, clean UI powered by React + Vite

---

## Tech Stack

* Frontend: React (v19+) with Vite
* Speech: `react-speech-recognition` (wrapper around the Web Speech API)
* Optional clipboard utilities (native Clipboard API or 3rd-party hook)
* Package manager: npm

---

## Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* npm (v9+ recommended)

### Clone and Install

```bash
# clone
git clone https://github.com/Anurag-git04/Speech_To_Text.git
cd Speech_To_Text/vite-project

# install dependencies (recommended)
npm install
```

> If you encounter peer dependency errors (for example when installing `react-use-clipboard` or other older packages), try one of the approaches in the Troubleshooting section below.

### Run Locally

```bash
# start dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

The dev server usually runs at `http://localhost:5173/`.

---

## Usage

* Open the app in your browser.
* Allow microphone access when the browser asks for permission.
* Click the **Start** (or mic) button to begin recording speech; you should see live transcription appear on the screen.
* Click **Stop** to end the recording session.
* Use the **Copy** button to copy the transcription to the clipboard (or the native browser clipboard API will be used).

---

## Scripts

Common npm scripts you will find in this project:

* `npm run dev` — Run Vite dev server.
* `npm run build` — Build production assets.
* `npm run preview` — Preview locally the built production bundle.

---

## Troubleshooting

### `ERESOLVE unable to resolve dependency tree` when installing `react-use-clipboard`

If you see an error like:

```
peer react@"^16.8.0 || ^17 || ^18" from react-use-clipboard@1.0.9
```

This means the package expects React v16/17/18 but your project uses React 19+. Options to fix:

1. **Use the native Clipboard API** (recommended): no extra dependency required — use `navigator.clipboard.writeText(text)`.

2. **Install ignoring peer deps** (quick workaround):

```bash
npm install react-use-clipboard --legacy-peer-deps
```

3. **Use a modern alternative** such as `use-copy-to-clipboard` (if compatible with your React version) or another maintained hook.

### Vite warnings about unresolved imports

If Vite complains that a dependency `react-use-clipboard` (or similar) cannot be resolved after an install failure, make sure the package actually exists in `node_modules`. Re-run the install and check for errors. If you used `--legacy-peer-deps`, delete `node_modules` and `package-lock.json` and reinstall to ensure consistency:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

---

## Project Structure (example)

```
Speech_To_Text/
├─ vite-project/
│  ├─ index.html
│  ├─ package.json
│  ├─ src/
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  └─ components/
│  └─ public/
└─ README.md
```

(Adjust this structure to match the repository if it differs.)

---

## Contributing

Contributions, issues, and feature requests are welcome! Please open an issue or submit a pull request.

If you're adding features, try to:

* Keep changes isolated to small commits
* Update the README or add docs for any new behavior
* Ensure the app still runs with `npm run dev` after your changes

---

## License

This project is open source. Add the appropriate license file (e.g., `MIT`) if you want to apply a permissive license.

---

## Contact

Maintainer: Anurag Shaw

For questions or contact, open an issue on the repository or reach out via your preferred contact method.

---

*Generated README — please review and adjust sections marked with placeholders (Demo link, screenshots, and exact project structure) to match your repository's content.*
