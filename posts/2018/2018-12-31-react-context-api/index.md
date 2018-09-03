---
path: '/react-context-api-getting-started'
date: '2018-12-31'
title: 'Using the React Context API  -  getting started'
tags:
  [
    'information',
    'learning',
    'guide',
    'getting started',
    'react',
    'api',
  ]
published: true
---

Let's use the React Context API to change theme in an app!

![](https://thepracticaldev.s3.amazonaws.com/i/zmp2k4r128poj1gsws61.gif)

## But first, some **context**! 🤣

Ok terrible puns aside let's have a look at what the React Context API
is for and what it does. There's a great one liner from the [React
docs]...

> Context provides a way to pass data through the component tree
> without having to pass props down manually at every level.

Or in other words, you can use the React Context API to avoid [prop
drilling] if you need more detail on the concept then please do check
out the links provided.

I've previously gone over implementing the React Context API in [my
Gatsby blog] which I documented as I did it; you can see [how that
went here].

> ### Explain the Context API to me.
>
> A great resource on explaining the API can be found from
> [@leighchalliday] with a [great usecase] on the subject.

## What we're doing...

For this post we're going to extend the example we created for
[styled-components getting started] as it has the majority of the code
we'll need to get started with the React Context API.

We're going to extend that example to manage the theme state of the
example application.

So in summary:

- Scaffold out basic CreateReact App
- Use styled components for styling
- Add themes to switch between with the React Context API
- Use the React Context API!

## What we'll need...

All we'll be needing is an internet connection! Because we're going to
do all of this in the awesome [CodeSandbox]!

If you have a GitHub account or not, CodeSandbox will let you get
started [coding straight away]!

So let's go over theming the basic create react app again, this time
instead of adding state into to the component we will use the React
Context API to manage the state for us. There will be people that will
argue that this is a bit overkill for a theme switch but it is given
as an example of [when to use the Context API] in the React
documentation so I will let you decide on the validity of that point.
For this example, I hope it will give you a clearer picture of how to
use the Context API it in an application.

## Let's start

### Dependencies

[Open a React CodeSandbox] and add `styled-components` as a
dependency:

![](https://thepracticaldev.s3.amazonaws.com/i/d49drafvtvz3ws2br9vs.gif)

### File structure

Another area for [bikeshedding] is file structure, in this scenario
we're adding folders for `components`, `contexts` and the `theme`
please feel free to structure your files how you see fit, this is how
we're going to do it for this example ❤️

Add the directories into the `src` folder so we can add in some
components, the file structure should look something like this:

```text
context-demo/
├─ public/
├─ src/
│  └─ components
│  └─ contexts
│  └─ theme
└─ package.json
```

## Scaffold out basic Create React App

Ok, so, what we're going to do is add in an `App.js` component to the
`components` folder then use that in the `src/index.js` file.

The `App.js` component can be a stateless functional component as for
this example as we're going to be handling state with the Context API.

Here you can see my sketchy typing as I create the directories and add
in the `App.js` component.

![](https://thepracticaldev.s3.amazonaws.com/i/oyxpggt00q754iv1azp0.gif)

We can then remove the `style.css` file and reference in
`src/index.js` as we're going to be styling with `styled-components`
💅 and then use our `App.js` component:

![](https://thepracticaldev.s3.amazonaws.com/i/yyne3q36jc0zca2ld89u.gif)

Ok, so the reason why I have abstracted the `App.js` component out of
the `src/index.js` file is so that when we come to using the Context
API we can add it to the highest level in our app.

### What about the rest?

So this isn't really the Create React App as we're using CodeSandbox
instead, I have gone over the basic styling used in the
[styled-components getting started] post so it's time to refer to that
to mimic the styles we need.

That means what we're going to do, rather than go into depth on the
styling of each of the component parts that make up the basic Create
React App appearance, we're going to re-use components.

The Create React App boilerplate code has one file that we go over
styling in the [styled-components getting started] post which is the
`App.js` file, the others are left or deleted, the basic style of
`App.js` is:

**`App.css`**

```css
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.App-title {
  font-size: 1.5em;
}

.App-intro {
  font-size: large;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Use styled components for styling

Now we're going to recreate the styles from the `App.css` file with
`styled-components` let's list them out here and go through them:

```text
AppWrapper
AppHeader
AppTitle
rotate360
AppLogo
AppIntro
Underline
StyledHyperLink
```

`AppWrapper` is the top level wrapper which in a larger component
could be used for layout with CSS Grid or Flexbox, in our case we're
going to align the text centre.

![](https://thepracticaldev.s3.amazonaws.com/i/uc08zkkf4ay1hq8pkt3w.gif)

Straight forward enough, right? Now the majority of the rest of the
components will use the `styled-components` [`ThemeProvider`] which is
what we're going to pass our theme to from the Context API.

## Add themes to switch between with the React Context API

## Use the React Context API

<!-- Links -->

[how that went here]:
  https://blog.scottspence.me/react-context-api-with-gatsby
[styled-components getting started]:
  https://blog.scottspence.me/styled-components-getting-started
[example]: https://codesandbox.io/s/7wwr706nz0
[react docs]: https://reactjs.org/docs/context.html
[prop drilling]:
  https://blog.kentcdodds.com/prop-drilling-bb62e02cb691
[my gatsby blog]: https://blog.scottspence.me
[@leighchalliday]: https://twitter.com/leighchalliday
[great usecase]: https://www.youtube.com/watch?v=yzQ_XulhQFw
[codesandbox]: https://codesandbox.io
[coding straight away]: https://codesandbox.io/s/new
[open a react codesandbox]: https://codesandbox.io/s/new
[when to use the context api]:
  https://reactjs.org/docs/context.html#when-to-use-context
[bikeshedding]: https://en.wiktionary.org/wiki/bikeshedding
[styled-components getting started]:
  https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd
[`themeprovider`]:
  https://www.styled-components.com/docs/advanced#theming