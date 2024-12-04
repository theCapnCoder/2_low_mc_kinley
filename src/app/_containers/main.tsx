import Image from "next/image";
import { Button } from "../_components/button";
import Building from "../../../public/images/building.png";

export const Main = () => {
  return (
    <section className="bg-blue-ultra-light">
      <div className="grid grid-cols-[60%,40%] ">
        <div className="pl-20 pt-36">
          <div className="title-primary mb-4 max-w-[20ch] tracking-tighter">
            Corporate Legal Representation
          </div>
          <div className="text-body mb-12 max-w-[35ch]">
            We understand the difficulties and stress that your legal issues
            bring. Our team is committed to providing you with the individual
            attention, communication, and dedication you deserve.
          </div>
          <Button blue className="mb-40">
            Request Consultation
          </Button>
        </div>

        <div className="relative bg-blue-dark">
          <div>
            <Image
              src={Building}
              alt="Building"
              width={900}
              className="absolute left-[-17%] top-[12%] scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
