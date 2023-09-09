<script lang="ts">

    export let mpackage:Package

</script>




<div class="card p-4">
    <form  method="post">
        <input type="hidden" name="priceId" value="{mpackage.priceId}">
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