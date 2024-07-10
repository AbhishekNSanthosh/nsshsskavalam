import HomePage from "@widgets/Home";
import Image from "next/image";

export const metadata = {
  title: "Welcome to NSS HSS Kavalam",
  description: "NSS HSS KAVALAM was established in 1927 and it is managed by the Pvt. Aided. It is located in Rural area. It is located in VELIYANADU block of ALAPPUZHA district of Kerala. The school consists of Grades from 5 to 12. The school is Co-educational and it doesn't have an attached pre-primary section. The school is Not Applicable in nature and is not using school building as a shift-school. Malayalam is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April.",
};

export default function Home() {
  return <HomePage />;
}
