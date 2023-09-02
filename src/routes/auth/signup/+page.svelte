<!-- // src/routes/login/+page.svelte -->
<script lang="ts">
	export let form
</script>

<form method="post" action="?/signup">
  <input class="input" name="email" value={form?.email ?? ''} />
  <input class="input" type="password" name="password" />
  <button class="btn variant-filled" >Sign up</button>
</form>