import { Button } from "../_components/button";
import { Container } from "../_components/container";

export const Question = () => {
  return (
    <section className="bg-blue-ultra-light py-44">
      <Container className="flex flex-col items-center justify-center text-blue-dark">
        <h2 className=" text-[2.585rem] mb-5 leading-tight font-dm-sans">
          Need professional legal advice?
        </h2>
        <p className="text-[1.435rem] mb-10 leading-relaxed">Get a free consultation with our legal experts</p>
        <Button blue>Request Consultation</Button>
      </Container>
    </section>
  );
};
