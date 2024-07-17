"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../ui/CustomFormField"

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATEPICKER = 'datepicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const PatientForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
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
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default PatientForm