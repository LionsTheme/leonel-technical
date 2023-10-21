import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronDownIcon, WalletIcon } from "@/components/icon";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Componente principal que muestra ejemplos de los distintos botones con diferentes variantes y estilos.
 */
export default function Buttons() {
  return (
    <main className="flex min-h-screen">
      <div className="container flex justify-center">
        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          <Link
            className={buttonVariants({ variant: "outline", types: "primary" })}
            href="/"
          >
            <ArrowLeft />
            Cards
          </Link>
          <article className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-bold">Button Primary</h2>
            <section className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-full gap-6">
              <Button withIcon>
                <ChevronDownIcon />
              </Button>
              <Button withIcon>
                <WalletIcon />
                Button
              </Button>
              <Button withIcon>
                Button
                <WalletIcon />
              </Button>
              <Button>Button</Button>
              <Button variant={"outline"}>Button</Button>
            </section>
            <section className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-full gap-6">
              <Button withIcon disabled>
                <ChevronDownIcon />
              </Button>
              <Button withIcon disabled>
                <WalletIcon />
                Button
              </Button>
              <Button withIcon disabled>
                Button
                <WalletIcon />
              </Button>
              <Button disabled>Button</Button>
              <Button variant="outline" disabled>
                Button
              </Button>
            </section>
          </article>
          <article className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-bold">Button Accent</h2>
            <section className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-full gap-6">
              <Button types="accent" withIcon>
                <ChevronDownIcon />
              </Button>
              <Button types="accent" withIcon>
                <WalletIcon />
                Button
              </Button>
              <Button types="accent" withIcon>
                Button
                <WalletIcon />
              </Button>
              <Button types="accent">Button</Button>
              <Button types="accent" variant={"outline"}>
                Button
              </Button>
            </section>
            <section className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-full gap-6">
              <Button types="accent" withIcon disabled>
                <ChevronDownIcon />
              </Button>
              <Button types="accent" withIcon disabled>
                <WalletIcon />
                Button
              </Button>
              <Button types="accent" withIcon disabled>
                Button
                <WalletIcon />
              </Button>
              <Button types="accent" disabled>
                Button
              </Button>
              <Button types="accent" variant="outline" disabled>
                Button
              </Button>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
