<script lang="ts">

    import DataList from "$lib/comp/tools/DataList.svelte";
    import {PenLine, PersonStanding, Search, UserSquare, Link} from 'lucide-svelte'
	import { Avatar } from '@skeletonlabs/skeleton';

    export let data;
    let {detectors} = data;

    const offerList:string[]=[
        "Xeptron is designed to mimic your unique writing style.",
        "It can generate text that appears as if it was written by you.",
        "We verify your text using the most advanced 'AI text detectors' available.",
        "If it doesn't pass the detection, you will get a refund.",
        "No credit card required.",
        "For maximum privacy, Input and output texts will not be saved on our database.",
    ]

</script>


<div class="md:max-w-4xl w-full">


    <div class="space-y-28">

        <div class="flex flex-col justify-center items-start gap-6">
            <div class="flex flex-col justify-center items-start gap-2">
                <h1 class="text-4xl">
                    <strong class="text-5xl md:text-6xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90%">Xeptron</strong> can mimic your handwritting
                </h1>
                <div>
                    <p class="text-2xl">
                        Your competetion could be using AI...
                    </p>
                </div>
            </div>
            
            <div class="flex flex-col justify-center items-start gap-4">
                <div class="space-y-2">
                    <h3 class="text-secondary-500 dark:text-primary-500">Here's what we offer:</h3>
        
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
    
    
    
                <div class="flex justify-center items-start gap-4 bg-primar-500  w-full md:w-2/5 rounded-lg px-2 py-4">
                    <UserSquare size={80} />
                    <div class="w-full space-y-4 text-start">
                        <a  href="/profile/personalize">
                            <h3 class="flex just-start items-center text-secondary-500 gap-2 ">
                                Personalize 
                                <Link />
                            </h3>
                        </a>
                        <p>
                            Tell Xeptron about you to get the best results.
                        </p>
                        <a href="/profile/personalize" class="btn ">
                            
                        </a>
                    </div>
                </div>
            </div>
        </div>





    </div>
    


    
</div>


