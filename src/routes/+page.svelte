<script lang="ts">

    import DataList from "$lib/comp/tools/DataList.svelte";
    import {PenLine, PersonStanding, Search, UserSquare, Link} from 'lucide-svelte'
	import { Avatar } from '@skeletonlabs/skeleton';

    export let data;
    let {detectors} = data;

    const offerList:string[]=[
        "Generate undetectable text.",
        "Humanize already generated text.",
        "Simultaneously, double check with text detectors.",
        "No credit card required.",
        "Data is not stored, for maximum privacy.",
    ]

</script>


<div class="md:max-w-4xl w-full">


    <div class="space-y-28">

        <div class="flex flex-col justify-center items-center text-center gap-8 pt-16">
            <div class="flex flex-col justify-center items-center text-center gap-2">
                <h1 class="text-6xl">
                    Bypass
                    <strong class="text-6xl md:text-6xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90%">
                        All
                    </strong> 
                     AI Detectors
                </h1>
                <div>
                    <p class="text-2xl">
                        Generate Undetectable and High Quality Text
                    </p>
                </div>
    
            </div>
            <a href="/auth/signup" class="btn text-2xl variant-filled-primary w-full md:w-1/2">
                Get $20 Credit
            </a>
        </div>


        <div class="flex flex-col  gap-8">
            <h1>Detectors</h1>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8">
                {#each detectors as detector}
                    <div class="flex flex-col justify-center items-center gap-2">
                        <Avatar src={detector.pfpSrc} width="w-20 md:w-24" rounded="rounded-full" />
                        <h3>{detector.name}</h3>
                    </div>
                {/each}
            </div>
        </div>

            
            
        <div class="flex flex-col justify-center items-start gap-4">
            <h1 class="text-secondary-500 dark:text-primary-500">Here's what we offer:</h1>
            <div class="space-y-2">
                <DataList list={offerList} />
            </div>
            
            <h2>
                Get $20 Worth of Credit Now:
            </h2>
            <div class="flex justify-center md:justify-start items-center w-full">
                <a href="/auth/signup" class="btn text-xl variant-filled-primary w-full md:w-1/2">
                    Sign up
                </a>
            </div>
        </div>
    
    




        
        <div class="flex flex-col  gap-8">
            <h1>Functions</h1>

            <div class="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        
                <div class="flex justify-center items-start gap-4 bg-primar-500  w-full md:w-2/5 rounded-lg px-2 py-4">
                    <PenLine size={80} />
                    <div class="w-full space-y-4 text-start">
                        <a  href="/profile/generate">
                            <h3 class="flex just-start items-center text-secondary-500 gap-2 ">
                                Generate 
                                <Link />
                            </h3>
                        </a>
                        <p>
                            Prompt Xeptron to generate a text with your writing style <br>
                            *Requires personalization 
                        </p>
                    </div>
                </div>
            
                <div class="flex justify-center items-start gap-4 bg-primar-500  w-full md:w-2/5 rounded-lg px-2 py-4">
                    <PersonStanding size={80} />
                    <div class="w-full space-y-4 text-start">
                        <a  href="/profile/humanize">
                            <h3 class="flex just-start items-center text-secondary-500 gap-2 ">
                                Humanize 
                                <Link />
                            </h3>
                        </a>
                        <p>
                            Xeptron will convert any text to your writing style <br>
                            *Requires personalization 
                        </p>
                    </div>
                </div>
            
                <div class="flex justify-center items-start gap-4 bg-primar-500  w-full md:w-2/5 rounded-lg px-2 py-4">
                    <Search size={80} />
                    <div class="w-full space-y-4 text-start">
                        <a  href="/profile/detect">
                            <h3 class="flex just-start items-center text-secondary-500 gap-2 ">
                                Detect AI 
                                <Link />
                            </h3>
                        </a>
                        <p>
                            Using the best AI detectors available. Scan your text.  <br>
                            *Does not require personalization 
                        </p>
                    </div>
                </div>
    
            </div>
        </div>





    </div>
    


    
</div>


