import { z } from 'zod'








export const signinSchema = z.object({
	email: z.string().email(),
	password: z.string().min(4),
})


export const signupSchema = z.object({
	name: z.string().optional(),
	email: z.string().email(),
	password: z.string().min(4),
})


export const generatorSchema = z.object({
	name: z.string().optional(),
	email: z.string().email(),
	password: z.string().min(4),
})

export const personalizationSchema = z.object({
	writingStyle: z.string().min(4),
	useCase: z.string().min(4),
})