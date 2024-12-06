import { Container } from "../_components/container";

export const Carusel = () => {
  return (
    <section className="py-60">
      <Container className="flex justify-center">
        <div className="flex max-w-4xl gap-6 flex-col items-center px-28">
          <h3 className="text-center font-dm-serif text-3xl leading-relaxed text-blue-deep">
            The team at McKinley always delivers thoughtful and professional
            legal services in a timely manner.
          </h3>

          <p className="leading-loose text-blue-dark">
            John Smith, Tax Law Client
          </p>
        </div>
      </Container>
    </section>
  );
};
