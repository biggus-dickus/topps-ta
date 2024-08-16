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

Was there the design at all? Personally, I'd get rid of that ShadCN nonsense, since at this stage, the app has no design at all. TailwindCSS is just enough. I also prefer working with the custom design systems and headless component libraries (e.g. Headless UI).

> List a two or three features that you would consider implementing in the future that would add significant value to the project.

1. The UI of a healthy human being, provided by a professional designer. I'd happily code it down.
2. Combine the search field and results into a single page. It's cumbersome to go back and forth (but the specs must be observed).
3. The skeleton UI instead of the "Loading" message at the search results page. But the value of this improvement is not that high.

### Looking Back

---
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
