<script lang="ts">

    const offerList:string[]=[
        "Xeptron is designed to mimic your unique writing style.",
        "It can generate text that appears as if you wrote it yourself.",
        "We verify your text using the most advanced AI text detectors available.",
        "If it fails the detection, you will get a refund.",
        "Credit card is not required.",
    ]

</script>


<div class="md:max-w-3xl w-full space-y-8">
    
    <div class="flex flex-col justify-center items-start gap-6">
        <div class="flex flex-col justify-center items-start gap-2">
            <h1 class="text-4xl">
                <strong class="text-5xl md:text-6xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90%">Xeptron</strong> can mimic your handwritting
            </h1>
            <div>
                <p class="text-2xl">
                    Your competetion is using AI, don't fall behind.
                </p>
            </div>
        </div>
        
        <div class="space-y-4">
            <div class="space-y-2">
                <h3>Here's what we offer:</h3>
    
                <ul role="list" class="mb-8 space-y-2 text-left">
                    {#each offerList as offer}
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg
                                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                /></svg
                            >
                            <span>{offer}</span>
                        </li>
                    {/each}
                </ul>
            </div>

            <a href="/auth/signup" class="btn variant-filled-primary">
                Get $20 worth of credit Now
            </a>
        </div>
    </div>

    <br>

    <div class="flex flex-col md:flex-row justify-center items-center gap-6">
        <div class="w-full md:w-1/2">
            <p>
                Web Publisher - You Now Decide When AI-Generated Text is Published
                Do you need a reliable tool to make sure your content is Original, meaning: plagiarism free and written by a human writer and not AI generated?
    
                Protect Your Site - Future proof your site from the potential for Google penalizing AI content and only publish content you know the true Originality of.
                Detect if content was AI generated and/or plagiarized with all data housed and saved in one place. You will no longer need to rely on anyone's promise that it is plagiarism-free or waste time scanning it yourself.
                Bulk Site Scan - Scan your entire site to understand the risk of your site being included in future potential AI updates from Google.
                Rank better on Google and other Search Engines using our best-in-class Readability feature to ensure you produce high quality content.
            </p>
        </div>

        <div class="w-full md:w-1/2 use-case-image-1"></div>

    </div>


    
</div>


<style>
    .use-case-image-1 {
        background-image: url("https://assets.website-files.com/63ee996e404f6475c7b177b3/64637bcfc47fcd4726574eba_AdobeStock_538311930.webp");
        background-position: 80%;
        background-repeat: repeat;
        background-size: cover;
        border-radius: 10px;
        padding-top: 85%;
    }

</style>