
# Video Captioning Web App

A simple web application to add captions to a video. This application allows users to enter a URL to a hosted video, provide captions with timestamps, and view the video with the captions displayed.
Visit -  https://spyno-video-captioning.vercel.app/
## Features

- Enter a URL to a hosted video (e.g., YouTube).
- Provide captions with specific timestamps.
- View the video with captions overlaid at the specified times.
- Play and pause video controls.

## Technologies Used

- React.js
- React Router
- Tailwind CSS
- React Player

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/video-captioning-web-app.git
    cd video-captioning-web-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter the URL of the video you want to caption.
3. Provide captions along with the timestamps.
4. View the video with the captions displayed at the specified times.

## Project Structure

```
video-captioning-web-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── CaptionInput.jsx
│   │   ├── VideoPlayer.jsx
│   │   └── Main.jsx 
│   ├── pages
│   │   ├── Landing.jsx
│   │   ├── Process.jsx
│   │   └── Player.jsx
│   ├── App.jsx
    └── CaptionsContext.js
│   ├── index.css
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Components

### `CaptionInput.jsx`

Handles the input of captions and their timestamps.

### `VideoPlayer.jsx`

Displays the video from the provided URL and overlays captions based on the specified timestamps. Provides play and pause controls.

### `Main.jsx`

Main component for the application where users can enter the video URL and add captions.

### `Player.jsx`

Displays the video player and captions input form. Routes based on the video ID.

### `CaptionsContext.js`

Context for managing the state of captions across the application.

## Tailwind CSS

This project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.js`.

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push to your branch.
6. Create a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Player](https://github.com/CookPete/react-player)
