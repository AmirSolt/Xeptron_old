import { z } from 'zod'
import {deletePromptConst} from '$lib/utils/config'







export const signinSchema = z.object({
	email: z.string().email(),
	password: z.string().min(4),
})


export const signupSchema = z.object({
	name: z.string().optional(),
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


export const generatorSchema = z.object({
	name: z.string().optional(),
	email: z.string().email(),
	password: z.string().min(4),
})

export const personalizationSchema = z.object({
	name: z.string().min(1).optional(),
	writing_style: z.string().min(4).optional(),
	use_case: z.string().min(4).optional(),
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
