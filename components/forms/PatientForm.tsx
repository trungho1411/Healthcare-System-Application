"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATEPICKER = 'datepicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}

const PatientForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
        setIsLoading(true)

        try {
            // const userData = { name, email, phone };

            // const user = await createUser(userData);

            // if(user) router.push(`/patients/${user.$id}/register`)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                    <section className="mb-12 space-y-4">
                        <h1 className="header">Hello 👋</h1>
                        <p className="text-dark-700">Schedule your first appoinment now✎</p>

                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            control={form.control}
                            name="name"
                            label="Full name"
                            placeholder="Trung Ho"
                            iconSrc="/assets/icons/user.svg"
                            iconAlt="user"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            control={form.control}
                            name="email"
                            label="Email"
                            placeholder="trungho6868@gmail.com"
                            iconSrc="/assets/icons/email.svg"
                            iconAlt="email"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.PHONE_INPUT}
                            control={form.control}
                            name="phone"
                            label="Phone number"
                            placeholder="+358 44 123-4567"
                        />
                    </section>
                    <SubmitButton isLoading={isLoading}>
                        Get Started
                    </SubmitButton>
                </form>
            </Form>
        </div>
    )
}

export default PatientForm