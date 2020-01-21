# vue-chrome-extension-boilerplate
This vue.js-powered chrome extension boilerplate intends to reduce development time for a proper/quick setup as much as possible without compromising functionality.
The repository contains a basic app architecture(preferred/subjective) that preloads some basic components and examples to showcase the capabilities of the project.

### What is in it?
* **A store** setup for centralized state management (using [vuex](https://github.com/vuejs/vuex))
* **A router** setup to fully utilize extension's pop-up and to make it behave like a regular webapp (using [vue-router](https://github.com/vuejs/vue-router))
* [SASS](https://github.com/sass/sass) as the CSS preprocesser coupled with [Bulma](https://github.com/jgthms/bulma) as an arbitrary CSS framework
* Project gets bundled with [webpack](https://github.com/webpack/webpack)

### Installing

```bash
# 1. Clone the repository.

git clone https://github.com/atesmert/vue-chrome-extension-boilerplate.git my-extension

# 2. Go to your project folder.

cd my-extension

# 3. Install dependencies. 

npm install 

# 4. Run one of the following commands. 

#4.1 for development build
npm run build:dev
#4.2 for production build
npm run build:prod
#4.3 for publishing purposes
npm run build:zip

```

After following the instructions above, open a new tab in your browser and go to `chrome://extensions/`. Then switch `Developer mode` if it is not enabled.
Click on `Load unpacked` and select the `dist` folder created in the project root after running 4.1 or 4.2. 

After loading you are good to go. Please make sure to repeat step 4 whenever you make changes in the code.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
