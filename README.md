# Salto Interview Assignment

Develop a simple single-page application (SPA), that will be used to explore github
repositories.

> This is all I could do with the time that I had. There is still a lot of improvements that could be done.

### Running development env
```
npm install
npm run start:dev
```

### Build production env
```
npm install
npm build
```
> Should create a dist folder where you can use http-server to serve the index.html file

## Approach
I approached this assignment as if it were a website that I had to build for a client. The mindset that I have when building any website/app is UX first. I do not consider myself a UX designer but throughout my career, I have come to realize that the most important aspect of an app is the UX, why? because if a user doesn't quickly understand how to use an app then that app is pretty much worthless. With that in mind the following codebase is based on flexible UX.


## Architecture

The main architecture of this app can be explained with 3 simple files, and 2 simple folders.

> files
```
[ComponentName].tsx
[ComponentName].ui.tsx
[ComponentName].styles.ts
```

> folders
```
controllers
components
```

### Controllers
A controller consists of the 3 files mentioned above. A React Component is considered to be a controller when it has any of the following properties.

* Connects to Redux or any store.
* Transforms or mutates data.
* Calculates any data.
* Runs api calls
* Has no knowledge of the platform it is running on.


### Components
A component only consists of 2 files, the **[name].ui.tsx** and **[name].styles.ts**.
The only thing a component should do is receive and display data. Also, a component can also have ui logic, e.g Animations, small render conditions, user interactions.

### Folder Structure

#### App Folder
Where all react related code is placed.
 * components
 * controllers
 * hooks
 * catchers (error boundaries)

This has a recursive structure base on how the dom is build. There is a max-depth of 2 nested controllers e.g `contollers/[Name]/controllers/[Name]`. Controllers folder can have hooks, catchers, and components. Components folder should only have components.

Example.

```
components
  Intro
    Intro.ui.ts
    Intro.styles.ts
controllers
  Search
    Search.ts
    Search.styles.ts
    Search.ui.ts
    hooks
    catchers
    components
    controllers // No more nested controllers allowed
      ...
```

#### Store Folder
Where all redux relate logic goes.
* actions
* reducers
The actions folder has helpers folder where shared logic can go, and the models folder where all model actions go.

Example
```
store
  helpers
    buildAction.ts
  actions
    models
      repository
        search.ts
        get.ts
        readme.ts
```

#### Others
api folder - api functions.

types folder - types definitions

utils - small useful functions that can be used everywhere

styled - styled-components config


## Redux Store
The redux store is base on how apollographql stores data on the client side.
Data is received then transform into ...

```javascript
{
  type: 'ModelName'
  id: 'Model Id'
  data: 'The data that was recevied'
}
```

Once it is store like this it can easily be accessed from anywhere in the app without having to worry about the structure of the data.

Pitfall - At the moment there is no knowledge from which query/api that data came from. So on every search the data must be removed / replaced.


## Possible Improvements

* A lot more testing needs to be done
* Add request caching to the redux store so that if a user sends the same request twice then the second time the results should come directly from the cache.
* Redux Action helper is way to over-engineered and needs refactoring.
* Better Error handling
* Lazy load the redux store/actions.
