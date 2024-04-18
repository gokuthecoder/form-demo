import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from './components/ui/button'
import { toast } from 'react-toastify'
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"

export const Forms = () => {

    const [FormData, setFormData] = useState({ firstName: "", secondName: "", email: "", Country: "", street: "", city: "", state: "", zip: "", Comments: "" })
    console.log(FormData)
    function changeHandler(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
            }
        })
    }

    function submitHandler(e) {
        e.preventDefault()
        toast.success('Submitted Successfully!');
        console.log("Form Submitted Successfully");
    }

    return (
        <>
            <div className='py-6'>
                <div className='lg:w-[960px] mx-auto rounded border-slate-300 first:border-2 sm:px-10 md:px-6 '>
                    <form onSubmit={submitHandler} className='my-4'>
                        
                        <div className='my-2' />
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="gokuthecoder"
                            value={FormData.firstName}
                            onChange={changeHandler}
                        />

                        <div className='my-2' />

                        <Label htmlFor="secondName">Second name</Label>
                        <Input
                            type="text"
                            name="secondName"
                            id="secondName"
                            placeholder="kakarot"
                            onChange={changeHandler}
                            value={FormData.secondName}
                        />

                        <div className='my-2' />

                        <Label htmlFor="email">Email address</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="goku@duck.com"
                            onChange={changeHandler}
                        />

                        <div className='my-2' />

                        <Label htmlFor="country">Country</Label>
                        <Select
                            name="country"
                            id="country"
                            value={FormData.country}
                            onValueChange={(e) => {
                                setFormData(prevFormData => {
                                    return {
                                        ...prevFormData, Country: e
                                    }
                                })
                            }}
                        >
                            <SelectTrigger >
                                <SelectValue placeholder="select country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Israel">Israel</SelectItem>
                                <SelectItem value="Russia">Russia</SelectItem>
                                <SelectItem value="U.S.A">U.S.A</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className='my-2' />

                        <Label htmlFor="street">Street address</Label>
                        <Input
                            type="text"
                            id="street"
                            name="street"
                            placeholder="Patna G.P.O."
                            onChange={changeHandler}
                        />

                        <div className='my-2' />

                        <Label htmlFor="city">City</Label>
                        <Input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Patna"
                            onChange={changeHandler}
                        />

                        <div className='my-2' />

                        <label htmlFor="state">State / Province</label>
                        <Input
                            type="text"
                            name="state"
                            id="state"
                            placeholder="Bihar"
                            onChange={changeHandler}
                        />

                        <div className='my-2' />

                        <label htmlFor="zip">ZIP / Postal code</label>
                        <Input
                            type="text"
                            name="zip"
                            id="zip"
                            placeholder="80011"
                            onChange={changeHandler}
                        />

                        <p className='text-sm font-semibold'>By Email</p>

                        <br />

                        {/* checkBox section start from here */}
                        {/* checkBox section start from here */}

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                type="checkbox"
                                id="Comments"
                                name="Comments"
                                onCheckedChange={(e) => {
                                    setFormData(prevFormData => ({ ...prevFormData, Comments: e }))
                                }}
                            />
                            <label htmlFor="Comments" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> Comments</label>

                            <br />
                        </div>
                        <p className='text-sm text-muted-foreground ml-5'>Get notified when someones posts a comment on a posting.</p>

                        <br />

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="Candidate"
                                name="Candidate"
                                onCheckedChange={(e) => {
                                    setFormData(prevFormData => ({ ...prevFormData, Candidate: e }))
                                }}
                            />
                            <label
                                htmlFor="Candidate"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Candidates
                            </label>
                        </div>
                        <p className='text-sm text-muted-foreground ml-5'>Get notified when a candidate applies for a job.</p>
                        <br />

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="Offers"
                                onCheckedChange={(e) => {
                                    setFormData(prevFormData => ({ ...prevFormData, Offers: e }))
                                }}
                            />
                            <label
                                htmlFor="Offers"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Offers
                            </label>

                            <br />

                        </div>

                        {/* checkBox section end  here */}
                        {/* checkBox section end  here */}

                        <p className='text-sm text-muted-foreground ml-5'>Get notified when a candidate accepts or rejects an offer.</p>

                        <br />

                        <p className='text-sm font-semibold'>Push Notifications</p>
                        <p className='text-sm text-muted-foreground '>These are delivered via SMS to your mobile phone.</p>

                        <br />

                        <RadioGroup
                            defaultValue="comfortable"
                            onValueChange={(e) => {
                                setFormData(prevFormData => ({
                                    ...prevFormData, comfortable: e
                                }))
                            }}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="everything" id="r1" />
                                <Label htmlFor="r1">Everything</Label>
                            </div>
                            <div className='my-1' />
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Same-as-email" id="r2" />
                                <Label htmlFor="r2">Same as email</Label>
                            </div>
                            <div className='my-1' />
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="No-push-notifications" id="r3" />
                                <Label htmlFor="r3">No push notifications</Label>
                            </div>
                        </RadioGroup>
                        <div className='my-2' />

                        <Button className="font-bold bg-[#3b82f6] hover:bg-[#1d4ed8] ">Save</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
