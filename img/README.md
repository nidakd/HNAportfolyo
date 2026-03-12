# Project Images

This folder contains images for your portfolio.

## Current Images

- `nida.jpeg` - Profile picture (currently in use)

## Add Your Project Images

To add your project images:

1. Save your project screenshots to this folder
2. Name them descriptively (e.g., `project-3d-visualization.jpg`, `project-web-design.png`)
3. Update the image paths in `index.html`:

```html
<!-- Example: -->
<img src="img/your-project-image.jpg" alt="Project Description">
```

## Recommended Image Sizes

- **Profile Picture**: 400x400px (square, will be displayed as circle)
- **Project Images**: 800x600px or 400x300px (landscape orientation)
- **Format**: JPG, PNG, or WebP
- **File Size**: Keep under 500KB for faster loading

## Current Placeholders

The project section currently uses placeholder images from `via.placeholder.com`. Replace these with your actual project screenshots by:

1. Adding image files to this folder
2. Updating the `src` attribute in the project cards in `index.html`

Example:
```html
<!-- Replace this: -->
<img src="https://via.placeholder.com/400x300/2563eb/ffffff?text=3D+Data+Visualization" alt="Project">

<!-- With this: -->
<img src="img/my-project.jpg" alt="My Project">
```
