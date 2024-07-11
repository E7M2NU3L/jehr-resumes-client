"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import React, { ChangeEvent, useState } from "react";
import { GiBottomRight3dArrow } from "react-icons/gi";

type PaymentMethod = "credit-card" | "paypal" | "phone-pe" | "google-pay" | "apple-pay" | "";

const UpdatePayment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("");

  const handlePaymentChange = (value: string) => {
    setPaymentMethod(value as PaymentMethod);
  };

  return (
    <div>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
        <div className="grid gap-6">
          <Card className="max-w-lg w-full lg:max-w-4xl md:max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="mobile-number">number</Label>
                  <Input id="mobile-number" type="number" placeholder="Enter your mobile number" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter your address" rows={3} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="payment">Payment Method</Label>
                  <Select onValueChange={handlePaymentChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit-card">Credit Card</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="phone-pe">Phone Pe</SelectItem>
                      <SelectItem value="google-pay">Google Pay</SelectItem>
                      <SelectItem value="apple-pay">Apple Pay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {paymentMethod === "credit-card" && (
                  <div className="grid gap-2">
                    <Label htmlFor="card-number">Credit Card Number</Label>
                    <Input id="card-number" type="text" placeholder="Enter your credit card number" />
                    <Label htmlFor="expiry-date">Expiry Date</Label>
                    <Input id="expiry-date" type="text" placeholder="MM/YY" />
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" type="text" placeholder="Enter CVV" />
                  </div>
                )}
                {(paymentMethod === "phone-pe" || paymentMethod === "google-pay" || paymentMethod === "paypal") && (
                  <div className="grid gap-2">
                    <Label htmlFor="upi-id">UPI ID</Label>
                    <Input id="upi-id" type="text" placeholder="Enter your UPI ID" />
                  </div>
                )}
                {paymentMethod === "apple-pay" && (
                  <div className="grid gap-2">
                    <Label htmlFor="apple-pay">Apple Pay Information</Label>
                    <Input id="apple-pay" type="text" placeholder="Enter your Apple Pay information" />
                  </div>
                )}
                <Button variant="primary" type="submit" className="w-full">
                  Buy
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Plan Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <main className="min-h-[20vh] cursor-pointer max-w-md shadow-xl hover:shadow-2xl rounded-lg hover:rounded-xl hover:scale-105 hover:translate-x-1 px-[1rem] py-[1.3rem] transition-all duration-300 ease-in-out">
                <Badge
                  className="font-medium bg-dark-5"
                  style={{
                    fontFamily: "Baskervville SC, serif",
                  }}
                >
                  One month
                </Badge>
                <h1
                  className="text-2xl pt-[0.9rem] md:text-4xl font-bold"
                  style={{
                    fontFamily: "Anton SC, sans-serif",
                  }}
                >
                  $ 12.99/Mo
                </h1>

                <Separator className="my-4" />

                <section className="flex flex-col gap-y-3 pb-[1.3rem]">
                  <h1
                    style={{
                      fontFamily: "Baskervville SC, serif",
                    }}
                  >
                    This Pricing if for a single resume purchase, in which you can have
                  </h1>

                  <ul>
                    <li className="flex text-xl items-center gap-x-2">
                      <GiBottomRight3dArrow />
                      <span
                        className=""
                        style={{
                          fontFamily: "Baskervville SC, serif",
                        }}
                      >
                        Unlimited Resume Downloads
                      </span>
                    </li>
                    <li className="flex text-xl items-center gap-x-2">
                      <GiBottomRight3dArrow />
                      <span
                        className=""
                        style={{
                          fontFamily: "Baskervville SC, serif",
                        }}
                      >
                        Inbuilt Resume Builder
                      </span>
                    </li>
                    <li className="flex text-xl items-center gap-x-2">
                      <GiBottomRight3dArrow />
                      <span
                        className=""
                        style={{
                          fontFamily: "Baskervville SC, serif",
                        }}
                      >
                        Jobs Search
                      </span>
                    </li>
                    <li className="flex text-xl items-center gap-x-2">
                      <GiBottomRight3dArrow />
                      <span
                        className=""
                        style={{
                          fontFamily: "Baskervville SC, serif",
                        }}
                      >
                        Clear Exports
                      </span>
                    </li>
                    <li className="flex text-xl items-center gap-x-2">
                      <GiBottomRight3dArrow />
                      <span
                        className=""
                        style={{
                          fontFamily: "Baskervville SC, serif",
                        }}
                      >
                        More Custom Templates
                      </span>
                    </li>
                  </ul>
                </section>

                <section className="flex items-center gap-x-3">
                  <Button
                    variant={"destructive"}
                    className="text-white"
                    style={{
                      fontFamily: "Anton SC, sans-serif",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="font-medium"
                    variant={"secondary"}
                    style={{
                      fontFamily: "Anton SC, sans-serif",
                    }}
                  >
                    Try Yearly <span className="text-green-700 ps-2">-10%</span>
                  </Button>
                </section>
              </main>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default UpdatePayment;
