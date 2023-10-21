import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CardType } from "@/types";
import { buttonVariants } from "@/components/ui/button";

async function getData() {
  const res = await fetch("https://demo8881327.mockable.io/promarketing");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen pt-8">
      <div className="container flex justify-center">
        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          <Link
            className={buttonVariants({ variant: "outline", types: "primary" })}
            href="/buttons"
          >
            Buttons
            <ArrowRight />
          </Link>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-3 lg:gap-6">
            {data.map((item: CardType) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
