import { SSE } from 'sse.js';





export function getSSE(problem:string|null, sampleText:string|null, newContentCallback:Function=()=>{}, overCallback:Function=()=>{}, errorCallback:Function=()=>{}): SSE | null {
    try{
		return getSSEResponse(problem, sampleText, newContentCallback, overCallback, errorCallback)
	}catch(err){
		console.log(err)
		return null
	}
}


function getSSEResponse(problem:string|null, sampleText:string|null, newContentCallback: Function, overCallback: Function, errorCallback: Function): SSE  {
	function handleError<T>(err: T) {
		errorCallback(err)
	}

	const eventSource = new SSE(`/api/generateText`, {
		headers: {
			'Content-Type': 'application/json'
		},
		payload: JSON.stringify({
			problem,
			sampleText
		})
	})

	eventSource.addEventListener('error', handleError)
	eventSource.addEventListener('message', (e) => {
		try {
			if (e.data === '[DONE]') {
				overCallback()
				return
			}

			console.log(">>>>",e)
			const completionResponse = JSON.parse(e.data)
			const [{ delta }] = completionResponse.choices

			if (delta.content) {
				newContentCallback(delta.content)
			}
		} catch (err) {
			handleError(err)
		}
	})

	// eventSource.stream()
	return eventSource
}
