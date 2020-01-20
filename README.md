# Salto Interview Assignment

Develop a simple single-page application (SPA), that will be used to explore github
repositories.

> This is all I could do with the time that I had. There is still a lot of improvements that could be done.

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
A component only consists of 2 files, the `[name].ui.tsx` and `[name].styles.ts`.
The only thing a component should do is receive and display data. Also, a component can also have ui logic, e.g Animations, small render conditions, user interactions.

### Folder Structure
