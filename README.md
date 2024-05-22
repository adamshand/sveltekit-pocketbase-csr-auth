# SvelteKit + PocketBase CSR Auth Template

This is a very simple template for SvelteKit and PocketBase that only does client side authentication (CSR/SPA). This is based on [Gani Georgiev's recommendation](https://github.com/pocketbase/pocketbase/discussions/3574#discussioncomment-7345956) which makes sense to me.

I couldn't find many PocketBase/SvelteKit CSR examples on Github.  The ones I did find, seemed more complicated than necessary. I'm trying to keep this one as simple as possible so that beginners (eg. me!) can easily understand how it works.

- Routes inside of /app are CSR only and authenticated.
- Other routes have both CSR and SSR enabled. Intention is these will either be static or use a shared PocketBase account to retrieve public data.

Improvements and suggestions welcome.

## How to Use

Requires a working PocketBase installation with at least one user in the `users` table.

- Copy `.env.example` to `.env`
- Configure `PUBLIC_POCKETBASE_URL`
- `pnpm i`
- `pnpm dev`

## Questions

- I'm using `/app/+layout.ts` to force authentication for all routes beneath `/app`.  I'm not sure that this is safe, but it seems to work?  It seems like it would be better to use hooks, but I'm not sure if that's possible with `+hooks.client.ts`.
