# beefy-alpine-app

A template for the web using Alpine.js.
Based off of `create-alpine-app`, it includes conveniences like Tailwind and PostCSS.

Beyond those, I've also included several libraries and plugins with the purpose of 
completing Alpine and building it into a more monolithic framework.

The goal of this template is to fully actualize HTML as a cohesive language on its own,
and optimize productivity. Alpine's native features make front-end seamless, Tailwind
removes the need for fiddling with CSS, Alpine AJAX makes server requests
a breeze from any element, and the other libraries included like Vimesh-UI and Pinecone Router bring in 
conveniences like component abstraction and routing that Alpine would normally expect
a back-end templating solution for. This is my personal setup for doing as much development
as possible without leaving my markup. To top it off, for the 10% of the time that I need to go outside of my markup
in order to construct a more complicated solution, I always have the ability to use Alpine's extensibility to my 
advantage and create a custom directive. It's beautiful. Write JavaScript once, pack it into an HTML attribute,
and slap it wherever you need it. For any functionality included that you don't need, you can simply remove it.
Alpine is extremely lightweight after all, and even with the inclusion of these extra packages, you're still
getting dwarfed by something like React.

## "Why not HTMX?"
While HTMX is a fine solution, I personally prefer doing things the Alpine way, and Alpine AJAX
completes Alpine in the realm of client-server communication, making HTMX unnecessary for me.
While Alpine and HTMX are certainly used together fairly often, I find that I don't need to use HTMX
to meet my needs. Additionally, being able to use JavaScript (though I don't love it) as opposed to 
Hyperscipt (which is the intended front-end UI mechanism for HTMX) seems more streamlined. As opposed
to reinventing the wheel, Alpine tends to base itself on the standards more in my personal opinion.
I am not bashing HTMX - it is a great tool. But I prefer the Alpine way.

## "Why not React/Vue/Svelte?"
Doing as much inside of my markup as possible is a very appealing idea for me. If it is for you,
then this template may also be for you. If not, that's perfectly fine! For my part, I don't find
JavaScript to be very enjoyable to be writing oodles of. Alpine's "just enough JavaScript" approach
is exactly the kind of thing I like, and the power that comes from it allows me to do almost everything
I need with a level of brevity and productivity that is orders of magnitude higher than what I found
in my experience with React.

## "This template isn't viable for enterprise."
Correct.

### Relevant resources 
- Achieving reusable components in Alpine: [vimesh-ui](https://github.com/vimeshjs/vimesh-ui)
- Achieving seamless routing in Alpine: [pinecone-router](https://github.com/pinecone-router/router)
- Achieving easy AJAX requests in Alpine: [alpine-ajax](https://alpine-ajax.js.org/)

