import Image from "next/image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ButtonUsage from "@/components/ui/button";
import BarsDataset from "@/components/ui/chart";

export default function Cart({ params }: { params: { slug: string[] } }) {
  if (params.slug.length != 1) {
    return 404;
  }
  switch (params.slug[0]) {
    case "first":
      return <h1>First</h1>;
    case "second":
      return <h1>Second</h1>;
    default:
      return 404;
  }
}
