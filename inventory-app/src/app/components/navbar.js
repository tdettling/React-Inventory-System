import Link from "next/link";
// Predicitng these links:

//        <li><Link href="/orders">Orders</Link></li>
//        <li><Link href="/customers">Customers</Link></li>
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/inventory">Inventory</Link></li>

      </ul>
    </nav>
  );
}
