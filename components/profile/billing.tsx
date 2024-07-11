import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import Link from 'next/link'

const Bills = () => {
  return (
    <div className="grid gap-6 max-w-7xl mx-auto py-[4rem]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tighter md:text-4xl text-dark-5" style={{
          fontFamily: "Anton SC, serif",
          letterSpacing: 1
        }}>Billing</h1>
        <Button variant="outline" size="sm">
            <Link href={"/billing/update"}>
            Update Payment
            </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-normal tracking-tighter md:text-2xl" style={{
          fontFamily: "Anton SC, serif",
          letterSpacing: 1
        }}>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm">
            <div>
              <div className="font-medium">Liam Johnson</div>
              <div className="text-muted-foreground">1234 Main St, Anytown CA 12345</div>
            </div>
            <Separator />
            <div>
              <div className="font-medium">Email</div>
              <div className="text-muted-foreground">
                <Link href="#" prefetch={false}>
                  liam@acme.com
                </Link>
              </div>
            </div>
            <Separator />
            <div>
              <div className="font-medium">Phone</div>
              <div className="text-muted-foreground">
                <Link href="#" prefetch={false}>
                  +1 (234) 567-8901
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-normal tracking-tighter md:text-2xl" style={{
          fontFamily: "Anton SC, serif",
          letterSpacing: 1
        }}>Subscription Plan</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm">
            <div>
              <div className="font-medium">Pro Plan</div>
              <div className="text-muted-foreground">$99/month, billed annually</div>
            </div>
            <Separator />
            <div>
              <div className="font-medium">Next Renewal</div>
              <div className="text-muted-foreground">June 23, 2024</div>
            </div>
            <Separator />
            <div>
              <div className="font-medium">Status</div>
              <div className="text-muted-foreground">Active</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-normal tracking-tighter md:text-2xl" style={{
          fontFamily: "Anton SC, serif",
          letterSpacing: 1
        }}>Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm">
            <div>
              <div className="font-medium">Visa **** 4532</div>
              <div className="text-muted-foreground">Expires 06/2025</div>
            </div>
            <Separator />
            <div>
              <div className="font-medium">Payment Provider</div>
              <div className="text-muted-foreground">Google Pay</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Bills