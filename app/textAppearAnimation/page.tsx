import Paragraph from "@/app/textAppearAnimation/_components/Paragraph";
import Word from "@/app/textAppearAnimation/_components/Word";
import Charachter from "@/app/textAppearAnimation/_components/Character";

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout";
export default function Home() {
  return (
    <>
      <main>
        <div style={{ height: "100vh" }}></div>
        <Paragraph paragraph={paragraph} />
        <div style={{ height: "100vh" }}></div>
        <Word paragraph={paragraph} />
        <div style={{ height: "100vh" }}></div>
        <Charachter paragraph={paragraph} />
        <div style={{ height: "100vh" }}></div>
      </main>
    </>
  );
}
