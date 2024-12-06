import { Areas } from "./_containers/areas";
import { Carusel } from "./_containers/carusel";
import { Footer } from "./_containers/footer";
import { Header } from "./_containers/header";
import { Main } from "./_containers/main";
import { Personalize } from "./_containers/personalize";
import { Question } from "./_containers/question";
import { Recent } from "./_containers/recent";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Header />
      <Main />
      <Areas />
      <Personalize />
      <Carusel />
      <Recent />
      <Question />
      <Footer />
    </div>
  );
}
