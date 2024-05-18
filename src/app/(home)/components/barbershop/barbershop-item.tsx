import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Barbershop } from "@prisma/client"
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";


type BarbershopItemProps = {
    barbershop: Barbershop
}

export function BarbershopItem({ barbershop }: BarbershopItemProps) {
    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 py-0">
                <div className="h-[159px] w-full relative">
                    <div className="absolute top-2 left-2 z-50">
                        <Badge variant="secondary" className="flex gap-1 items-center justify-center opacity-90">
                            <Star size={12} className="fill-primary text-primary" />
                            <span className="tex-xs">5.0</span>
                        </Badge>
                    </div>
                    <Image
                        src={barbershop.imageUrl}
                        alt={barbershop.name}
                        fill
                        style={{
                            objectFit: "cover"
                        }}
                        className="rounded-2xl"
                    />
                </div>
                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button variant="secondary" className="w-full mt-3">Reservar</Button>
                </div>
            </CardContent>
        </Card>
    )
}