import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export default function Jobs() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="relative ml-auto flex-1 md:grow-0">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search jobs..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
      </header>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-4 md:pl-6">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-[240px_1fr]">
          <div className="flex flex-col gap-4 items-start py-2">
            <h1 className="font-normal text-xl md:text-3xl text-dark-5" style={{
              fontFamily: "Anton SC, sans-serif",
              letterSpacing: 1
            }}>
              Categories
            </h1>
            <div className="grid gap-1" style={{
              fontFamily: "Baskervville SC, serif"
            }}>
              <Link href="#" className="font-semibold" prefetch={false}>
                Software Engineering
              </Link>
              <Link href="#" className="font-semibold" prefetch={false}>
                Marketing
              </Link>
              <Link href="#" className="font-semibold" prefetch={false}>
                Design
              </Link>
              <Link href="#" className="font-semibold" prefetch={false}>
                Sales
              </Link>
              <Link href="#" className="font-semibold" prefetch={false}>
                Finance
              </Link>
              <Link href="#" className="font-semibold" prefetch={false}>
                Human Resources
              </Link>
              <Link href="#" className="font-semibold" prefetch={false}>
                Operations
              </Link>
              <Link href="#" className="font-semibold" prefetch={false}>
                Customer Service
              </Link>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="location">
                <AccordionTrigger className="text-base">Location</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="location-remote" /> Remote
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="location-onsite" /> On-site
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="location-hybrid" /> Hybrid
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="job-type">
                <AccordionTrigger className="text-base">Job Type</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="job-type-full-time" /> Full-time
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="job-type-part-time" /> Part-time
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="job-type-contract" /> Contract
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="job-type-internship" /> Internship
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="experience">
                <AccordionTrigger className="text-base">Experience</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="experience-entry-level" /> Entry-level
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="experience-mid-level" /> Mid-level
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="experience-senior-level" /> Senior-level
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="grid gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="grid gap-1">
                <h1 className="tracking-tight font-normal text-xl md:text-3xl text-dark-5" style={{
              fontFamily: "Anton SC, sans-serif",
              letterSpacing: 1
            }}>Find Your Dream Job</h1>
                <p className="text-muted-foreground">
                  Explore a wide range of job opportunities and find the perfect fit for you.
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="ml-auto shrink-0">
                    <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                    Sort by
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]" align="end">
                  <DropdownMenuRadioGroup value="featured">
                    <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="salary-low-to-high">Salary: Low to High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="salary-high-to-low">Salary: High to Low</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <Card>
                  <CardHeader className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <img src="/images/card-image.png" alt="Company logo" width={40} height={40} className="rounded-full" />
                      <div className="font-medium">Acme Inc.</div>
                    </div>
                    <h3 className="font-semibold tracking-tight">Senior Software Engineer</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPinIcon className="w-4 h-4" />
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BriefcaseIcon className="w-4 h-4" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSignIcon className="w-4 h-4" />
                      <span>$120,000 - $150,000</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={"/jobs/:id"} className="font-normal px-4 py-1 border border-black hover:translate-y-1 active:-translate-y-1 active:scale-105 transition-all ease-in-out duration-200 text-black hover:bg-black/10" style={{
                      fontFamily: "Anton SC, sans-serif",
                      letterSpacing: 1
                    }}>
                      Apply Now
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <Card>
                  <CardHeader className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <img src="/images/card-image.png" alt="Company logo" width={40} height={40} className="rounded-full" />
                      <div className="font-medium">Globex Corp.</div>
                    </div>
                    <h3 className="font-semibold tracking-tight">Marketing Manager</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPinIcon className="w-4 h-4" />
                      <span>New York, NY</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BriefcaseIcon className="w-4 h-4" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSignIcon className="w-4 h-4" />
                      <span>$80,000 - $100,000</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={"/jobs/:id"} className="font-normal px-4 py-1 border border-black hover:translate-y-1 active:-translate-y-1 active:scale-105 transition-all ease-in-out duration-200 text-black hover:bg-black/10" style={{
                      fontFamily: "Anton SC, sans-serif",
                      letterSpacing: 1
                    }}>
                      Apply Now
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <Card>
                  <CardHeader className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <img src="/images/card-image.png" alt="Company logo" width={40} height={40} className="rounded-full" />
                      <div className="font-medium">Stark Industries</div>
                    </div>
                    <h3 className="font-semibold tracking-tight">UX Designer</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPinIcon className="w-4 h-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BriefcaseIcon className="w-4 h-4" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSignIcon className="w-4 h-4" />
                      <span>$90,000 - $120,000</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={"/jobs/:id"} className="font-normal px-4 py-1 border border-black hover:translate-y-1 active:-translate-y-1 active:scale-105 transition-all ease-in-out duration-200 text-black hover:bg-black/10" style={{
                      fontFamily: "Anton SC, sans-serif",
                      letterSpacing: 1
                    }}>
                      Apply Now
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <Card>
                  <CardHeader className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <img src="/images/card-image.png" alt="Company logo" width={40} height={40} className="rounded-full" />
                      <div className="font-medium">Umbrella Corp.</div>
                    </div>
                    <h3 className="font-semibold tracking-tight">Sales Representative</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPinIcon className="w-4 h-4" />
                      <span>Chicago, IL</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BriefcaseIcon className="w-4 h-4" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSignIcon className="w-4 h-4" />
                      <span>$50,000 - $70,000</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={"/jobs/:id"} className="font-normal px-4 py-1 border border-black hover:translate-y-1 active:-translate-y-1 active:scale-105 transition-all ease-in-out duration-200 text-black hover:bg-black/10" style={{
                      fontFamily: "Anton SC, sans-serif",
                      letterSpacing: 1
                    }}>
                      Apply Now
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <Card>
                  <CardHeader className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <img src="/images/card-image.png" alt="Company logo" width={40} height={40} className="rounded-full" />
                      <div className="font-medium">Wayne Enterprises</div>
                    </div>
                    <h3 className="font-semibold tracking-tight">Financial Analyst</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPinIcon className="w-4 h-4" />
                      <span>Los Angeles, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BriefcaseIcon className="w-4 h-4" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSignIcon className="w-4 h-4" />
                      <span>$70,000 - $90,000</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={"/jobs/:id"} className="font-normal px-4 py-1 border border-black hover:translate-y-1 active:-translate-y-1 active:scale-105 transition-all ease-in-out duration-200 text-black hover:bg-black/10" style={{
                      fontFamily: "Anton SC, sans-serif",
                      letterSpacing: 1
                    }}>
                      Apply Now
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <Card>
                  <CardHeader className="flex flex-col gap-2">
                    <div className="flex items" />
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function ArrowUpDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}


function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}