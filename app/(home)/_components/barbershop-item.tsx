import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
    barbershop: Barbershop;
}

const BarbershopItem = ({barbershop}: BarbershopItemProps) => {
    return ( 
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="p-1">
                <div className="px-1 mx-auto h-[159px] relative">
                    <div className="absolute top-1 left-1 z-50">
                        <Badge variant="secondary" className="opacity-90 flex gap-2 items-center top-1 left-1">
                            <StarIcon size={12} className="fill-primary text-primary"/>
                            <span className="text-xs">5,0</span>
                        </Badge>
                    </div>
                    <Image
                        alt={barbershop.name}
                        src={barbershop.imageUrl}
                        style={{
                            objectFit: "cover"
                        }}
                        fill
                        className="rounded-xl"
                    />
                </div>
                <div className="px-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button className="w-full mt-3 rounded-xl" variant="secondary">Reservar</Button>  
                </div>
                
            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;