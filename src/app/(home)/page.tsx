import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Header } from "@/components/header/header";
import { InputField } from "./components/input/input";
import { BookingItem } from "@/components/booking/booking-item";
import { SectionTitle } from "@/components/sectiontitle/Section-Title";
import { db } from "@/lib/prisma";
import { BarbershopItem } from "./components/barbershop/barbershop-item";
import { Footer } from "@/components/footer";

export default async function Home() {

  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Jenilson</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <InputField />
      </div>
      <div className="px-5 mt-6">
        <SectionTitle title="Agendamentos" />
        <BookingItem />
      </div>
      <div className="px-5 mt-6">
        <SectionTitle title="Recomendados" />
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scroller]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <div className="px-5 mt-6 mb-[4.5rem]">
        <SectionTitle title="Populares" />
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scroller]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
