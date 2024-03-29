import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Header } from "@/components/header/header";
import { InputField } from "./components/input/input";
import { BookingItem } from "@/components/booking/booking-item";
import { SectionTitle } from "@/components/sectiontitle/Section-Title";

export default function Home() {
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
    </div>
  );
}
