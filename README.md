## nuxt-movies

[nuxt-movies.jamesrock.me](https://nuxt-movies.jamesrock.me)

This repo forms part of a project where I built the same app using Svelte, Nuxt, Next, Solid and Angular — all but one of which I'd never use before — in an effort to show that picking-up frameworks isn't quite the huge deal hiring managers seem to think it is...

The app itself is nothing overly fancy — just a basic film discovery site covering all the essentials one would expect such as search (actor/director/title), categories, filmographies, cast & crew. I took a classic ‘less is more’ approach with regards to the UI. It’s certainly not the most impressive thing you’ll ever see — but it is a perfectly functional single-page app fetching data from a live API, which is very much the bread and butter of modern front-end development.

All five repos can be found here on GitHub:

[github.com/svelte-movies](https://github.com/jamesrock/svelte-movies)  
[github.com/nuxt-movies](https://github.com/jamesrock/nuxt-movies)  
[github.com/nextjs-movies](https://github.com/jamesrock/nextjs-movies)  
[github.com/solid-movies](https://github.com/jamesrock/solid-movies)  
[github.com/angular-movies](https://github.com/jamesrock/angular-movies)  

### Project Summary

It took just over half a day to get the app fully up and running — I found it easy enough to use, the docs are decent, although I do find Vue’s template syntax to be less intuitive than React/Next and Svelte. Also, having to constantly define props before they’re only deconstructed anyway is a bit much — why not just provide a plain old props object like the others do. On the plus side, not having to import components is a very nice touch, in addition to file-based routing, and the way it magically handles custom fonts with the nuxt/fonts package. My biggest gripes would be having to use .value to get and set refs, universally passing-in props as strings, and, as mentioned above, defining props twice. Nuxt itself seems decent, although perhaps Vue needs to catchup to some extent — it’s certainly not awful, but there’s definitely room for improvement. Among its redeeming features are simplified for-loops and conditionals, and unified components. If I had to pick between Svelte and Nuxt, I’d pick Svelte all day long — it does a better job of the same core concept, although I do love that components are readily available without needing to be imported. 
