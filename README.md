# Getting Started

1. Run `cp .env.template .env`.
2. Paste your own GitHub [access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token
   ) to the `GH_ACCESS_TOKEN` field. You won't be able to access their API without the token.
3. Run `npm run dev`.

## Q&A

### Planning

> What do you think are the greatest areas of risk in completing the project?
 
* I haven't worked with Next.js for a while (6+ months).
* I haven't worked with GitHub API at all.
* I haven't worked with ShadCN at all.

> What changes/additions would you make to the design?

Was there the design at all? Personally, I'd get rid of ShadCN, since at this stage, the app has no design at all. TailwindCSS is just enough. I also prefer working with the custom design systems and headless component libraries (e.g. Headless UI).

> List a two or three features that you would consider implementing in the future that would add significant value to the project.

1. ~[In hindsight] Add pagination. GH API has a non-trivial approach to pagination, and figuring it out + implementing it in the project will require additional time. And I'm already overtime. Moreover, the pagination feature was not explicitly mentioned in the requirements.~ Done, after figuring out I've been using the wrong endpoint this whole time.
2. [In hindsight] Augmenting the native HTML input validation (search page) with custom error messages.
3. The UI of a healthy human being, provided by a professional designer. I'd happily code it down.
4. Combine the search field and results into a single page. It's cumbersome to go back and forth (but the requirements must be observed).
5. The skeleton UI instead of the "Loading" message at the search results page. But the value of this improvement is not that high.

### Looking Back

> Describe the major design/build decisions and why you made them.

Both the home and search results page are server components. The app state is managed through the url and search params.

The initial search results are fetched on the server side and returned as html to the client. From there on, it would seem quicker to implement fetching and filtering on the client side, but since I initially intended to add pagination too (as regular html links), it made sense to manage the search state completely on the server.

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

It took ~6 hours to complete:
* researching the GH API (back and forth) ~1.5h;
* thinking through the app structure, fighting the existential doom ~1h;
* refreshing my knowledge of Next.js ~1h;
* coding it all down (incrementally) ~1h;
* styling, implementing the Shadcn thing (which I'm quite frustrated by) ~30m;
* unsuccessful attempt to implement the pagination ~30m;
* filling out the Readme.md ~30m;

> If you could go back and give yourself advice at the beginning of the project, what would it be?

1. THIS IS THE ENDPOINT I HAD TO USE: https://docs.github.com/en/rest/search/search !!!!!!111 
2. The freaking response schema and response examples are listed in the GH docs! (although they are very cumbersome to use too).

> Did you learn anything new?

Yes: GH API + Next.js refresher (although this knowledge may get lost again without regular practice).

> Do you feel that this assignment allowed you to showcase your abilities effectively?

Not quite, since I'm more used to SPAs (and can code them much faster). But this is my problem, I know.

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?

I prefer using the custom UI components, but this assignment is not about styling.

---
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
