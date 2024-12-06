import React from "react";
import { Container } from "../_components/container";
import Man from "../../../public/images/man.jpg";
import Image from "next/image";
import { Button } from "../_components/button";

export const Personalize = () => {
  return (
    <section>
      <Container className="relative">
        <Image src={Man} alt="Man" />

        <div className="absolute bottom-0 right-0 bg-blue-dark py-16 pl-12 pr-20">
          <h3 className="mb-4 max-w-[16ch] font-dm-serif text-[2.188rem] leading-tight text-gray-light">
            Personalized Legal Services
          </h3>
          <p className="mb-16 max-w-[24ch] text-lg leading-loose text-gray-light">
            One size does not fit all when it comes to your legal needs. We
            craft a team and strategy specific to your desired outcome.
          </p>
          <Button white>About Our Firm</Button>
        </div>
      </Container>
    </section>
  );
};
