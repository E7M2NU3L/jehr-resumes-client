import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Payments() {
  return (
    <Card className="mb-[3.5rem]">
      <CardHeader>
        <CardTitle>Previous Payments</CardTitle>
        <CardDescription>View your past payment history.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2023-06-15</TableCell>
              <TableCell>$49.99</TableCell>
              <TableCell>Visa ending in 1234</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023-05-01</TableCell>
              <TableCell>$99.99</TableCell>
              <TableCell>PayPal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023-04-20</TableCell>
              <TableCell>$24.99</TableCell>
              <TableCell>Mastercard ending in 5678</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023-03-10</TableCell>
              <TableCell>$79.99</TableCell>
              <TableCell>Bank Transfer</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023-02-01</TableCell>
              <TableCell>$59.99</TableCell>
              <TableCell>Visa ending in 9012</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}