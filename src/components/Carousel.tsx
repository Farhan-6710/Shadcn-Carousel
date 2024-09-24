import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import companies from "@/data/companies.json";

export default function CarouselSize() {
  return (
    <div>
      <div>
        <h2 className="flex justify-center items-center font-bold text-4xl uppercase py-8 font-eczar text-center">
          {" "}
          Shadcn Carousel{" "}
        </h2>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {companies.map((company, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5 h-fit"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold font-eczar uppercase">
                      {company.name}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
