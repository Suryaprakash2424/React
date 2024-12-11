# parcel
-It develops and builds the project
-It creates Local server 
-It is HMR(Hot Module Replacement)(Hot reloading)
-It is file watching Algorithm(Written in c++)
-caching(cache)-Builds Faster
-Image optimization
-Minification
-Bundling(Main)
-Compressing the code
-consisting hashing
-code splitting
-Differential bundling-(It supports older browsers)
-Error Handling
-Diagnostic
-HTTPs
-Tree shaking(Removes unused code)


//JSX (converts ES6[ECMAScript] into JS compactable language by Babel(in Parcel))
//JSX =>Babel translates into React.createElement=>ReactElement-JS Object =>HTMLElemenet(Render)


#React hooks(Normal JS utilitu functions)
    -useState() => Superpowerful state variables
    -useEffect() => 


# Types of testing(developer)
- Unit Testing
- Integration Testing
- End to End Testing / (e2e Testing)

#setting up testing in our app
- install react testing liberary
- install jest
- install babel dependencies
- configure bebel (babel.config.js)
- Configure parcel Config file to disable default babel transpilation(.parcelrc file)
- Jest install -> npx jest --init
- Install jsdom library
- Install @babel/Preset-react - to make JSX work in that cases.
- Include @babel/Preset-react inside my babel config(babel.config.js).
    {   In (babel.config.js)
        presets:[
            ["@babel/preset-react",{runtime:"automatic"}]
        ]
    }
- Install npm i -D @testing-library/jest-dom

