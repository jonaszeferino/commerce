import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <h1>Player Reviews</h1>
      <br />
      <Link href="/commerce">
        <a>Estoque Commerce</a>
      </Link>
      <br />
      <Link href="/oms">
        <a>Reservas OMS</a>
      </Link>
    </div>
  );
}
