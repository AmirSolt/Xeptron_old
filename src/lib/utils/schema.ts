import { z } from 'zod'
import {deletePromptConst, Occupations} from '$lib/utils/config'






export const signinSchema = z.object({
	email: z.string().email(),
	password: z.string().min(4),
})


export const signupSchema = z.object({
	first_name: z.string().min(1).optional(),
	last_name: z.string().min(1).optional(),
	email: z.string().email(),
	password: z.string().min(4),
})


export const initResetPassSchema = z.object({
	email: z.string().email(),
})
export const verifyOTPSchema = z.object({
	email: z.string().email(),
	token: z.string().min(1),
})
export const resetPassSchema = z.object({
	newPassword: z.string().min(4),
	confirmPassword: z.string().min(4),
}).superRefine(({ confirmPassword, newPassword }, ctx) => {
	if (confirmPassword !== newPassword) {
	  ctx.addIssue({
		code: "custom",
		message: "The passwords did not match"
	  });
	}
});



export const personalizationSchema = z.object({
	first_name: z.string().optional(),
	last_name: z.string().optional(),
	occupation: z.nativeEnum(Occupations).optional(),
})

export const deleteUserSchema = z.object({
	deletePrompt: z.string().min(1),
}).superRefine(({ deletePrompt }, ctx) => {
	if (deletePrompt !== deletePromptConst) {
	  ctx.addIssue({
		code: "custom",
		message: "The prompts did not match"
	  });
	}
});

export const pricingSchema = z.object({
	priceId:z.string().min(1)
})