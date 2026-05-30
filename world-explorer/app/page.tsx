import Link from "next/link";

export default function HomePage() {

  return (

    <main>

      <h1>
        World Explorer
      </h1>

      <p>

        Explore countries around the world.

      </p>

      <Link href="/countries">

        Explore Countries

      </Link>

    </main>

  );

}