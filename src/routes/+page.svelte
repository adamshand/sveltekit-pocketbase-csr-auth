<h2>SvelteKit + PocketBase CSR Auth Template</h2>

<p>
	This is a very simple template for SvelteKit and PocketBase that only does client side
	authentication (CSR/SPA). This is based on <a
		href="https://github.com/pocketbase/pocketbase/discussions/3574#discussioncomment-7345956"
		>Gani Georgiev's recommendation</a
	> which makes sense to me.
</p>

<p>
	I couldn't find many PocketBase/SvelteKit CSR examples on Github and the ones I did find, seemed
	more complicated than necessary. I'm trying to keep this one as simple as possible so that
	beginners (eg. me!) can easily understand how it works.
</p>
<ul>
	<li>
		Routes inside of <code>/app</code> are CSR only and authenticated.
	</li>
	<li>
		Other routes have both CSR and SSR enabled. Intention is these will either be static or use a
		shared PocketBase account to retrieve public data.
	</li>
</ul>
<p>Improvements and suggestions welcome.</p>
