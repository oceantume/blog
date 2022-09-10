# Hello, World!

## Introduction

I know it's a cliché title for a first post on a blog about programming, but I swear I have a clever reason for picking this one. Let me just introduce myself and then I'll explain. My name is Gabriel and I currently work as part of a team that maintains the build pipelines and Web-based tools for a video games studio in Quebec City.

I love programming. I like the "breaking things" part of it just as much as the "making things" part, which is why I have just as much experience reverse engineering video games to make cheats and private servers as I have writing Web applications from front-end to infrastructure. This is also driven by the fact that learning new things and getting into new projects has always been very important for me.

Another thing I enjoy is writing. It's something I haven't really taken the time to exploit apart from writing pull requests, arguing over the Internet and maintaining the tens of unfinished, scrambled, notes I've written over the years in scrambled text files and, more recently, on [Notable](https://notable.app/).

I've been thinking about starting a blog to write some of my thoughts on for a while, but I never really knew where to start. I do have some ideas coming to mind from time to time, but it always seemed like a lot of work to start a blog just to publish that one idea.

And then it hit me: What if my first few blog posts were about my experience writing and publishing my own blog? Isn't that brilliant? The story is going to write itself... Literally. This gives me the opportunity to try it out while actually giving me something to write about.

If you can read this, it means I succeeded! Unless you've hacked into my computer, in which case I do appreciate that you're reading this instead of installing a ransomware.

## Making a blog from scratch

At the moment I feel like I want to start this blog from scratch by coding it myself, but I also don't want it to take months to get my first article out. Between the writing platform, infrastructure, SEO, comments section, and everything else, I would get tired before I even wrote a second article. That first article would also be absolutely unreadable if it contained my full journey from start to finish.

I think it's a good thing to know how to choose your battles, and making a full-fledged blogging platform for myself doesn't sound like "the first battle". Actually it sounds more like a whole war, so I will try to split it into battles: smaller tasks that I will actually be able to finish and write something about so I can feel like something's actually progressing.

## Producing an MVP

What's the <abbr title="Minimum viable product">MVP</abbr> for a blog? This sounds like a great subject to argue over the Internet about, but for me, for now, it will just be this one article, online somewhere. The only requirement I'm giving myself is that it's "from scratch" and not published using a blogging service or platform.

Since I'm writing this article in a markdown text file, I need a way to transform it into an HTML page. Remember when I said I'd create this from-scratch? Well I also said I would choose my battles. While writing a tool to do this sounds like it could be a good project, it's not part of the scope of this MVP and I should therefore use something that already exists.

I will be using JavaScript to make at least the initial code. It gets a lot of hate, but when you get comfortable with it and [Node.js](https://nodejs.org/), it can be a great scripting language. It's cross-platform, simple to install, and while dependency hell is real, more and more packages are trying to be responsible and only include dependencies they actually need instead of relying on a complex tree of dependencies. The library I will be using today is responsible in that sense.

A quick search leads me to find the [Showdown](https://www.npmjs.com/package/showdown) library which converts markdown to HTML. Its API looks very simple and it has a single dependency which itself has no dependencies. It's perfect for my current use-case so I wrote [a small build script](https://github.com/oceantume/blog/blob/229b0dd4515a04a85f4dbd73e22f053087d7b7b9/build.js) that uses it to convert my article file directly to an `index.html` page.

The result is my MVP. A plain HTML article with absolutely nothing else.

## Deploying the MVP

The simplest, most convenient way to deploy this that I can think about is to use [GitHub Pages](https://pages.github.com/). I've used it before and I'm already planning to use GitHub to host the code I'll come up with while making this from scratch, so it just seems to make sense to go with that platform. That may change later when my requirements change, but for now it's plenty.

On GitHub Pages, URLs will be provided in the form `https://{username}.github.io/{repo}`. My goal is for the blog to show up on `https://oceantume.github.io/blog`, so I created a new repository called `blog` and uploaded the code I had so far along with the original markdown article itself.

I then created a new orphan branch named `gh-pages` using `git checkout --orphan gh-pages`. Since I didn't want anything on that branch, I deleted everything on there except for my built `index.html` file which I left at the root. This is a lot of manual work, but automating it will be part of a following article explaining how I set up basic GitHub workflows. The last step for this to be deployed was to make `gh-pages` the branch used by GitHub Pages in my repository settings.

As a side-node, I'm using the past tense here, but I'm literally typing the article at this very moment so it's not already pushed to GitHub obviously. I have a feeling this is not the last time I end up thinking about the relativity of time and what it all means as I continue working on this project.

## Next steps

If you're reading this on the first iteration of the blog, it's probably boring black-on-white text because it's just a simple HTML file using the default browser stylesheet. Some people may argue that this is how the Web was always supposed to look, but frankly it's a bit bland and boring. The website itself also lacks any kind of discoverability because it doesn't even have an head tag with information about its content.

My next articles will be about setting that up.
