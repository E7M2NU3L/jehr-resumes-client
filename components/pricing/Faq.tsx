import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-dark-5" style={{
                fontFamily: "Anton SC, serif",
                letterSpacing: 1
            }}>Frequently Asked Questions</h2>
            <p className="mt-2 text-muted-foreground" style={{
                fontFamily: "Baskervville SC, serif"
            }}>Get answers to your pricing-related questions.</p>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="pricing">
              <AccordionTrigger className="text-lg font-medium">How does your pricing work?</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our pricing is based on the number of users and the features you need. We offer a range of plans to
                    fit different business sizes and requirements. You can choose a plan that best suits your needs and
                    scale up or down as your business grows.
                  </p>
                  <p>
                    All of our plans include the same core features, with additional features and support options
                    available at higher tiers. You can view our full pricing details on the Pricing page.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="discounts">
              <AccordionTrigger className="text-lg font-medium">Do you offer discounts?</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>Yes, we offer several types of discounts to help make our platform more accessible:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Annual billing discount: Save 10% when you pay annually instead of monthly.</li>
                    <li>Referral program: Earn a 10% discount for each new customer you refer.</li>
                  </ul>
                  <p>You can learn more about our discounts and eligibility requirements on the Pricing page.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="payments">
              <AccordionTrigger className="text-lg font-medium">What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We accept a variety of payment methods to make it easy for you to pay for our services. You can pay
                    with:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Credit/debit cards (Visa, Mastercard, American Express)</li>
                    <li>PayPal</li>
                    <li>Bank transfer</li>
                    <li>Apple Pay</li>
                    <li>Google Pay</li>
                  </ul>
                  <p>
                    All of our payment transactions are secured with industry-standard encryption to protect your
                    financial information.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cancellation">
              <AccordionTrigger className="text-lg font-medium">
                Can I cancel my subscription at any time?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Yes, you can cancel your subscription at any time. We don't lock you into long-term contracts, and
                    there are no cancellation fees.
                  </p>
                  <p>
                    If you cancel your subscription, you will continue to have access to our platform until the end of
                    your current billing cycle. After that, your account will be downgraded to the free plan, and you'll
                    lose access to any premium features.
                  </p>
                  <p>
                    To cancel your subscription, simply log into your account and navigate to the Billing section. From
                    there, you can downgrade or cancel your plan.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}