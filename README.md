# std 


# Info
    - design: https://www.figma.com/file/Iki2iXcXllqYpvHRxdC0up/Final

# Run & Build
    - npm i : install 
    - npm run start : run start -> to build

# Source tructure
````
- webpack.config.js : config to run and build 
- src: 
    + assets:
        - images : all images 
        - libs : lib include
    + js: 
        - dynamic : for backend 
        - ui : only for frontend ( handle layout static )
        - vendor : npm build
    + scss: 
        - styles.scss : build all .scss
        - base: 
            + _animation.scss 
            + _fonts-page.scss : current is google font 
        - elements: 
            + _common.scss : treatments that are not in any of the categories
            + _[component-name].scss : "component-name" is is what I want more
        - handles: 
            + _function.scss : sass funtions include
            + _minxin.scss : sass mixins include
        - pages: 
            + _[page-name].scss : config style for each page with 'page-name'
    + views: 
        - elements: element layout
            + _[name-element].twig
            + base : config header/footer/frame
        - pages:    
            + [page-name].twig : include all component for each page
            + index.twig : add 'page-name' for menu
````