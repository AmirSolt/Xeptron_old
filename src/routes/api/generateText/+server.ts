

// import * as AI from '$lib/funcs/server/AI/index'



function makeid(length:number):string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


export const POST = async ({request}) => {

    let input = await request.json()
    const problem:string|null = input.problem
    const sampleText:string|null = input.sampleText

    if(problem == null || sampleText==null){
        return new Response(JSON.stringify({errorMessage: "There was a problem with input"}), { status: 500 });
    }
  
    return new Response("id:"+makeid(10), {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        }
    });
}




// export const POST = async ({request}) => {

//     let input = await request.json()
//     const text:string = input.detector
//     const detector:Detector = input.detector

// 	// check validness

//     // generateText
//     // let streamFunction = await AI.createComparisonStream(products, selectedFeatures)
//     // if(!streamFunction){
//     //     return new Response("AI response Failed",{status:400})
//     // }
//     // let response = await streamFunction()
    
//     // return new Response(response.body, {
//     //     headers: {
//     //         'Content-Type': 'text/event-stream'
//     //     }
//     // });


//     const response:DetectorResponse = {
//         errorMessage:null,
//         hasSucceeded:true
//     }
//     return json(response)
// };
