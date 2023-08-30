

// import * as AI from '$lib/funcs/server/AI/index'


export const POST = async ({request}) => {

    let {sampleText, problemMessage} = await request.json()

	// check validness

    let streamFunction = await AI.createComparisonStream(products, selectedFeatures)
    if(!streamFunction){
        return new Response("AI response Failed",{status:400})
    }
    let response = await streamFunction()
    
    return new Response(response.body, {
        headers: {
            'Content-Type': 'text/event-stream'
        }
    });
};

