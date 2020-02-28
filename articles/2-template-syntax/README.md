# How to deal with templates in V.A.R?

Modern front-end frameworks display data like marionettes. The templates contain placeholders to show the correlated data so that you get rid of data changes and DOM selections and manipulations.

![marionette](../images/../../images/2-template-syntax/marionette.jpg "marionette")

## What's wrong with jQuery?
There is nothing wrong with jQuery. It's still a great DOM manipulating library. The problem is the modern websites require more and more complicated features, interactions, and animations. jQuery manually uses the event-based listener to detect changes and the CSS selectors to access elements that cause the code to become hard to read and maintain, especially increasing the chance of callback hell and race condition. <del>However, if you only know jQuery now, you're hard to survive in the front-end world anyway.</del>

> In this session, I only judge V.A.R based on the template parts not component parts.
