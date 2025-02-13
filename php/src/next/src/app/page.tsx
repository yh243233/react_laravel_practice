import Welcome from "./_components/Welcome";
import { Metadata } from "next";

// webページに公開される際の物
// Metadataの方は既にnext側で型の指定が行われている物を引っ張ってきている。
export const metadata: Metadata = {
  title: "Echo Social App",
  description:
    "Stay updated with news from your friends! Create a profile, bookmark favorites, and receive notifications. Interact with others and share your own updates!",
  openGraph: {
    title: "Echo Social App",
    description:
      "Stay updated with news from your friends! Create a profile, bookmark favorites, and receive notifications. Interact with others and share your own updates!",
    url: "https://echoloop.vercel.app/",
    siteName: "Echo your thoughts",
    images: [
      {
        url: "https://res.cloudinary.com/soberzml/image/upload/v1723647221/trinedev/echohome_xndxks.png",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
  },
};

// Next.js 13以降ではファイルベースのルーティングが採用されている。
function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F1]">
      <Welcome />
    </div>
  );
}

export default App;
