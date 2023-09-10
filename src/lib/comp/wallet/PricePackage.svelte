<script lang="ts">


    export let mpackage:Package
    export let form:any
    export let enhance:any


    $form.priceId = mpackage.priceId
</script>




<div class="card p-4">
    <form  method="post" use:enhance>
        <input type="hidden" name="priceId" value="{$form.priceId}">
        <button class="btn variant-filled" type="submit">
            {mpackage.name}
        </button>
        <p>
            Price: {mpackage.currencySymbol}{mpackage.price}
        </p>
        <p>
            Credits: {mpackage.credits}
        </p>
    </form>
</div>